import Link from "next/link";

export default function About_Card() {
  const card_style = {
    title: "ผู้จัดทำ",
    title_style:
      "text-zinc-700 dark:text-zinc-300 text-2xl font-bold text-center",
    shape:
      "w-11/12 md:w-1/2 2xl:w-1/2 rounded-lg shadow-md border bg-neutral-200 border-gray-300 dark:border-gray-700 dark:bg-neutral-800",
    position: "flex justify-center",
    body_style:
      "py-2 text-zinc-600 dark:text-zinc-400 text-sm md:text-2xl text-center",
  };

  return (
    <div className={card_style.position}>
      <div className={card_style.shape}>
        <br></br>
        <p className={card_style.title_style}>{card_style.title}</p>
        <br></br>
        <div className={card_style.body_style}>
          <p className="mb-2">ทีมงาน Rolizami</p>
          <div className="grid grid-cols-2 gap-1">

            <div className="flex justify-end">
              <p className="text-start w-[120px] md:w-[200px]">แปลสกิลเรือ / รีวิว</p>
            </div>
            <p className="text-start flex gap-2">
              :
              <Link legacyBehavior href="https://www.youtube.com/@Rolizami">
                <a
                  target="_blank"
                  className="flex items-center w-fit gap-2 px-2 rounded hover:bg-neutral-300 dark:hover:bg-neutral-700"
                >
                  <svg className="fill-red-600 w-[10px] h-[10px] md:w-[20px] md:h-[20px]" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 461.001 461.001">
                    <g>
                      <path d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728
		c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137
		C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607
		c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z"/>
                    </g>
                  </svg>
                  Rolizami ライム
                </a>
              </Link>
            </p>

            <div className="flex justify-end">
              <p className="text-start w-[120px] md:w-[200px]">แปลประวัติเรือ</p>
            </div>
            <p className="text-start flex gap-2">
              :
              <Link legacyBehavior href="/about/#">
                <a className="px-2 rounded cursor-default ">MR.T</a>
              </Link>
            </p>

            <div className="flex justify-end">
              <p className="text-start w-[120px] md:w-[200px]">ผู้ช่วย Admin</p>
            </div>
            <p className="text-start flex gap-2">
              :
              <Link legacyBehavior href="/about/#">
                <a className="px-2 rounded cursor-default ">EX:SELRENS</a>
              </Link>
            </p>

          </div>
          <br></br>
          <p className="mb-2">ทีมงาน Earth Truth Gaming</p>
          <div className="grid grid-cols-2 gap-1">

            <div className="flex justify-end">
              <p className="text-start w-[120px] md:w-[200px]">คลิปรีวิวเรือ</p>
            </div>
            <p className="text-start flex gap-2">
              :
              <Link legacyBehavior href="https://www.youtube.com/@EarthTruthGaming">
                <a
                  target="_blank"
                  className="text-xs md:text-2xl flex items-center w-fit gap-2 px-2 rounded hover:bg-neutral-300 dark:hover:bg-neutral-700"
                >
                  <svg className="fill-red-600 w-[10px] h-[10px] md:w-[20px] md:h-[20px]" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 461.001 461.001">
                    <g>
                      <path d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728
		c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137
		C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607
		c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z"/>
                    </g>
                  </svg>
                  Earth Truth Gaming
                </a>
              </Link>
            </p>

            <div className="flex justify-end">
              <p className="text-start w-[120px] md:w-[200px]">ให้เสียงตัวละคร</p>
            </div>
            <p className="text-start flex gap-2">
              :
              <Link legacyBehavior href="https://www.facebook.com/profile.php?id=61557598714775">
                <a
                  target="_blank"
                  className="flex items-center w-fit gap-2 px-2 rounded hover:bg-neutral-300 dark:hover:bg-neutral-700"
                >
                  <svg className="fill-[#0866ff] w-[10px] h-[10px] md:w-[20px] md:h-[20px]" viewBox="0 0 36 36">
                    <path d="M20.181 35.87C29.094 34.791 36 27.202 36 18c0-9.941-8.059-18-18-18S0 8.059 0 18c0 8.442 5.811 15.526 13.652 17.471L14 34h5.5l.681 1.87Z">
                    </path><path className="fill-[#ffffff]" d="M13.651 35.471v-11.97H9.936V18h3.715v-2.37c0-6.127 2.772-8.964 8.784-8.964 1.138 0 3.103.223 3.91.446v4.983c-.425-.043-1.167-.065-2.081-.065-2.952 0-4.09 1.116-4.09 4.025V18h5.883l-1.008 5.5h-4.867v12.37a18.183 18.183 0 0 1-6.53-.399Z"></path></svg>
                  เอาไข่มาพากย์
                </a>
              </Link>
            </p>

          </div>
          <br></br>
          <p className="mb-2">ผู้สนับสนุน</p>
          <div className="grid grid-cols-2 gap-1">

            <div className="flex justify-end">
              <p className="text-start w-[120px] md:w-[200px]">คลิปรีวิวเรือ</p>
            </div>
            <p className="text-start flex gap-2">
              :
              <Link legacyBehavior href="https://www.youtube.com/@PGolfSucrim">
                <a
                  target="_blank"
                  className="flex items-center w-fit gap-2 px-2 rounded hover:bg-neutral-300 dark:hover:bg-neutral-700"
                >
                  <svg className="fill-red-600 w-[10px] h-[10px] md:w-[20px] md:h-[20px]" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 461.001 461.001">
                    <g>
                      <path d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728
		c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137
		C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607
		c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z"/>
                    </g>
                  </svg>
                  P&apos;GolfSucrim
                </a>
              </Link>
            </p>

          </div>
          <br></br>
          <p className="mb-2">ทีมพัฒนาเว็บไซต์</p>
          <div className="grid grid-cols-2 gap-1">

            <div className="flex justify-end">
              <p className="text-start w-[120px] md:w-[200px]">Admin / Dev</p>
            </div>
            <p className="text-start flex gap-2">
              :
              <Link legacyBehavior href="https://www.youtube.com/@SSTfoxide">
                <a
                  target="_blank"
                  className="flex items-center w-fit gap-2 px-2 rounded hover:bg-neutral-300 dark:hover:bg-neutral-700"
                >
                  <svg className="fill-red-600 w-[10px] h-[10px] md:w-[20px] md:h-[20px]" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 461.001 461.001">
                    <g>
                      <path d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728
		c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137
		C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607
		c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z"/>
                    </g>
                  </svg>
                  SSTfoxide
                </a>
              </Link>
            </p>

            <div className="flex justify-end">
              <p className="text-start w-[120px] md:w-[200px]">Refactor Dev</p>
            </div>
            <p className="text-start flex gap-2">
              :
              <Link legacyBehavior href="/about/#">
                <a className="px-2 rounded cursor-default ">Methapon2001</a>
              </Link>
            </p>

          </div>
          <br></br>
          <div className="flex my-1 items-center">
          <div className="mx-auto w-fit h-full">
            <p className="flex gap-2 items-center">
              <Link legacyBehavior href="https://github.com/terngfoxid/al-guide-th_product">
                <a
                  target="_blank"
                  className="flex items-center w-fit gap-2 p-2 rounded hover:bg-neutral-300 dark:hover:bg-neutral-700"
                >
                  <svg className="w-[20px] h-[20px] md:w-[30px] md:h-[30px]" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
                    <path className="fill-[#ffffff]" d="M12 2A10 10 0 1 0 12 22A10 10 0 1 0 12 2Z"></path>
                    <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
                  </svg>
                  GitHub
                </a>
              </Link>
            </p>
          </div>
          <div className="mx-auto w-fit">
            <p className="flex gap-2 items-center">
              <Link legacyBehavior href="https://dev.al-guide-th.com">
                <a
                  target="_blank"
                  className="flex items-center w-fit gap-2 px-2 rounded hover:bg-neutral-300 dark:hover:bg-neutral-700"
                >
                  <svg className="w-[50px]" viewBox="0 -198 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path d="M255.420487,28.975665 C235.427278,28.975665 221.011885,42.0147142 221.011885,61.5732881 C221.011885,81.1318619 237.238257,94.1709111 257.231466,94.1709111 C269.310696,94.1709111 279.959253,89.3899264 286.551217,81.3310696 L272.697227,73.3265422 C269.039049,77.3288059 263.479344,79.6649689 257.231466,79.6649689 C248.556876,79.6649689 241.186191,75.1375212 238.451613,67.893605 L289.195246,67.893605 C289.593662,65.8653084 289.829089,63.7645727 289.829089,61.5551783 C289.829089,42.0147142 275.413696,28.975665 255.420487,28.975665 Z M238.288625,55.2348613 C240.552349,48.0090549 246.745897,43.4634975 255.402377,43.4634975 C264.076967,43.4634975 270.270515,48.0090549 272.516129,55.2348613 L238.288625,55.2348613 L238.288625,55.2348613 Z M450.426712,28.975665 C430.433503,28.975665 416.01811,42.0147142 416.01811,61.5732881 C416.01811,81.1318619 432.244482,94.1709111 452.237691,94.1709111 C464.316921,94.1709111 474.965478,89.3899264 481.557442,81.3310696 L467.703452,73.3265422 C464.045274,77.3288059 458.485569,79.6649689 452.237691,79.6649689 C443.563101,79.6649689 436.192417,75.1375212 433.457838,67.893605 L484.201471,67.893605 C484.599887,65.8653084 484.835314,63.7645727 484.835314,61.5551783 C484.835314,42.0147142 470.419921,28.975665 450.426712,28.975665 L450.426712,28.975665 Z M433.31296,55.2348613 C435.576684,48.0090549 441.770232,43.4634975 450.426712,43.4634975 C459.101302,43.4634975 465.29485,48.0090549 467.540464,55.2348613 L433.31296,55.2348613 Z M362.630447,61.5732881 C362.630447,72.4391624 369.729485,79.6830787 380.740238,79.6830787 C388.201471,79.6830787 393.797397,76.2965478 396.676853,70.7730617 L410.585173,78.7956989 C404.826259,88.3938879 394.032824,94.1709111 380.740238,94.1709111 C360.728919,94.1709111 346.331636,81.1318619 346.331636,61.5732881 C346.331636,42.0147142 360.747029,28.975665 380.740238,28.975665 C394.032824,28.975665 404.808149,34.7526882 410.585173,44.3508772 L396.676853,52.3735144 C393.797397,46.8500283 388.201471,43.4634975 380.740238,43.4634975 C369.747595,43.4634975 362.630447,50.7074137 362.630447,61.5732881 Z M512,9.0548953 L512,92.3599321 L495.701188,92.3599321 L495.701188,9.0548953 L512,9.0548953 Z M66.9156763,-1.42108547e-14 L133.831353,115.90266 L0,115.90266 L66.9156763,-1.42108547e-14 Z M234.213922,9.0548953 L184.031692,95.9818902 L133.849462,9.0548953 L152.665535,9.0548953 L184.031692,63.3842671 L215.397849,9.0548953 L234.213922,9.0548953 Z M340.898698,30.786644 L340.898698,48.3350311 C339.087719,47.8098472 337.168081,47.4476514 335.103565,47.4476514 C324.581777,47.4476514 316.993775,54.6915676 316.993775,65.557442 L316.993775,92.3599321 L300.694963,92.3599321 L300.694963,30.786644 L316.993775,30.786644 L316.993775,47.4476514 C316.993775,38.2478778 327.696661,30.786644 340.898698,30.786644 Z" fill="#000000" fill-rule="nonzero">

                      </path>
                    </g>
                  </svg>
                  Unreleased Version
                </a>
              </Link>
            </p>
          </div>
        </div>
        </div>
        <br></br>
      </div>
    </div>
  );
}
