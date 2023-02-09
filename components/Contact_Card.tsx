import Link from "next/link";

export default function Contact_Card (){
  
    const card_style = (
      {
        title:'ผู้จัดทำ',
        title_style: 'text-zinc-700 dark:text-zinc-300 text-2xl font-bold text-center',
        shape:"w-11/12 md:w-1/2 2xl:w-1/3 rounded-lg shadow-md border bg-neutral-200 border-gray-300 dark:border-gray-700 dark:bg-neutral-800",
        position:"flex justify-center",
        body_style: "py-2 text-zinc-600 dark:text-zinc-400 text-lg md:text-2xl text-center",
      }
    );
  
    return(
      <div className={card_style.position}>
        <div className={card_style.shape}>
          <br></br>
          <h1 className={card_style.title_style}>{card_style.title}</h1>
          <br></br>
          <div className={card_style.body_style}>
            <p className="py-1">Skill Translator: <Link legacyBehavior href="https://www.youtube.com/@Rolizami"><a target="_blank" className="px-2 rounded hover:bg-neutral-300 dark:hover:bg-neutral-700">Rolizami ライム</a></Link></p>
            <p className="py-1">History Translator: <Link legacyBehavior href="javascript:void(0);" ><a className="cursor-default px-2 rounded ">MR.T</a></Link></p>
            <p className="py-1">Admin: <Link legacyBehavior href="javascript:void(0);" ><a className="cursor-default px-2 rounded ">EX:SELRENS</a></Link></p>
            <br></br>
            <p>Web Programmer: <Link legacyBehavior href="https://www.youtube.com/@SSTfoxide"><a target="_blank" className="px-2 rounded hover:bg-neutral-300 dark:hover:bg-neutral-700">SSTfoxide</a></Link></p>
            <br></br>
            <p>Framework:  Next.js</p>
            <p>CSS:  Tailwind CSS + Animate.css</p>
          </div>
          <br></br>
        </div>
      </div>
      )
  }