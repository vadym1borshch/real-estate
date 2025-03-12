import React, { useRef } from 'react';
import Button from '../components/atoms/button'
import { useAppDispatch } from '../store'
import { addToast } from '../store/toastSlise'

interface IFileUpload {
  callback: (file: File) => void;
  buttonTitle?: string;
  className?: string;
}

const FileUpload = ({ callback, buttonTitle, className }: IFileUpload) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch()

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    const file = event.target.files?.[0];
    if (file && ['image/jpeg', 'image/png', 'application/pdf'].includes(file.type)) {
      callback(file);
      if (inputRef.current) {
        inputRef.current.value = '';
      }
    }
    else {
      dispatch(addToast({message:"file format not supported", type:'error'}));
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
        onChange={handleFileChange}
        className="hidden"
      />

      <Button
        onClick={handleButtonClick}
        className={className}
      >
        {buttonTitle || "Add file"}
      </Button>
    </div>
  );
};

export default FileUpload;
