import "@/styles/globals.css";
import type { AppProps } from "next/app";
import RootLayout from "./layout";
import { ThemeProvider } from '../context/ThemeContext'; // Adjust path if necessary

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </ThemeProvider>
  );
}
