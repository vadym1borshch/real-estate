import React, { ReactNode, useRef } from 'react'
import Button from '../components/atoms/button'
import { useAppDispatch } from '../store'
import { addToast } from '../store/toastSlise'

interface IFileUpload {
  callback: (files: File | File[]) => void;
  buttonTitle?: ReactNode;
  className?: string;
  multiple?: boolean;
}

const FileUpload = ({ callback, buttonTitle, className, multiple = false }: IFileUpload) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);

    const validFiles = files.filter(file => ['image/jpeg', 'image/png', 'application/pdf'].includes(file.type));

    if (validFiles.length > 0) {
      if (multiple) {
        callback(validFiles);
      } else {
        callback(validFiles[0]);
      }

      if (inputRef.current) {
        inputRef.current.value = '';
      }
    } else {
      dispatch(addToast({ message: "File format not supported", type: 'error' }));
    }
  };

  const handleButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <div className="flex flex-col items-center">
      <input
        ref={inputRef}
        type="file"
        accept=".jpeg,.jpg,.png,.pdf"
        multiple={multiple}
        onChange={handleFileChange}
        className="hidden"
      />

      <Button
        onClick={handleButtonClick}
        className={className}
      >
        {buttonTitle || (multiple ? "Add files" : "Add file")}
      </Button>
    </div>
  );
};

export default FileUpload;
