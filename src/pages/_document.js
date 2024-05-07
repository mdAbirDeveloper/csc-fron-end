import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body style={{maxWidth: '1500px',}} className="mx-auto">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
