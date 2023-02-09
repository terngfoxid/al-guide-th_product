import { useEffect, useState } from "react";

export default function Chibi(chibi: any) {

    const [state, setState] = useState(3)

    useEffect(() => {
        setTimeout(() => {
            if (state == 1) setState(2)
            if (state == 2) setState(3)
            if (state == 3) setState(1)
        }, 15000);
    }, [state])


    const chibi_style = (
        {
            set_overlay: "fixed bottom-5 left-0 md:bottom-5 md:left-5",
            chat_style: "animate__animated animate__fadeIn animate__slow flex bg-neutral-200 rounded-t-xl rounded-br-xl border-2 border-neutral-900 text-sm md:text-lg",
        }
    );

    return (
        <div id="shipchibi" className={chibi_style.set_overlay}>
            <div className="flex justify-items-start animate__animated animate__fadeInUp animate__slow">
                <div className="w-20 md:w-max">
                <img 
                className="cursor-not-allowed" 
                src={"https://drive.google.com/uc?export=view&id=" + chibi.chibi} 
                alt='ship chibi image' 
                onClick={ event =>{
                    if(state!= 0)setState(0)
                    else{setState(1)}
                }}/>
                </div>
                <div className="">
                        {
                            state == 1 ?
                            <><div className={"mt-8 md:mt-16 h-max "+chibi_style.chat_style}><p className="px-1 py-1">{"กดคลิกที่รูปเพื่อขยายขนาดได้นะ"}</p></div></>
                            : state == 2 ?
                            <><div className={"mt-8 md:mt-16 h-max "+chibi_style.chat_style}><p className="px-1 py-1">{"ถ้าลำใหนมีเกียร์แนะนำ จะอยู่ส่วนด้านล่าง"}</p></div></> 
                            : state == 3 ?
                            <><div className={"mt-8 md:mt-16 h-max "+chibi_style.chat_style}><p className="px-1 py-1">{"ปิดกล่องข้อความ กดที่ตัวจิบิ"}</p></div></>
                            :<></>
                        }
                </div>
            </div>
        </div>
    )
}