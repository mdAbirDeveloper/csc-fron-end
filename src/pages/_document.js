import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" dir="rtl">
      <Head>
        {/* Add the meta tags and link tag */}
        <meta name="google-site-verification" content="NIpTXcnBzxaHTqTuLbn2zGZ_xzO1hOB2X_Ouf3vEQfo" />
        <link
          rel="icon"
          href="https://cdn.wegic.ai/assets/onepage/thread/icon/35eadb21-f653-4d40-b4f0-fb96d17d3bd3.png"
        />
        <meta
          name="description"
          content="🍃 مع أنظمتنا المتقدمة للضباب والرذاذ، نقدم حلولًا فعالة لتنقية الهواء وتحسين جودته. 🏡 اكتشف كيف يمكن تحويل منزلك ومكان عملك إلى ملاذ صحي."
        />
        <meta property="og:url" content="https://csc-fron-end.vercel.app" />
        <meta property="og:title" content="انظمة المدن للضباب والرذاذ" />
        <meta
          property="og:description"
          content="🍃 مع أنظمتنا المتقدمة للضباب والرذاذ، نقدم حلولًا فعالة لتنقية الهواء وتحسين جودته. 🏡 اكتشف كيف يمكن تحويل منزلك ومكان عملك إلى ملاذ صحي."
        />
        <meta
          property="og:image"
          content="https://cdn.wegic.ai/assets/onepage/thread/thumbnail/1789100818949562369/1715425245941.png"
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
