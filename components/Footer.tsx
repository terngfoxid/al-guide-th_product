import { useEffect, useState } from "react";

export default function Footer() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.classList.add("overflow-x-hidden");

    if (localStorage.getItem("Mode") == "dark") {
      return setMode("dark");
    }

    if (localStorage.getItem("Mode") == "light") {
      return setMode("light");
    }

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return setMode("dark");
    }

    return setMode("light");
  }, []);

  function setMode(mode: "light" | "dark") {
    if (mode == "dark") {
      document.body.classList.add("dark");
      document.body.classList.remove("bg-neutral-100");
      document.body.classList.add("bg-neutral-900");

      localStorage.setItem("Mode", "dark");
      setDark(true);
    }

    if (mode == "light") {
      document.body.classList.remove("dark");
      document.body.classList.remove("bg-neutral-900");
      document.body.classList.add("bg-neutral-100");

      localStorage.setItem("Mode", "light");
      setDark(false);
    }
  }

  function clearData() {
    const mode = localStorage.getItem("Mode");
    localStorage.clear();
    localStorage.setItem("Mode", mode ?? "light");
    window.location.reload();
  }

  return (
    <div id="footer">
      <footer className="py-3 shadow-xl bg-neutral-300 dark:bg-neutral-800">
        <div className="flex justify-center">
          <button
            className="px-1 py-1 mx-2 text-xs font-bold text-center duration-300 border border-transparent rounded bg-neutral-300 hover:bg-neutral-400 dark:bg-neutral-800 dark:hover:bg-neutral-600 hover:border-gray-400 dark:hover:border-gray-600 text-zinc-600 dark:text-zinc-400 hover:scale-110"
            onClick={() => (dark ? setMode("light") : setMode("dark"))}
          >
            {dark ? "กลับสู่แสงสว่าง" : "เข้าสู่โลกมืด"}
          </button>
          <button
            className="px-1 py-1 mx-2 text-xs font-bold text-center duration-300 border border-transparent rounded bg-neutral-300 hover:bg-neutral-400 dark:bg-neutral-800 dark:hover:bg-neutral-600 hover:border-gray-400 dark:hover:border-gray-600 text-zinc-600 dark:text-zinc-400 hover:scale-110"
            onClick={() => clearData()}
          >
            ลบแคชเว็บไซต์
          </button>
        </div>
        <div className="flex flex-col my-1 text-center text-zinc-600 dark:text-zinc-400">
          <span className="text-lg font-bold">© 2022 Azur Lane Guide TH</span>
          <span className="text-xs italic">Made by SSTfoxide</span>
        </div>
      </footer>
    </div>
  );
}
