import Image from 'next/image'

export default function Home_Card() {

    const card_style = (
        {
            title_style: 'text-zinc-700 dark:text-zinc-200 text-2xl md:text-2xl lg:text-3xl font-bold text-center',

            shape: "bg-cover bg-center bg-neutral-200 w-11/12 md:w-5/6 2xl:w-2/3 rounded-lg shadow-md border bg-neutral-200 border-gray-300 dark:border-gray-700 dark:bg-neutral-800",
            //bg-neutral-200 dark:bg-neutral-800 test-bg.jpg bg-[url('/images/test-bg.jpg')] aspect-video\
            subshape: "bg-gradient-to-b from-black/0 via-zinc-700/0 to-black/0 rounded-md ",
            position: "flex justify-center",
            body_style: "py-2 text-zinc-600 dark:text-zinc-300 text-xs md:text-base lg:text-2xl 2xl:text-2xl text-center",
            button_style: "rounded bg-neutral-300 hover:bg-neutral-400 dark:bg-neutral-700 dark:hover:bg-neutral-600 border border-gray-400 dark:border-gray-600 text-zinc-700 dark:text-zinc-300 py-1 px-1 duration-300 hover:animate-pulse",
        }
    );

    const cleardata = () => {
        if (localStorage.getItem('Mode') == "dark") {
            localStorage.clear()
            localStorage.setItem("Mode", "dark")
        }
        else {
            localStorage.clear()
            localStorage.setItem("Mode", "light")
        }
        window.location.reload();
    }

    return (
        <div className={card_style.position}>
            <div className={card_style.shape}>
                <div className={card_style.subshape}>
                    <br></br>
                    <h1 className={card_style.title_style}>
                        <div className="md:flex md:justify-center md:items-center">
                            <p>ยินดีต้อนรับเข้าสู่</p>
                            <p className="hidden md:block">&nbsp;</p>
                            <p>Azur Lane Guide TH</p>
                            <p className="hidden md:block">&nbsp;</p>
                            <p className="text-xs">(รุ่นทดสอบ V.0.2.1)</p>
                        </div>
                    </h1>
                    <br className="hidden md:block"></br>
                    <div className={card_style.body_style}>
                        <div className="flex justify-center">
                            <div className="w-11/12 md:w-11/12">
                                <div className="md:grid md:grid-cols-3">
                                    <div className="md:col-span-2">
                                        <p className="py-1 ">เว็บไซต์นี้จัดทำเพื่อสนับสนุนผู้เล่นเกม Azur Lane ชาวไทย</p>
                                        <p className="py-1 ">เรามีการเก็บข้อมูลบางส่วนไว้ใน Browser แบบ Offline</p>
                                        <p className="py-1 ">เนื่องจากต้องการประหยัดค่าใช้จ่ายในการดูแลเว็บไซต์</p>
                                        <p className="py-1 ">หากข้อมูลตัวละครไม่มีการอัพเดตเช่น ไม่มีร่าง Retrofit ใหม่</p>
                                        <p className="py-1 ">ให้ทำการคลิก&nbsp;
                                            <button className={card_style.button_style}
                                                onClick={cleardata}>
                                                &nbsp;ลบข้อมูลเว็บไซต์&nbsp;
                                            </button>
                                        </p>
                                        <p className="py-1 ">***ขออภัยในความไม่สะดวก***</p>
                                    </div>
                                    <br className="md:hidden"></br>
                                    <div className="flex justify-center items-center">
                                        <div className="w-11/12">
                                            <div className="flex justify-center items-center">
                                            <Image
                                                src={"/images/AzurLane_Guide_TH_LOGO.webp"}
                                                alt="Azur Lane Logo"
                                                width="300"
                                                height="300"
                                            />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br className="hidden md:block"></br>
                </div>
            </div>
        </div>
    )
}