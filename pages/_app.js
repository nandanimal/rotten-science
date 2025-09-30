import localFont from "next/font/local";

import "@/styles/globals.css";

const myFont = localFont({
    src: [{ path: "../public/coolvetica.otf", weight: "400", style: "normal" }],
    display: "swap",
    preload: true, // preloads for you
    variable: "--font-myfont", // optional: CSS var for Tailwind
});

export default function App({ Component, pageProps }) {
    return (
        <main className={myFont.className /* or myFont.variable */}>
            <Component {...pageProps} />
        </main>
    );
}
