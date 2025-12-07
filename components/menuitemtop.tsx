import Link from "next/link";
import { ReactNode } from "react";

export default function MenuItemTop({ children,href }: { children: ReactNode,href:string }) {
    return (
        <Link href={href}>
            <div className="rounded-md bg-[#758FBD] bg-opacity-90 p-[0.5rem] flex items-center gap-[10px] hover:bg-[#87A4D9] hover:bg-opacity-95">
                {children}
            </div>
        </Link>
    );
}