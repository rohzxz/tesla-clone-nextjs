import "@/styles/modern-normalize.css";
import NavBar from "@/components/NavBar/NavBar";
import "@/styles/globals.css";
import "@/styles/Home.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="container_1">
      <NavBar />
      <Component {...pageProps} />
    </div>
  );
}
