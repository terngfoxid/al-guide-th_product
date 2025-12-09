import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from "react";
import { LuLoaderCircle } from "react-icons/lu";

interface ILoadingContextType {
  showLoading: () => void;
  hideLoading: () => void;
}

interface ILoadingContextProps {
  children: ReactNode;
}

const LoadingContext = createContext<ILoadingContextType | null>(null);

export const LoadingProvider: React.FC<ILoadingContextProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<number>(0)

  const showLoading = useCallback(() => {
    setIsLoading(isLoading+1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const hideLoading = useCallback(() => {
    setIsLoading(isLoading > 0 ? isLoading-1: 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const value = useMemo(
    () => ({ showLoading, hideLoading }),
    [showLoading, hideLoading]
  );

  return (
    <LoadingContext.Provider value={value}>
      {children}
      {
        isLoading > 0 ?
          <>
            <div className="fixed inset-0 flex justify-center items-center bg-black/30 z-[2020]">
              <div className="flex flex-col items-center gap-4 p-6 bg-transparent">
                <LuLoaderCircle className="animate-spin" style={{ fontSize: 48 ,color:"#ffffff"}}/>
                <p className="m-0 text-[#ffffff] font-bold">กำลังโหลด</p>
              </div>
            </div>
          </>
          : <></>
      }
    </LoadingContext.Provider>
  );
};

export const useLoading = (): ILoadingContextType => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within an LoadingProvider");
  }
  return context;
};