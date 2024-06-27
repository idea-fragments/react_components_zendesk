import { Button, ButtonProps } from "components/forms/Button"
import {
  ChangeEvent,
  FC,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react"

type FileChangeHandler =
  | {
      multiple?: false
      onFileChange: (f: File) => void
      onFilesChange?: (files: File[]) => void
    }
  | {
      multiple: true
      onFileChange?: (f: File) => void
      onFilesChange: (files: File[]) => void
    }

export type FileButtonProps = Omit<ButtonProps, "onClick"> & FileChangeHandler

export const FileButton: FC<FileButtonProps> = ({
  children,
  multiple,
  onFileChange,
  onFilesChange,
  ...props
}) => {
  const [loadingFileSelector, setLoadingFileSeletorTo] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const loadingTimeoutRef = useRef<NodeJS.Timeout>()

  const handleSelectedFile = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files!
      if (onFileChange) {
        onFileChange(files[0])
        return
      }

      onFilesChange!(Array.from(files))
    },
    [onFileChange, onFilesChange],
  )

  const openFileSelector = useCallback(() => {
    inputRef.current!.click()
    setLoadingFileSeletorTo(true)

    loadingTimeoutRef.current = setTimeout(() => {
      setLoadingFileSeletorTo(false)
    }, 2000)
  }, [])

  useEffect(() => {
    return () => {
      if (!loadingTimeoutRef.current) return
      clearTimeout(loadingTimeoutRef.current)
    }
  }, [])

  return (
    <>
      <input
        hidden
        multiple={multiple}
        onChange={handleSelectedFile}
        ref={inputRef}
        type="file"
      />
      <Button
        loading={loadingFileSelector}
        onClick={openFileSelector}
        {...props}>
        {children ?? "Select File"}
      </Button>
    </>
  )
}
