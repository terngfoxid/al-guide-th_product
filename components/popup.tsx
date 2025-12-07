import { useState, ReactNode, forwardRef, useImperativeHandle, useRef } from "react";

interface IPopupProps {
  header?: string;
  children?: ReactNode;
  onClose?: () => void;
}

export interface IPopupRef {
  openPopup: () => void;
  closePopup: () => void;
}

const PopupDialog = forwardRef<IPopupRef, IPopupProps>(
  ({ header = "HEAD", children, onClose }, ref) => {
    const [open, setOpen] = useState(false);
    const overlayRef = useRef<HTMLDivElement | null>(null);

    const handleOpen = () => {
      document.body.style.overflow = "hidden";
      setOpen(true)
    };
    const handleClose = () => {
      document.body.style.overflow = "";
      setOpen(false);
      if (onClose) onClose();
    };

    // expose function ให้ parent เรียก
    useImperativeHandle(ref, () => ({
      // ตอน parent เรียกใช้ ให้ใช้ current
      openPopup: handleOpen,
      closePopup: handleClose,
    }));

    if (!open) return null;

    return (
      <div ref={overlayRef} className="fixed inset-0 flex items-center justify-center bg-black/40 z-[2001]">
        <div className="animate-slide-in-bottom bg-[#182D4D] shadow-[0_0_15px_4px_rgba(0,150,255,0.85)] bg-opacity-95 rounded-xl w-[1041px] max-w-[90vw]">
          {/* Header */}
          <div className="p-[20px] flex justify-between items-center rounded-t-lg">
            <h2 className="py-2 px-2 text-[20px] text-[#ffffff]">{header}</h2>
            <button
              className="text-[#ffffff] font-bold mr-3"
              onClick={handleClose}
            >
              ✕
            </button>
          </div>

          {/* Content */}
          <div className="pt-4 max-h-[80vh] overflow-auto">{children}</div>
        </div>
      </div>

    );
  }
);
PopupDialog.displayName = "PopupDialog";
export default PopupDialog;