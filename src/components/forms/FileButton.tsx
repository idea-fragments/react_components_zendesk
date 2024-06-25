import { Button, ButtonProps } from "components/forms/Button"
import { ChangeEvent, FC, useCallback, useRef } from "react"

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
  const inputRef = useRef<HTMLInputElement>(null)

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
        onClick={openFileSelector}
        {...props}>
        {children ?? "Select File"}
      </Button>
    </>
  )
}
