import "@/styles/globals.css";
import Header from "@/components/header";
import type { AppProps } from "next/app";
import Footer from "@/components/footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen w-full bg-gray-100 text-gray-800">
      <Header />
      <main className="w-full m-0 p-0">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
