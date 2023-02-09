import Link from "next/link";
import Image from 'next/image'

export default function B_Ship_Card() {

    const card_style = (
        {
            shape: "hover:scale-110 overflow-hidden group relative w-11/12 rounded-lg shadow-md border bg-neutral-200 hover:bg-neutral-300 border-gray-300 dark:border-gray-800 dark:bg-neutral-800 dark:hover:bg-neutral-700 border-b-4 border-t-1 border-l-1 border-r-1 duration-300",
            body_style: "py-2 text-zinc-600 dark:text-zinc-400 text-lg md:text-2xl text-center ",
            image_style: "w-full rounded-lg ",
            image_src: "/images/Ship 600x300.webp",
        }
    );

    return (
        <button className={card_style.shape}>
            <Link href="/ship" className="w-full">
                <Image
                    src={card_style.image_src}
                    className={card_style.image_style}
                    alt='button image'
                    width="600"
                    height="300"
                />
            </Link>
        </button>
    )
}