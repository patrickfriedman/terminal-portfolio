import { Analytics } from "@vercel/analytics/react";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body>
        <Component {...pageProps} />
        <Analytics />
      </body>
    </html>
  );
}

export default MyApp;