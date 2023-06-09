import Footer from "@/components/Footer/Footer";
import Main from "@/components/Main-section/Main";
import Model3 from "@/components/rest-section/Model3";
import ModelS from "@/components/rest-section/ModelS";
import ModelX from "@/components/rest-section/ModelX";
import Section from "@/components/rest-section/SolorRoof";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tesla-clone</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <style>
          @import
          url(https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500;700;900&display=swap);
        </style>
      </Head>
      <main className="scrollEffect">
        <Main />
        <ModelS />
        <Model3 />
        <ModelX />
        <Section />
        <Footer />
      </main>
    </>
  );
}
