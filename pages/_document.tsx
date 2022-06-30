import {
  Html,
  Head,
  Main,
  NextScript
} from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head />
      <body className='my-body-class'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
