import Link from "next/link";
import { ReactNode } from "react";

export default function MenuItemTop({ children,href }: { children: ReactNode,href:string }) {
    return (
        <Link className="h-full " href={href}>
            <div className="h-full rounded-md bg-[#758FBD] bg-opacity-90 p-[0.5rem] flex items-center justify-center gap-[4px] hover:bg-[#87A4D9] hover:bg-opacity-95 hover:shadow-[0_0_15px_4px_rgba(0,150,255,0.85)]">
                {children}
            </div>
        </Link>
    );
}