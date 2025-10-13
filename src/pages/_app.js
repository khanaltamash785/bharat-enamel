import "@/styles/globals.css";
import { ThemeProvider as NextThemesProvider } from "next-themes"

export default function App({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  )
}
