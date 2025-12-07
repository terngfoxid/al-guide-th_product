import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from "react";

type DialogType = "confirm" | "success" | "warning" | "error";

interface IBaseDialogConfig {
  title?: string | TrustedHTML;
  message?: string | TrustedHTML;
  onClose?: () => any;
}

interface IConfirmDialogConfig extends IBaseDialogConfig {
  onConfirm?: () => any;
}

interface IDialogContextType {
  openConfirmDialog: (config: IConfirmDialogConfig) => void;
  openSuccessDialog: (config: IBaseDialogConfig) => void;
  openWarningDialog: (config: IBaseDialogConfig) => void;
  openErrorDialog: (config: IBaseDialogConfig) => void;
}

interface IDialogContextProps {
  children: ReactNode;
}

interface IDialogState {
  type: DialogType;
  title?: string | TrustedHTML;
  message?: string | TrustedHTML;
  onConfirm?: () => any;
  onClose?: () => any;
  open: boolean;
}

const DialogContext = createContext<IDialogContextType | null>(null);

export const DialogProvider: React.FC<IDialogContextProps> = ({ children }) => {
  const [dialog, setDialog] = useState<IDialogState>({
    type: "success",
    open: false,
  });

  const openConfirmDialog = useCallback((config: IConfirmDialogConfig) => {
    document.body.style.overflow = "hidden";
    setDialog({
      type: "confirm",
      title: config.title ?? "",
      message: config.message ?? "",
      onConfirm: config.onConfirm,
      onClose: config.onClose,
      open: true,
    })
  }, []);

  const openSuccessDialog = useCallback((config: IBaseDialogConfig) => {
    document.body.style.overflow = "hidden";
    setDialog({
      type: "success",
      title: config.title ?? "",
      message: config.message ?? "",
      onClose: config.onClose,
      open: true,
    })
  }, []);

  const openWarningDialog = useCallback((config: IBaseDialogConfig) => {
    document.body.style.overflow = "hidden";
    setDialog({
      type: "warning",
      title: config.title ?? "",
      message: config.message ?? "",
      onClose: config.onClose,
      open: true,
    })
  }, []);

  const openErrorDialog = useCallback((config: IBaseDialogConfig) => {
    document.body.style.overflow = "hidden";
    setDialog({
      type: "error",
      title: config.title ?? "",
      message: config.message ?? "",
      onClose: config.onClose,
      open: true,
    })
  }, []);

  const value = useMemo(
    () => ({ openConfirmDialog, openSuccessDialog, openWarningDialog, openErrorDialog }),
    [openConfirmDialog, openSuccessDialog, openWarningDialog, openErrorDialog]
  );

  const closeDialog = () => {
    document.body.style.overflow = "";
    dialog.onClose?.();
    setDialog((prev) => ({ ...prev, open: false }));
  };

  const confirmDialog = () => {
    document.body.style.overflow = "";
    dialog.onConfirm?.();
    setDialog((prev) => ({ ...prev, open: false }));
  };

  return (
    <DialogContext.Provider value={value}>
      {children}
      {
        dialog.open ? <>
          <div className="fixed inset-0 flex items-start justify-center bg-black/40 z-[2002]">
            <div className="bg-[#182D4D] shadow-[0_0_15px_4px_rgba(0,150,255,0.85)] bg-opacity-95 rounded-xl overflow-hidden min-w-[300px] md:min-w-[450px] max-w-[90vw] mt-8">
              <div className="p-[16px] flex justify-between items-center">
                <p className="text-[16px] text-[#ffffff] font-bold" dangerouslySetInnerHTML={{ __html: dialog.title ?? "" }}></p>
                <button
                  className="text-[#ffffff] font-bold mr-3"
                  onClick={closeDialog}
                >
                  ✕
                </button>
              </div>
              <div className="py-[16px] px-[20px]">
                <p className="text-[14px] text-[#ffffff]" dangerouslySetInnerHTML={{ __html: dialog.message ?? "" }}></p>
              </div>
              <div className="p-[16px] flex justify-end gap-3">
                <div className="w-[70px]">
                  <button
                    className="p-[12px] text-[16px] text-[#ffffff] rounded-lg hover:bg-[#2D548F] hover:bg-opacity-90"
                    onClick={closeDialog}
                  >
                  {dialog.type === "confirm" ? "ยกเลิก" : "ปิด"}</button>
                </div>
                {
                  dialog.type === "confirm" &&
                  <div className="w-[90px]">
                    <button
                      className="p-[12px] text-[16px] text-[#ffffff] rounded-lg hover:bg-[#2D548F] hover:bg-opacity-90"
                      onClick={confirmDialog}
                    >
                      ยืนยัน</button>
                  </div>
                }
              </div>
            </div>
          </div>
        </> : <>
        </>
      }
    </DialogContext.Provider>
  );
}

export const useDialog = (): IDialogContextType => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error("useDialog must be used within an DialogProvider");
  }
  return context;
};