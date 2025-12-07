import Link from "next/link";
import { ReactNode } from "react";

export default function MenuItem({ children,href }: { children: ReactNode,href:string }) {
    return (
        <Link href={href}>
            <div className="bg-[#274578] bg-opacity-90 p-[1rem] flex items-center gap-[10px] hover:bg-[#345DA1] hover:bg-opacity-95">
                {children}    
            </div>
        </Link>
    );
}