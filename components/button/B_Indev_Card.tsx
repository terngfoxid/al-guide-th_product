import Link from "next/link";

export default function B_Indev_Card() {

    const card_style = (
        {
            title_style: 'group-hover:animate-pulse absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-zinc-700 dark:text-zinc-300 text-3xl font-bold text-center',
            shape: "group relative w-11/12 rounded-lg shadow-md border bg-neutral-200 hover:bg-neutral-300 border-gray-300 dark:border-gray-800 dark:bg-neutral-800 dark:hover:bg-neutral-700 border-b-4 border-t-1 border-l-1 border-r-1 duration-300",
            body_style: "py-2 text-zinc-600 dark:text-zinc-400 text-lg md:text-2xl text-center ",
            image_style: "w-full rounded-lg shadow-xl",
            image_src: "/images/AVandY.webp",
        }
    );

    return (
        <button className={card_style.shape}>
            <Link href="/#" className="w-full">
                <img src={card_style.image_src} className={card_style.image_style} alt='button image' />
                <h1 className={card_style.title_style}>
                    <p>กำลัง</p>
                    <p>พัฒนา</p>
                </h1>
            </Link>
        </button>
    )
}