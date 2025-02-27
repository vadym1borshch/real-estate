import React, { ReactNode, useEffect } from "react";
import Button from "../../atoms/button";
import Icon from "../../atoms/icon";
import H3 from "../../atoms/typography/h3";
import { cn } from '../../../helpers/ui.ts'

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  children: ReactNode;
  title?: string;
  className?: string;
}

const Modal = ({ open, setOpen, children, title, className }: Props) => {
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const modal = document.getElementById("modal");
      if (modal && !modal.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-charcoal opacity-50" />
      <div
        id="modal"
        className={cn("bg-white w-full rounded-lg shadow-lg p-6 relative z-10 mx-4", className)}
      >
        <div className="flex flex-col items-center">
          <Button
            onClick={() => setOpen(false)}
            variant="text"
            className="self-end p-0 h-fit"
          >
            <Icon
              id="closeIcon"
              className="w-[24px] h-[24px] text-charcoal"
              onClick={() => setOpen(false)}
            />
          </Button>

          {title && <H3 text={title} className="mt-3 mb-6" />}
        </div>
        <div className="px-[2.875rem] pb-[2.875rem]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
