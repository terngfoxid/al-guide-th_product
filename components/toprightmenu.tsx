import Link from "next/link";

export default function TopRightMenu() {
    return (
            <Link className="hidden lg:flex w-[130px] h-[50px] bg-[#0D1829] mt-[20px] rounded-l-full bg-opacity-90 items-center duration-300 hover:bg-[#192E4F] hover:bg-opacity-95 hover:scale-110" href="">
                <h2 className="text-white text-[20px] w-full text-center">ผู้จัดทำ</h2>
            </Link>
    )
}