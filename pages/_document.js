import { Html, Head, Main, NextScript } from 'next/document';
 
export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="view-transition" value="same-origin"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}