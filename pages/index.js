import Head from "next/head";
import Header from "../components/header";
import About from "../components/about";
import Skills from "../components/Skills";
import Projects from "../components/projects";
import Footer from "../components/footer";
import Contact from "../components/contact";

export default function Home() {
  return (
    <div>
      <Head>
        <title>sihamais.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Header />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
  );
}
