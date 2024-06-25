import { FileButton, FileButtonProps } from "components/forms/FileButton"
import { FlexBox } from "components/layout/FlexBox"
import { useState } from "react"

export default {
  title: "forms/FileButton",
  component: FileButton,
  argTypes: {
    color: {},
  },
}

const Story = (props: Partial<FileButtonProps>) => {
  const [file, setFile] = useState<File>()
  const [files, setFiles] = useState<File[]>()

  return (
    <FlexBox withRows>
      <FileButton onFileChange={setFile}>Select File</FileButton>
      <div>Single File: {file?.name ?? "none"}</div>
      <FileButton
        multiple
        onFilesChange={setFiles}>
        Select File
      </FileButton>
      <div>
        <div>Multi Files:</div>
        {files?.map((f) => <div key={f.name}>{f.name}</div>) ?? "none"}
      </div>
    </FlexBox>
  )
}

export const Default = Story.bind({})
Default.args = {}
