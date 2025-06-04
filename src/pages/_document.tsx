import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const faviconPath = "/assets/images/ahsan.jpg"; // Using the existing ahsan.jpg

  return (
    <Html lang="en">
      <Head>
        {/* Basic Favicon */}
        <link rel="icon" href={faviconPath} />
        {/* Recommended: ICO format for wider compatibility, e.g., rel="shortcut icon" */}
        {/* <link rel="shortcut icon" href="/favicon.ico" /> */}

        {/* Apple Touch Icon (for iOS home screen) */}
        <link rel="apple-touch-icon" sizes="180x180" href={faviconPath} />

        {/* General Purpose Icons (can be the same as favicon or specific sizes) */}
        <link rel="icon" type="image/jpeg" sizes="32x32" href={faviconPath} />
        <link rel="icon" type="image/jpeg" sizes="16x16" href={faviconPath} />

        {/* Manifest for PWA features (optional, but good practice) */}
        {/* <link rel="manifest" href="/site.webmanifest" /> */}

        {/* Theme color for browser UI */}
        {/* <meta name="theme-color" content="#ffffff" /> */}
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
