import {
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  useEffect,
  useState,
} from "react";

export default function Panel_Card() {
  type dataType = {
    data: {
      data_update:
        | [{ time: { _seconds: number }; update_note: [string] }]
        | { error: any | string; length: number };
      web_update:
        | [{ time: { _seconds: number }; update_note: [string] }]
        | { error: any | string; length: number };
    };
  };

  const [data, setData] = useState<dataType>({
    data: {
      data_update: { error: null, length: 0 },
      web_update: { error: null, length: 0 },
    },
  });
  const [mode, setMode] = useState(0);

  const callAPI = async () => {
    try {
      const res = await fetch("/api/update");
      const loaddata = await res.json();
      setData(loaddata);
      return;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    callAPI();
  }, []);

  const card_style = {
    title_style:
      "text-zinc-700 dark:text-zinc-300 text-2xl font-bold text-center mt-3",
    shape:
      "w-11/12 md:w-5/6 2xl:w-full rounded-lg shadow-md border bg-neutral-200 border-gray-300 dark:border-gray-700 dark:bg-neutral-800",
    position: "flex justify-center",
    body_style:
      "pt-1 text-zinc-500 dark:text-zinc-400 text-lg md:text-xl lg:text-2xl text-center",
    //-cut-top-buttom
    cut_style: "w-full border border-gray-700 mt-1",
    end_content_style: "w-11/12 border border-neutral-500 mt-2",
    //list
    list_style:
      "inline-block py-1 mt-1 px-4 md:border-b-2 border-transparent rounded-lg md:rounded-t-lg md:rounded-b-none hover:text-gray-600 hover:border-gray-600 dark:hover:text-gray-300",
    list_select_style:
      "inline-block py-1 mt-1 px-4 md:border-b-2 border-gray-600 bg-neutral-300 dark:bg-neutral-700 rounded-lg md:rounded-t-lg md:rounded-b-none text-gray-600 dark:text-gray-300",
    //contect
    content_style:
      "pt-2 md:mb-2 bg-neutral-300 dark:bg-neutral-700 w-full md:w-11/12",
    sub_content_head_style:
      "ml-6 md:ml-16 pt-1 text-left text-base md:text-base lg:text-lg xl:text-xl text-zinc-600 dark:text-zinc-300",
    sub_content_body_style:
      "ml-10 md:ml-24 pt-1 text-left text-sm md:text-sm lg:text-base xl:text-base text-zinc-600 dark:text-zinc-300",
    mode_style: [
      "rounded-b-lg md:rounded-tr-lg",
      "rounded-b-lg md:rounded-lg",
      "rounded-b-lg md:rounded-lg",
    ],
    //delete data button
    button_style:
      "mx-2 rounded bg-neutral-400 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-600 border border-transparent hover:border-gray-400 dark:hover:border-gray-600 text-zinc-700 dark:text-zinc-400 py-1 px-1 duration-300 hover:scale-110 text-xs font-bold text-center",
  };

  if (data.data == null) {
    return (
      <div>
        <div className={card_style.position}>
          <div className={card_style.shape}>
            <div className={card_style.title_style}>
              <div className="md:flex md:justify-center md:items-center md:text-3xl">
                <p>ประกาศ</p>
              </div>
            </div>

            <div className={card_style.body_style}>
              <div className="flex justify-center">
                <ul className="flex flex-wrap w-11/12 -mb-px">
                  <li className="mr-2">
                    <button
                      id="data_update"
                      className={
                        mode == 0
                          ? card_style.list_select_style
                          : card_style.list_style
                      }
                    >
                      อัพเดตข้อมูล
                    </button>
                  </li>
                  <li className="mr-2">
                    <button
                      id="web_update"
                      className={
                        mode == 1
                          ? card_style.list_select_style
                          : card_style.list_style
                      }
                    >
                      อัพเดตเว็บ
                    </button>
                  </li>
                  <li className="mr-2">
                    <button
                      id="basic_qa"
                      className={
                        mode == 2
                          ? card_style.list_select_style
                          : card_style.list_style
                      }
                    >
                      ปัญหาการใช้งานเว็บไซต์เบื้องต้น
                    </button>
                  </li>
                </ul>
              </div>
              <div className="block md:hidden">
                <div className={card_style.cut_style}></div>
              </div>
              <div className="flex justify-center md:mt-0.5">
                <div
                  className={
                    card_style.content_style +
                    " " +
                    card_style.mode_style[mode] +
                    " flex justify-center mb-2 py-2"
                  }
                >
                  <svg
                    aria-hidden="true"
                    className="w-8 h-8 mr-3 text-gray-400 animate-spin fill-neutral-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  Loading...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const data_d = [];
  const data_w = [];
  let count = 0;
  //conver secs to day time
  const toDateTime = (secs: number) => {
    const output = new Date(secs * 1000);
    return output;
  };

  if (!Array.isArray(data.data.data_update)) {
    if (data.data.data_update.error != null) {
      data_d.push(<p>ไม่สามารถโหลดข้อมูลได้</p>);
    } else {
      return (
        <div>
          <div className={card_style.position}>
            <div className={card_style.shape}>
              <div className={card_style.title_style}>
                <div className="md:flex md:justify-center md:items-center md:text-3xl">
                  <p>ประกาศ</p>
                </div>
              </div>

              <div className={card_style.body_style}>
                <div className="flex justify-center">
                  <ul className="flex flex-wrap w-11/12 -mb-px">
                    <li className="mr-2">
                      <button
                        id="data_update"
                        className={
                          mode == 0
                            ? card_style.list_select_style
                            : card_style.list_style
                        }
                      >
                        อัพเดตข้อมูล
                      </button>
                    </li>
                    <li className="mr-2">
                      <button
                        id="web_update"
                        className={
                          mode == 1
                            ? card_style.list_select_style
                            : card_style.list_style
                        }
                      >
                        อัพเดตเว็บ
                      </button>
                    </li>
                    <li className="mr-2">
                      <button
                        id="basic_qa"
                        className={
                          mode == 2
                            ? card_style.list_select_style
                            : card_style.list_style
                        }
                      >
                        ปัญหาการใช้งานเว็บไซต์เบื้องต้น
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="block md:hidden">
                  <div className={card_style.cut_style}></div>
                </div>
                <div className="flex justify-center md:mt-0.5">
                  <div
                    className={
                      card_style.content_style +
                      " " +
                      card_style.mode_style[mode] +
                      " flex justify-center mb-2 py-2"
                    }
                  >
                    <svg
                      aria-hidden="true"
                      className="w-8 h-8 mr-3 text-gray-400 animate-spin fill-neutral-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    Loading...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  } else {
    for (count = 0; count < data.data.data_update.length; count++) {
      const buffer = count;
      if (data.data.data_update[buffer] != null) {
        const datebuffer = toDateTime(
          data.data.data_update[buffer].time._seconds,
        );
        data_d.push(
          <p className={card_style.sub_content_head_style}>
            {datebuffer.toLocaleDateString("th-TH", {
              weekday: "long",
              month: "narrow",
              day: "numeric",
            }) +
              " " +
              datebuffer.getFullYear() +
              " - " +
              (datebuffer.getHours() < 10
                ? "0" + datebuffer.getHours()
                : datebuffer.getHours()) +
              ":" +
              (datebuffer.getMinutes() < 10
                ? "0" + datebuffer.getMinutes()
                : datebuffer.getMinutes()) +
              ":" +
              (datebuffer.getSeconds() < 10
                ? "0" + datebuffer.getSeconds()
                : datebuffer.getSeconds())}
          </p>,
        );
        let line = 0;
        for (
          line = 0;
          line < data.data.data_update[buffer].update_note.length;
          line++
        ) {
          const line_buffer = line;
          data_d.push(
            <p className={card_style.sub_content_body_style}>
              {data.data.data_update[buffer].update_note[line_buffer]}
            </p>,
          );
        }
        if (buffer != data.data.data_update.length - 1) {
          data_d.push(
            <div className="flex justify-center">
              <div className={card_style.end_content_style}></div>
            </div>,
          );
        }
      }
    }
  }

  if (!Array.isArray(data.data.web_update)) {
    if (data.data.web_update.error != null) {
      data_w.push(<p>ไม่สามารถโหลดข้อมูลได้</p>);
    } else {
      return (
        <div>
          <div className={card_style.position}>
            <div className={card_style.shape}>
              <div className={card_style.title_style}>
                <div className="md:flex md:justify-center md:items-center md:text-3xl">
                  <p>ประกาศ</p>
                </div>
              </div>

              <div className={card_style.body_style}>
                <div className="flex justify-center">
                  <ul className="flex flex-wrap w-11/12 -mb-px">
                    <li className="mr-2">
                      <button
                        id="data_update"
                        className={
                          mode == 0
                            ? card_style.list_select_style
                            : card_style.list_style
                        }
                      >
                        อัพเดตข้อมูล
                      </button>
                    </li>
                    <li className="mr-2">
                      <button
                        id="web_update"
                        className={
                          mode == 1
                            ? card_style.list_select_style
                            : card_style.list_style
                        }
                      >
                        อัพเดตเว็บ
                      </button>
                    </li>
                    <li className="mr-2">
                      <button
                        id="basic_qa"
                        className={
                          mode == 2
                            ? card_style.list_select_style
                            : card_style.list_style
                        }
                      >
                        ปัญหาการใช้งานเว็บไซต์เบื้องต้น
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="block md:hidden">
                  <div className={card_style.cut_style}></div>
                </div>
                <div className="flex justify-center md:mt-0.5">
                  <div
                    className={
                      card_style.content_style +
                      " " +
                      card_style.mode_style[mode] +
                      " flex justify-center mb-2 py-2"
                    }
                  >
                    <svg
                      aria-hidden="true"
                      className="w-8 h-8 mr-3 text-gray-400 animate-spin fill-neutral-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    Loading...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  } else {
    for (count = 0; count < data.data.web_update.length; count++) {
      const buffer = count;
      if (data.data.web_update[buffer] != null) {
        const datebuffer = toDateTime(
          data.data.web_update[buffer].time._seconds,
        );
        data_w.push(
          <p className={card_style.sub_content_head_style}>
            {datebuffer.toLocaleDateString("th-TH", {
              weekday: "long",
              month: "narrow",
              day: "numeric",
            }) +
              " " +
              datebuffer.getFullYear() +
              " - " +
              (datebuffer.getHours() < 10
                ? "0" + datebuffer.getHours()
                : datebuffer.getHours()) +
              ":" +
              (datebuffer.getMinutes() < 10
                ? "0" + datebuffer.getMinutes()
                : datebuffer.getMinutes()) +
              ":" +
              (datebuffer.getSeconds() < 10
                ? "0" + datebuffer.getSeconds()
                : datebuffer.getSeconds())}
          </p>,
        );
        let line = 0;
        for (
          line = 0;
          line < data.data.web_update[buffer].update_note.length;
          line++
        ) {
          const line_buffer = line;
          data_w.push(
            <p className={card_style.sub_content_body_style}>
              {data.data.web_update[buffer].update_note[line_buffer]}
            </p>,
          );
        }
        if (buffer != data.data.web_update.length - 1) {
          data_w.push(
            <div className="flex justify-center">
              <div className={card_style.end_content_style}></div>
            </div>,
          );
        }
      }
    }
  }

  const click_data = () => {
    setMode(0);
  };
  const click_web = () => {
    setMode(1);
  };
  const click_qa = () => {
    setMode(2);
  };
  const cleardata = () => {
    if (localStorage.getItem("Mode") == "dark") {
      localStorage.clear();
      localStorage.setItem("Mode", "dark");
    } else {
      localStorage.clear();
      localStorage.setItem("Mode", "light");
    }
    window.location.reload();
  };

  return (
    <div>
      <div className={card_style.position}>
        <div className={card_style.shape}>
          <div className={card_style.title_style}>
            <div className="md:flex md:justify-center md:items-center md:text-3xl">
              <p>ประกาศ</p>
            </div>
          </div>

          <div className={card_style.body_style}>
            <div className="flex justify-center">
              <ul className="flex flex-wrap w-11/12 -mb-px">
                <li className="mr-2">
                  <button
                    id="data_update"
                    className={
                      mode == 0
                        ? card_style.list_select_style
                        : card_style.list_style
                    }
                    onClick={click_data}
                  >
                    อัพเดตข้อมูล
                  </button>
                </li>
                <li className="mr-2">
                  <button
                    id="web_update"
                    className={
                      mode == 1
                        ? card_style.list_select_style
                        : card_style.list_style
                    }
                    onClick={click_web}
                  >
                    อัพเดตเว็บ
                  </button>
                </li>
                <li className="mr-2">
                  <button
                    id="basic_qa"
                    className={
                      mode == 2
                        ? card_style.list_select_style
                        : card_style.list_style
                    }
                    onClick={click_qa}
                  >
                    ปัญหาการใช้งานเว็บไซต์เบื้องต้น
                  </button>
                </li>
              </ul>
            </div>
            <div className="block md:hidden">
              <div className={card_style.cut_style}></div>
            </div>
            <div className="flex justify-center md:mt-0.5">
              {mode == 0 ? (
                <>
                  <div
                    className={
                      card_style.content_style +
                      " " +
                      card_style.mode_style[mode]
                    }
                  >
                    {data_d}
                  </div>
                </>
              ) : mode == 1 ? (
                <>
                  <div
                    className={
                      card_style.content_style +
                      " " +
                      card_style.mode_style[mode]
                    }
                  >
                    {data_w}
                  </div>
                </>
              ) : mode == 2 ? (
                <>
                  <div
                    className={
                      card_style.content_style +
                      " " +
                      card_style.mode_style[mode]
                    }
                  >
                    <p className={card_style.sub_content_head_style}>
                      1.ข้อมูลของตัวละครไม่มีการอัปเดต
                    </p>
                    <p className={card_style.sub_content_body_style}>
                      เนื่องจากเรามีการเก็บข้อมูลบางส่วนไว้ใน Browser แบบ
                      Offline
                    </p>
                    <p className={card_style.sub_content_body_style}>
                      ทำให้ข้อมูลบางอย่างที่เก็บไว้แบบ offline ไม่มีการอัปเดต
                    </p>
                    <p className={card_style.sub_content_body_style}>
                      ให้ทำการคลิกที่ปุ่ม
                      <button
                        className={card_style.button_style}
                        onClick={cleardata}
                      >
                        &nbsp;ลบแคชเว็บไซต์&nbsp;
                      </button>
                      ที่นี่ หรือส่วนด้านล่างสุดของเว็บไซต์
                    </p>
                    <p className={card_style.sub_content_body_style}>
                      แล้วเว็บไซต์จะอัพเดตข้อมูลให้ใหม่อัตโนมัติ
                    </p>
                    <div className="flex justify-center">
                      <div className={card_style.end_content_style}></div>
                    </div>
                    <p className={card_style.sub_content_head_style}>
                      2.ภาพไม่แสดง/ภาพไม่โหลด
                    </p>
                    <p className={card_style.sub_content_body_style}>
                      เนื่องจาก Google มีโควตาในการโหลดรูปภาพจำกัด
                    </p>
                    <p className={card_style.sub_content_body_style}>
                      หากรีเฟรชหน้าเว็บบ่อยจะทำให้รูปภาพบางอย่างไม่แสดง
                    </p>
                    <p className={card_style.sub_content_body_style}>
                      เช่น รูปแปลสกิล ,รูปจิบิ ,รูป Banner ของอีเว้นท์
                    </p>
                    <p className={card_style.sub_content_body_style}>
                      โดยจะกลับมาเป็นปกติเองหลังจากหยุดใช้งานเว็บไซต์ประมาณ 1-2
                      ชม.
                    </p>
                    <p className={card_style.sub_content_body_style}>
                      ***ขออภัยในความไม่สะดวก***
                    </p>
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
