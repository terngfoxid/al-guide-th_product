import { useEffect, useState } from "react";


export default function BackToTop() {

    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => {
        if (window.pageYOffset > 150) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)

        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, [])

    const clickBTT = () => {
        
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    const btn_style = (
        {
            symbol_style: 'w-5/6 text-zinc-200 text-2xl font-bold font-serif ',
            btn_style: " p-2 rounded-full shadow-md border border-gray-400 bg-gray-200 hover:bg-neutral-300",
            set_overlay: "fixed bottom-2 right-2 md:bottom-5 md:right-5 ",
        }
    );

    return (
        <div className={btn_style.set_overlay}>
            <button onClick={clickBTT} className={isVisible ? btn_style.btn_style + " " + 'block' : 'hidden'}
            >
                <svg
                    aria-hidden="true"
                    data-prefix="fas"
                    className="w-8 h-8 md:w-8 md:h-8"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                >
                    <path
                        fill="black"
                        d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
                    ></path>
                </svg>
            </button>
        </div>
    );
};
