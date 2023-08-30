import "@/styles/globals.css";
import { Inter, EB_Garamond } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const garamond = EB_Garamond({
	subsets: ["latin"],
	variable: "--font-garamond",
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={`${inter.variable} ${garamond.variable}`}>
			<Component {...pageProps} />
			<Analytics />
		</main>
	);
}
