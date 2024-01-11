export default function Home_Card() {
  const card_style = {
    title_style:
      "text-zinc-100 text-2xl md:text-2xl lg:text-3xl font-bold text-center",

    shape:
      //"bg-cover bg-center bg-neutral-200 w-11/12 md:w-5/6 2xl:w-full rounded-lg shadow-md border bg-neutral-200 border-gray-300 dark:border-gray-700 dark:bg-neutral-800",
    //bg-neutral-200 dark:bg-neutral-800 test-bg.jpg bg-[url('/images/test-bg.jpg')] aspect-video\
    "bg-cover bg-center w-11/12 md:w-5/6 2xl:w-full rounded-lg shadow-md border border-gray-300 dark:border-gray-700 bg-[url('/images/HomeBG.jpg')] bg-[left_-3rem_top_0rem] md:bg-[left_0rem_top_-5rem]",
    subshape:
      "bg-gradient-to-b from-black/80 via-zinc-800/80 to-black/80 rounded-md ",
    position: "flex justify-center",
    body_style:
      "py-2 text-zinc-100 text-xs md:text-sm lg:text-xl xl:text-2xl 2xl:text-3xl text-center",
  };

  return (
    <div className={card_style.position}>
      <div className={card_style.shape}>
        <div className={card_style.subshape}>
          <br></br>
          <div className={card_style.title_style}>
            <div className="md:flex md:justify-center md:items-center gap-y-2 pb-2 md:pb-4">
              <p>ยินดีต้อนรับเข้าสู่</p>
              <p className="hidden md:block">&nbsp;</p>
              <h1>Azur Lane Guide TH</h1>
              <p className="hidden md:block">&nbsp;</p>
              <p className="text-xl md:text-xl lg:text-2xl">(อาซูร์เลนไกด์ภาษาไทย)</p>
            </div>
          </div>
          <div className={card_style.body_style}>
            <div className="flex justify-center">
              <div className="w-11/12 md:w-11/12">
                <div className="md:grid md:grid-cols-3">
                  <div className="space-y-1 md:col-span-2">
                    <p className="py-1 ">
                      เว็บไซต์ที่จัดทำขึ้นเพื่อสนับสนุนผู้การเกม Azur Lane ชาวไทย
                    </p>
                    <p className="py-1 ">
                      โดยเนื้อหาจะประกอบไปด้วย ข้อมูลสกิลของสาวเรือแปลไทย
                    </p>
                    <p className="py-1 ">
                      ไกด์ และคำแนะนำในเรื่องต่างๆอย่าง เช่น
                      เกียร์สวมใส่
                    </p>
                    <p className="py-1 ">
                      นอกจากนี้ยังมีทั้ง คลิปรีวิวเรือ และ ประวัติของเรือบางลำ
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
