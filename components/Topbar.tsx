import Link from "next/link";
import { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";

export default function TopBar() {
  const [open, setOpen] = useState<boolean>(false);

  const menu = [
    {
      label: "ข้อมูลเรือ",
      path: "/ship",
    },
    {
      label: "กิจกรรม",
      path: "/active_event_slide",
    },
    {
      label: "ผู้จัดทำ",
      path: "/contact",
    },
  ];
  return (
    <header className="flex bg-neutral-200 dark:bg-neutral-800 text-zinc-600 dark:text-gray-300">
      <div className="container flex items-center mx-auto">
        <div className="w-11/12 mx-auto flex flex-wrap lg:w-5/6 items-center justify-between">
          <h1 className="h-16 flex items-center justify-between whitespace-nowrap text-2xl md:w-fit md:text-2xl lg:text-3xl">
            <Link href="/">Azur Lane Guide TH</Link>
          </h1>

          <div className="flex order-2 md:order-3">
            <div className="flex items-center order-1">
              <ThemeSwitcher />
            </div>

            <button
              aria-label="menu"
              className="ml-4 md:hidden order-2 md:order-1"
              onClick={() => setOpen((current) => !current)}
            >
              {open ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-white"
                  viewBox="0 0 20 20"
                  fill="gray"
                >
                  <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-white"
                  fill="gray"
                  viewBox="0 0 24 24"
                  stroke="gray"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
          <nav
            className={`basis-full order-3 md:order-2 md:basis-auto md:flex items-center justify-between text-center ${
              open ? "block" : "hidden"
            }`}
          >
            <ul className="gap-4 md:flex">
              {menu.map((item) => (
                <li
                  className="transition rounded hover:bg-neutral-300 hover:dark:bg-neutral-600"
                  key={`link-${item.label}`}
                >
                  <Link
                    onClick={() => setOpen(false)}
                    className="block px-4 py-2"
                    href={item.path}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
