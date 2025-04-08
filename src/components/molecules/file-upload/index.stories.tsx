import { Meta, StoryFn } from '@storybook/react'
import FileUpload from './index'
import { useState } from 'react'

export default {
  component: FileUpload,
} as Meta

const Template: StoryFn<typeof FileUpload> = (args) => {
  const [files, setFiles] = useState<File | File[] | null>(null)
  return (
    <div>
      {files && !args.isMultiple && (
        <div>{'name' in files ? files?.name : ''}</div>
      )}
      {files && Array.isArray(files) && (
        <div className="flex flex-col gap-3">
          {files?.map((file) => <span>{file.name}</span>)}
        </div>
      )}
      <FileUpload
        {...args}
        buttonTitle="file upload"
        callback={(files) => {
          setFiles(files)
        }}
      />
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {}

export const Multiple = Template.bind({})
Multiple.args = {
  isMultiple: true,
}
