import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const removeHashFromUrl = () => {
      if (window.location.hash) {
        window.history.replaceState({}, document.title, window.location.pathname);
      }
    };

    const handleScrollPosition = () => {
      const scrollPosition = localStorage.getItem('scrollPosition');
      if (scrollPosition) {
        window.scrollTo(0, parseInt(scrollPosition));
      }
    };

    removeHashFromUrl();
    handleScrollPosition();

    return () => {
      localStorage.setItem('scrollPosition', String(window.scrollY));
    };
  }, []);

  return (
      <Component {...pageProps} />
  );
}
