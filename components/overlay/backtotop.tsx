import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [target, setTarget] = useState<HTMLElement | null>(null)

  const toggleVisibility = () => {
    const element = document.getElementById("scroll-container")
    if (element) {
      if (element.scrollTop > 150) {
        setIsVisible(true)
      }
      else {
        setIsVisible(false)
      }
    }
  }

  const findElement = () => {
    const element = document.getElementById("scroll-container")
    if (element) {
      element.addEventListener("scroll", toggleVisibility)
      return () => {
        element?.removeEventListener("scroll", toggleVisibility);
      };
    }
  }

  useEffect(() => {
    setInterval(()=>{findElement()},1000)
  }, []);

  return (
    <button className={`${isVisible ? "block" : "hidden"} fixed bottom-[15px] right-[15px] w-[50px] h-[50px] rounded-lg z-[21] flex items-center justify-center bg-[#0D1829] bg-opacity-90 shadow-[0_0_10px_4px_rgba(0,150,255,0.85)]`}
      onClick={() => {
        const element = document.getElementById("scroll-container")
        element?.scrollTo({ top: 0, behavior: "smooth" });
      }}>
      <FaArrowUp size={40} color="#ffffff" />
    </button>
  );
}
