import Link from "next/link";
import Image from "next/image";

export default function B_Meaw_Card() {
  const card_style = {
    shape:
      "hover:scale-110 overflow-hidden group relative w-11/12 rounded-lg shadow-md border bg-neutral-200 hover:bg-neutral-300 border-gray-300 dark:border-gray-800 dark:bg-neutral-800 dark:hover:bg-neutral-700 border-b-2 border-t-1 border-l-1 border-r-1 duration-300",
    body_style:
      "py-2 text-zinc-600 dark:text-zinc-400 text-lg md:text-2xl text-center ",
    image_style: "w-full rounded-lg ",
    image_src: "/images/BMO2 600x300.webp",
  };

  return (
    <button className={card_style.shape}>
      <Link
        href="https://www.youtube.com/watch?v=g71yGC8BT9I&list=PLV1EIHogeDOAK4lmtLxLr_-E0h2PcZ0Zn"
        className="w-full"
        legacyBehavior
      >
        <a target="_blank">
          <Image
            src={card_style.image_src}
            className={card_style.image_style}
            alt="button image"
            width="600"
            height="300"
          />
        </a>
      </Link>
    </button>
  );
}
