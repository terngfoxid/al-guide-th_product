import { ReactNode, useState } from "react";
import MenuItem from "./menuItem";
import { AiFillCaretLeft } from "react-icons/ai";
import MenuItemTop from "./menuitemtop";
import { FaHome, FaShip } from "react-icons/fa";
import { GiSwitchWeapon } from "react-icons/gi";
import { RiCalendarScheduleFill } from "react-icons/ri";

export default function TopLeftMenu({ children }: { children: ReactNode }) {
    const [showMenu, setShowMenu] = useState<boolean>(false)
    return (
        <>
            {
                showMenu && <div className="lg:hidden fixed top-0 left-0 w-[100vw] h-[100vh] bg-[#293242] z-10 bg-opacity-60">

                </div>
            }
            <div className="w-0 h-0 relative">
                <div className={`hidden lg:block absolute z-10 mt-[20px] h-[50px] rounded-r-full bg-[#223F6B] bg-opacity-90 w-[880px] ${showMenu ? "animate-slide-in-left" : "animate-slide-out-left"}`}>
                    <div className="w-full h-full z-10 pl-[345px] flex items-center gap-[5px]">
                        <div className="w-[100px] h-[40px]">
                            <MenuItemTop href="/" >
                                <><FaHome size={14} color="#ffffff" /><h2 className="text-white text-center text-[14px]">หน้าแรก</h2></>
                            </MenuItemTop>
                        </div>
                        <div className="w-[100px] h-[40px]">
                            <MenuItemTop href="/ship" >
                                <><FaShip size={14} color="#ffffff" /><h2 className="text-white text-center text-[14px]">ข้อมูลเรือ</h2></>
                            </MenuItemTop>
                        </div>
                        <div className="w-[160px] h-[40px]">
                            <MenuItemTop href="/" >
                                <><RiCalendarScheduleFill  size={14} color="#ffffff" /><h2 className="text-white text-center text-[14px]">ข้อมูลกิจกรรมล่าสุด</h2></>
                            </MenuItemTop>
                        </div>
                        <div className="w-[140px] h-[40px]">
                            <MenuItemTop href="/" >
                                <><GiSwitchWeapon size={14} color="#ffffff" /><h2 className="text-white text-center text-[14px]">ข้อมูล Augment</h2></>
                            </MenuItemTop>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative z-20 w-[340px] h-[50px] bg-[#0D1829] mt-[20px] rounded-r-full bg-opacity-90 flex items-center duration-300 hover:bg-[#192E4F] hover:bg-opacity-95">
                <button className="flex items-center"
                    onClick={() => {
                        setShowMenu(!showMenu);
                    }}>
                    <h1 className="ml-[100px] mr-[10px] text-white text-[20px]">Azur Lane Guide TH</h1>
                    {
                        <div className={`duration-500 ${showMenu ? 'rotate-0 ' : 'rotate-180'}`}>
                            <AiFillCaretLeft size={24} color="#ffffff" />
                        </div>
                    }
                </button>
                <div className="absolute left-[0.5rem] top-1/2 transform -translate-y-1/2 aspect-square w-[70px] rounded-md border-[2px] bg-[#0D1829] bg-opacity-80">
                    <img src="/images/AzurLane_Guide_TH_LOGO.webp" className="w-full" />
                </div>
                <ul className={`lg:hidden absolute left-[0.5rem] top-full mt-[2rem] w-300 flex flex-col gap-[1.5rem] ${showMenu ? "animate-slide-in-left" : "animate-slide-out-left"}`}>
                    <li className="z-30 rounded-2xl overflow-hidden hover:scale-105 duration-300 hover:shadow-[0_0_15px_4px_rgba(0,150,255,0.85)]">
                        <MenuItem href="/">
                            <FaHome size={20} color="#ffffff" /><h2 className="text-white text-center">หน้าแรก</h2>
                        </MenuItem>
                    </li>
                    <li className="z-30 rounded-2xl overflow-hidden hover:scale-105 duration-300 hover:shadow-[0_0_15px_4px_rgba(0,150,255,0.85)]">
                        <MenuItem href="/ship" >
                            <FaShip size={20} color="#ffffff" /><h2 className="text-white text-center">ข้อมูลเรือ</h2>
                        </MenuItem>
                    </li>
                    <li className="z-30 rounded-2xl overflow-hidden hover:scale-105 duration-300 hover:shadow-[0_0_15px_4px_rgba(0,150,255,0.85)]">
                        <MenuItem href="" >
                            <><RiCalendarScheduleFill size={20} color="#ffffff" /><h2 className="text-white text-center">ข้อมูลกิจกรรมล่าสุด</h2></>
                        </MenuItem>
                    </li>
                    <li className="z-30 rounded-2xl overflow-hidden hover:scale-105 duration-300 hover:shadow-[0_0_15px_4px_rgba(0,150,255,0.85)]">
                        <MenuItem href="" >
                            <><GiSwitchWeapon size={20} color="#ffffff" /><h2 className="text-white text-center">ข้อมูล Augment</h2></>
                        </MenuItem>
                    </li>
                    <li className="z-30 rounded-2xl overflow-hidden hover:scale-105 duration-300 hover:shadow-[0_0_15px_4px_rgba(0,150,255,0.85)]">
                        <MenuItem href="" >
                            <><FaHome size={20} color="#ffffff"/><h2 className="text-white text-center"></h2></>
                        </MenuItem>
                    </li>
                </ul>
            </div>
            <div className={`w-screen max-w-screen h-[calc(100vh-90px)] min-h-[calc(100vh-90px)] max-h-[calc(100vh-90px)] mt-[20px] py-[10px] overflow-hidden`}>
                {children}
            </div>
        </>
    );
}