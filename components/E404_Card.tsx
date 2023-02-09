import Link from "next/link";

export default function E404_Card (){
  
    const card_style = (
      {
        title: '404 Page Not Found',
        title_style: 'text-zinc-700 dark:text-zinc-300 text-2xl font-bold text-center',
        shape:"w-5/6 md:w-1/3 2xl:w-1/4 rounded-lg shadow-md border bg-neutral-200 border-gray-300 dark:border-gray-700 dark:bg-neutral-800",
        position:"flex justify-center",
        body_style: "py-2 text-zinc-600 dark:text-zinc-400 text-lg md:text-2xl text-center",
      }
    );
  
    return(
      <div className={card_style.position}>
        <div className={card_style.shape}>
          <br></br>
          <br></br>
          <h1 className={card_style.title_style}>{card_style.title}</h1>
          <br></br>
          <br></br>
          <div className={card_style.body_style}>
            <p><Link href="/" className="px-2 rounded hover:bg-neutral-300 dark:hover:bg-neutral-700">Back to Home</Link></p>
          </div>
          <br></br>
          <br></br>
        </div>
      </div>
      )
  }