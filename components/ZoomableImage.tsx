import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";

export const ZoomableImage: React.FC<{
  src: string;
}> = function ({ src }) {
  const router = useRouter();
  const wrapper = useRef<HTMLDivElement | null>(null);
  const image = useRef<HTMLImageElement | null>(null);
  const [active, setActive] = useState<boolean>(false);
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleRouteChange = () => {
      document.body.classList.remove("overflow-hidden");
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router]);

  useEffect(() => {
    const handleWindowDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleWindowDimensions);

    return () => {
      window.removeEventListener("resize", handleWindowDimensions);
    };
  }, []);

  useEffect(() => {
    if (!active) return;

    document.body.classList.add("overflow-hidden");

    if (image.current && wrapper.current) {
      const imgRatio = image.current.naturalWidth / image.current.naturalHeight;
      const winRatio = window.innerWidth / window.innerHeight;

      image.current.className = imgRatio > winRatio ? "w-full" : "h-full";
    }
  }, [dimensions, active]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setActive((current) => !current);

    image.current?.scrollIntoView();
    document.body.classList.toggle("overflow-hidden");
  };

  return (
    <div
      ref={wrapper}
      className={
        "bg-neutral-200 dark:bg-neutral-800 cursor-zoom-out " +
        (active
          ? "overflow-auto fixed inset-0 flex items-center justify-center z-[999]"
          : "")
      }
      onClick={handleClick}
    >
      <img ref={image} src={src} alt="" className={active ? "" : "w-full"} />
    </div>
  );
};
