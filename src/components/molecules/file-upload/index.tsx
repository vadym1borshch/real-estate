import React, { ReactNode, useRef } from 'react'
import Button from '../../atoms/button'
import { useAppDispatch } from '../../../store'
import { addToast } from '../../../store/toastSlise'
import { cn } from '../../../helpers/ui.ts'

interface IFileUpload {
  callback: (files: File | File[] | null) => void
  buttonTitle?: ReactNode
  className?: string
  isMultiple?: boolean
}

const validTypes = ['image/jpeg', 'image/png', 'application/pdf']

const FileUpload = ({
  callback,
  buttonTitle,
  className,
  isMultiple = false,
}: IFileUpload) => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const dispatch = useAppDispatch()

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files

    if (!fileList) {
      callback(null)
      return
    }

    const files = Array.from(fileList)
    const validFiles = files.filter((file) => validTypes.includes(file.type))

    if (validFiles.length > 0) {
      callback(isMultiple ? validFiles : validFiles[0])

      // reset input to allow reselecting same file
      if (inputRef.current) {
        inputRef.current.value = ''
      }
    } else {
      dispatch(
        addToast({ message: 'File format not supported', type: 'error' })
      )
      callback(null)
    }
  }

  const handleButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.click()
    }
  }

  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center"
    >
      <input
        ref={inputRef}
        type="file"
        accept=".jpeg,.jpg,.png,.pdf"
        multiple={isMultiple}
        onChange={handleFileChange}
        className="hidden"
      />

      <Button onClick={handleButtonClick} className={cn("w-full h-full", className)}>
        {buttonTitle || (isMultiple ? 'Add files' : 'Add file')}
      </Button>
    </div>
  )
}

export default FileUpload
