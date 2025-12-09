import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { NextSeo } from "next-seo";
import Secretary from "@/components/secretary";
import TopLeftMenu from "@/components/topleftmenu";
import TopRightMenu from "@/components/toprightmenu";
import { DialogProvider } from "@/components/dialog";
import BackToTop from "@/components/overlay/backtotop";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title="Azur Lane Guide TH"
        description="Azur Lane Guide for Thai's comunity,เว็บไซต์ที่จัดทำขึ้นเพื่อนสนับสนุนชุมชนของผู้การเกม Azur Lane ชาวไทย"
        openGraph={{
          type: "website",
          locale: "th_TH",
          url: "https://al-guide-th.com",
          siteName: "Azur Lane Guide TH",
        }}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/favicon.ico",
          },
        ]}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "azur,lane,guide,th,ไกด์,ไทย,ภาษาไทย,azur lane,azur lane guide th,อซูร์เลน,azur lane ไกด์,azur lane ภาษาไทย,สอนเล่น azur lane,ข้อมูลเรือ,ข้อมูลเรือ azur lane",
          },
        ]}
      />
      <DialogProvider>
        <div className="h-screen min-h-screen max-h-screen w-screen max-w-screen min-w-screen bg-[url('/images/home_page.webp')] bg-cover bg-center overflow-hidden">
          <main className="flex justify-center relative w-full h-full">
            <div className="z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Secretary />
            </div>
            <div className="z-20 absolute top-0 left-0">
              <BackToTop />
              <TopLeftMenu>
                <Component {...pageProps} />
              </TopLeftMenu>
            </div>
            <div className="z-20 absolute top-0 right-0">
              <TopRightMenu />
            </div>
          </main>
        </div>
      </DialogProvider>

      <Analytics />
    </>
  );
}
