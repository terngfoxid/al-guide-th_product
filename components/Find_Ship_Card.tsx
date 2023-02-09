import Link from 'next/link'
import Image from 'next/image'

export default function Find_Ship_Card() {

    const card_style = (
        {
            title_style: 'text-zinc-700 dark:text-zinc-300 text-2xl font-bold text-center',
            shape: "bg-cover bg-center  w-11/12 md:w-11/12 lg:w-11/12 xl:w-5/6 2xl:w-3/4 rounded-lg shadow-md border bg-[url('/images/MainDayBG.webp')] border-gray-300 dark:border-gray-700 dark:bg-[url('/images/MainTwilightBG.webp')]",
            //bg-neutral-200 dark:bg-neutral-800 test-bg.jpg bg-[url('/images/test-bg.jpg')] aspect-video\
            position: "flex justify-center",
            body_style: "py-2 text-zinc-700 dark:text-zinc-300 text-lg md:text-sm lg:text-xl xl:text-2xl text-center",
            button_style: "cursor-pointer w-full h-full py-2 rounded hover:bg-neutral-300 dark:hover:bg-neutral-700 flex flex justify-start items-center duration-300",
            image_style: "w-full rounded shadow-xl",
        }
    );

    return (
        <div className={card_style.position}>
            <div className={card_style.shape}>
                <br></br>
                <br className=""></br>
                <div className={card_style.body_style}>
                    <div className="flex justify-center items-center md:text-3xl">
                        <div className='w-1/2 md:w-1/4 border border-[#ffe259]'>
                            <Image
                                src="/images/Faction main.webp"
                                className={card_style.image_style}
                                alt='image'
                                width="500"
                                height="100"
                            />
                        </div>
                    </div>
                    <br></br>
                    <div className='flex justify-center'>
                        <div className="w-5/6 md:w-full md:grid md:grid-cols-3 md:gap-y-2">

                            <div className="flex justify-center">
                                <Link className="w-11/12 flex items-center hover:scale-110 duration-300 rounded border border-[#00d8ff]" href="/faction/Eagle Union">
                                    <Image
                                        src="/images/faction/Faction Eagle Union 500x100.webp"
                                        className={card_style.image_style}
                                        alt='button image'
                                        width="500"
                                        height="100"
                                    />
                                </Link>
                            </div>

                            <br className="md:hidden"></br>

                            <div className="flex justify-center">
                                <Link className="w-11/12 flex items-center hover:scale-110 duration-300 rounded border border-[#ffe259]" href="/faction/Royal Navy">
                                    <Image
                                        src="/images/faction/Faction Royal Navy 500x100.webp"
                                        className={card_style.image_style}
                                        alt='button image'
                                        width="500"
                                        height="100"
                                    />
                                </Link>
                            </div>

                            <br className="md:hidden"></br>

                            <div className="flex justify-center">
                                <Link className="w-11/12 flex items-center  hover:scale-110 duration-300 rounded border border-[#ed4264]" href="/faction/Sakura Empire">
                                    <Image
                                        src="/images/faction/Faction Sakura Empire 500x100.webp"
                                        className={card_style.image_style}
                                        alt='button image'
                                        width="500"
                                        height="100"
                                    />
                                </Link>
                            </div>

                            <br className="md:hidden"></br>

                            <div className="flex justify-center">
                                <Link className="w-11/12 flex items-center  hover:scale-110 duration-300 rounded border border-[#ff1c23]" href="/faction/Iron Blood">
                                    <Image
                                        src="/images/faction/Faction Iron Blood 500x100.webp"
                                        className={card_style.image_style}
                                        alt='button image'
                                        width="500"
                                        height="100"
                                    />
                                </Link>
                            </div>

                            <br className="md:hidden"></br>

                            <div className="flex justify-center">
                                <Link className="w-11/12 flex items-center hover:scale-110 duration-300 rounded border border-[#90f9c4]" href="/faction/Dragon Empery">
                                    <Image
                                        src="/images/faction/Faction Dragon Empery 500x100.webp"
                                        className={card_style.image_style}
                                        alt='button image'
                                        width="500"
                                        height="100"
                                    />
                                </Link>
                            </div>

                            <br className="md:hidden"></br>

                            <div className="flex justify-center">
                                <Link className="w-11/12 flex items-center hover:scale-110 duration-300 rounded border border-[#12d8fa]" href="/faction/Northern Parliament">
                                    <Image
                                        src="/images/faction/Faction Northern Parliament 500x100.webp"
                                        className={card_style.image_style}
                                        alt='button image'
                                        width="500"
                                        height="100"
                                    />
                                </Link>
                            </div>

                            <br className="md:hidden"></br>

                            <div className="flex justify-center">
                                <Link className="w-11/12 flex items-center hover:scale-110 duration-300 rounded border border-[#fff83e]" href="/faction/Iris Libre">
                                    <Image
                                        src="/images/faction/Faction Iris Libre 500x100.webp"
                                        className={card_style.image_style}
                                        alt='button image'
                                        width="500"
                                        height="100"
                                    />
                                </Link>
                            </div>

                            <br className="md:hidden"></br>

                            <div className="flex justify-center">
                                <Link className="w-11/12 flex items-center hover:scale-110 duration-300 rounded border border-[#e52d27]" href="/faction/Vichya Dominion">
                                    <Image
                                        src="/images/faction/Faction Vichya Dominion 500x100.webp"
                                        className={card_style.image_style}
                                        alt='button image'
                                        width="500"
                                        height="100"
                                    />
                                </Link>
                            </div>

                            <br className="md:hidden"></br>

                            <div className="flex justify-center">
                                <Link className="w-11/12 flex items-center hover:scale-110 duration-300 rounded border border-[#71fd03]" href="/faction/Sardegna Empire">
                                    <Image
                                        src="/images/faction/Faction Serdegna Empire 500x100.webp"
                                        className={card_style.image_style}
                                        alt='button image'
                                        width="500"
                                        height="100"
                                    />
                                </Link>
                            </div>

                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="flex justify-center items-center md:text-3xl">
                        <div className='w-1/2 md:w-1/4 border border-[#ffe259]'>
                            <Image
                                src="/images/Faction extra.webp"
                                className={card_style.image_style}
                                alt='image'
                                width="500"
                                height="100"
                            />
                        </div>
                    </div>
                    <br></br>

                    <div className='flex justify-center'>
                        <div className="w-5/6 md:w-full md:grid md:grid-cols-3 md:gap-y-2">

                            <div className="flex justify-center">
                                <Link className="w-11/12 flex items-center hover:scale-110 duration-300 rounded border border-[#2193b0]" href="/faction/Tempesta">
                                    <Image
                                        src="/images/faction/Faction Tempesta 500x100.webp"
                                        className={card_style.image_style}
                                        alt='button image'
                                        width="500"
                                        height="100"
                                    />
                                </Link>
                            </div>

                            <br className="md:hidden"></br>

                            <div className="flex justify-center">
                                <Link className="w-11/12 flex items-center hover:scale-110 duration-300 rounded border border-[#ff9813]" href="/faction/META">
                                    <Image
                                        src="/images/faction/Faction META 500x100.webp"
                                        className={card_style.image_style}
                                        alt='button image'
                                        width="500"
                                        height="100"
                                    />
                                </Link>
                            </div>

                            <br className="md:hidden"></br>

                            <div className="flex justify-center">
                                <Link className="w-11/12 flex items-center hover:scale-110 duration-300 rounded border border-[#ffa8c1]" href="/faction/Collab">
                                    <Image
                                        src="/images/faction/Faction Callab 500x100.webp"
                                        className={card_style.image_style}
                                        alt='button image'
                                        width="500"
                                        height="100"
                                    />
                                </Link>
                            </div>

                            <br className="md:hidden"></br>

                        </div>
                    </div>

                </div>
                <br className="hidden md:block"></br>
            </div>
        </div>
    )
}