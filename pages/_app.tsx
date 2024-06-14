import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { NextSeo } from "next-seo";
import TopBar from "@/components/Topbar";
import Footer from "@/components/Footer";

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

      <TopBar />
      <Component {...pageProps} />
      <Footer />

      <Analytics />
    </>
  );
}
