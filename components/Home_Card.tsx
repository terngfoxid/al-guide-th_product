export default function Home_Card() {
  const card_style = {
    title_style:
      "text-zinc-700 dark:text-zinc-200 text-2xl md:text-2xl lg:text-4xl font-bold text-center",

    shape:
      "bg-cover bg-center bg-neutral-200 w-11/12 md:w-5/6 2xl:w-full rounded-lg shadow-md border bg-neutral-200 border-gray-300 dark:border-gray-700 dark:bg-neutral-800",
    //bg-neutral-200 dark:bg-neutral-800 test-bg.jpg bg-[url('/images/test-bg.jpg')] aspect-video\
    subshape:
      "bg-gradient-to-b from-black/0 via-zinc-700/0 to-black/0 rounded-md ",
    position: "flex justify-center",
    body_style:
      "py-2 text-zinc-600 dark:text-zinc-300 text-xs md:text-sm lg:text-xl xl:text-2xl 2xl:text-3xl text-center",
  };

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
            </div>
          </h1>
          <br className="hidden md:block"></br>
          <div className={card_style.body_style}>
            <div className="flex justify-center">
              <div className="w-11/12 md:w-11/12">
                <div className="md:grid md:grid-cols-3">
                  <div className="space-y-1 md:col-span-2">
                    <p className="py-1 ">
                      เว็บไซต์นี้จัดทำขึ้นเพื่อสนับสนุนผู้การเกม AzurLane ชาวไทย
                    </p>
                    <p className="py-1 ">
                      โดยจะประกอบไปด้วยการแปลเนื้อหาสกิลของสาวเรือภายในเกม
                    </p>
                    <p className="py-1 ">
                      คำแนะนำและไกด์ในเรื่องต่างๆอย่าง เช่น
                      เรื่องเกียร์สวมใส่แนะนำ{" "}
                    </p>
                    <p className="py-1 ">
                      นอกจากนี้ยังมีทั้งคลิปรีวิวเรือต่างๆ
                      และประวัติของเรือบางลำ
                    </p>
                    <p className="py-1 ">
                      เรียบเรียงมาให้ได้อ่านกันด้วยน๊าา \^-^/
                    </p>
                  </div>
                  <br className="md:hidden"></br>
                  <div className="flex items-center justify-center">
                    <div className="w-11/12 h-full">
                      <div className="flex items-center justify-center h-full max-h-fit">
                        <img
                          src={"/images/AzurLane_Guide_TH_LOGO.webp"}
                          alt="Azur Lane Logo"
                          className="w-3/4 max-h-fit"
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
  );
}
