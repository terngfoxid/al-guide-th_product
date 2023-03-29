import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { NextSeo } from "next-seo";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title="Azur Lane Guide TH"
        description="Azur Lane Guide for Thai's comunity"
        openGraph={{
          type: 'website',
          locale: 'th_TH',
          url: 'al-guide-th.com',
          siteName: 'Azur Lane Guide TH',
        }}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/favicon.ico",
          }
        ]}
        additionalMetaTags={[
          {
            name: "keywords",
            content: "azur lane,azur lane guide th,อซูร์เลน,azur lane ไกด์,azur lane ภาษาไทย,สอนเล่น azur lane,ข้อมูลเรือ,ข้อมูลเรือ azur lane"
          }
        ]}
      />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
