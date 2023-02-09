import Link from 'next/link'
import { useState } from 'react';

export default function Topbar() {
  const [navbar, setNavbar] = useState(false);

  const topbar_style = (
    {
      appname: "Azur Lane Guide TH",
      svg_appname: "",
      //------
      bar_style: "bg-neutral-200 shadow-xl dark:bg-neutral-800 w-full",//Header Bar color
      appname_style: "text-2xl md:text-2xl lg:text-3xl text-zinc-600 font-bold my-1 px-2 dark:text-zinc-300",//App name on left
      list_style: "block w-full h-full py-3 pl-3 pr-4 rounded no-underline text-center text-zinc-600 font-bold md:shadow-none hover:bg-neutral-300 hover:dark:bg-neutral-600 dark:text-gray-300 duration-300",//Hover of Menu list on right 
      smalldevice_style: "bg-neutral-200 w-full h-full items-center shadow md:shadow-none dark:bg-neutral-800 ",
      unhide_menu_style: "p-2 text-gray-700 rounded-md outline-none border-gray-300 border shadow",
    }
  );

  //Menu Preset
  const menu_list = [];
  menu_list.push(
    <li className='shadow md:shadow-none'><Link className={topbar_style.list_style} href="/ship">ข้อมูลเรือ</Link></li>
  )
  menu_list.push(
    <li className='shadow md:shadow-none'><Link className={topbar_style.list_style} href="/active_event">กิจกรรม</Link></li>
  )
  menu_list.push(
    <li className='shadow md:shadow-none'><Link className={topbar_style.list_style} href="/contact">ผู้จัดทำ</Link></li>
  )

  return (
    <>
      <div >
        <nav className={topbar_style.bar_style}>
          <div className="justify-center w-full items-center flex">
            <div className='w-full md:w-5/6 h-full flex'>
              <div className="w-full md:flex md:justify-between">
                <div className='flex justify-center'>
                  <div className='w-11/12 h-16 md:w-full'>
                    <div className='flex justify-between items-center h-16 block'>
                      <Link href="/" className='no-underline h-full items-center flex'>
                        <h2 className={topbar_style.appname_style}>
                          {"" + topbar_style.appname}
                        </h2>
                      </Link>
                      <div className="md:hidden">
                        <button
                          className=""
                          onClick={() => setNavbar(!navbar)}
                          aria-label="menu"
                        >
                          {navbar ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-6 h-6 text-white"
                              viewBox="0 0 20 20"
                              fill="gray"
                            >
                              <path

                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"

                              />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-6 h-6 text-white"
                              fill="gray"
                              viewBox="0 0 24 24"
                              stroke='gray'

                            >
                              <path
                                d="M4 6h16M4 12h16M4 18h16"
                              />
                            </svg>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='m-0 h-full items-center'>
                  <div className={navbar ? 'flex-auto justify-self-center mt-0 block md:h-full md:items-center' : 'hidden md:block md:h-full md:items-center'}>
                    <div className={topbar_style.smalldevice_style}>
                      <ul className="items-center justify-center gap-x-2 md:flex md:space-x-10 md:space-y-0 h-full w-full p-0 m-0">
                        {menu_list}
                      </ul>
                    </div>
                  </div>
                </div>

              </div>

            </div>


          </div>
        </nav>

      </div >
    </>
  )
}