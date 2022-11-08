import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "../styles/globals.css";
import styles from "../styles/Home.module.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Tamara's opera singers school</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/icon.jpeg" />
        </Head>
      </div>

      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
