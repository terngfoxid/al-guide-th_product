import { useEffect, useState } from "react";

export default function Footer() {

    const [dark, setDark] = useState(false);

    useEffect(() => {
        document.body.classList.add("overflow-x-hidden");
        if (localStorage.getItem('Mode') == "dark"){
            document.body.classList.add("dark");
            document.body.classList.remove("bg-neutral-100");
            document.body.classList.add("bg-neutral-900");
            setDark(true)
        }
        else if(localStorage.getItem('Mode') == "light"){
            document.body.classList.remove("dark");
            document.body.classList.remove("bg-neutral-900");
            document.body.classList.add("bg-neutral-100");
            setDark(false)
        }
        else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            localStorage.setItem("Mode", "dark")
            document.body.classList.add("dark");
            document.body.classList.add("bg-neutral-900");
            setDark(true)
        } else {
            localStorage.setItem("Mode", "light")
            document.body.classList.add("bg-neutral-100");
            setDark(false)
        }
    }, []);

    const footer_style = (
        {
            appname: "© 2022 Azur Lane Guide TH",
            creator: "Made by SSTfoxide",
            //------
            bar_style: "bg-neutral-300 shadow-xl dark:bg-neutral-800",//Footer Bar color
            mode_style: "cursor-pointer text-xs text-zinc-600 font-bold text-center my-1 dark:text-zinc-400 w-max",
            appname_style: "text-lg text-zinc-600 font-bold text-center my-1 dark:text-zinc-400",//App name style
            creator_style: "text-xs text-zinc-600 text-center my-1 italic dark:text-zinc-400",//App name style
        }
    );

    const clickBTTmode = () => {
        if (dark == true) {
            document.body.classList.remove("dark");
            document.body.classList.remove("bg-neutral-900");
            document.body.classList.add("bg-neutral-100");
            localStorage.setItem("Mode", "light")
            setDark(false)
        }
        else {
            document.body.classList.add("dark");
            document.body.classList.remove("bg-neutral-100");
            document.body.classList.add("bg-neutral-900");
            localStorage.setItem("Mode", "dark")
            setDark(true)
        }
    }

    return (
        <div>
            <footer className={footer_style.bar_style}>
                <div className='w-auto h-auto py-1'>
                    <div>
                        <div className="flex justify-center">
                            {dark ? <p className={footer_style.mode_style} onClick={clickBTTmode}> Change Mode To Light</p>
                                : <p className={footer_style.mode_style} onClick={clickBTTmode}> Change Mode To Dark</p>
                            }
                        </div>
                        <p className={footer_style.appname_style}>{footer_style.appname}</p>
                        <p className={footer_style.creator_style}>{footer_style.creator}</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};