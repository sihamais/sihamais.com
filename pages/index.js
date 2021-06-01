import Head from "next/head";
import Header from "../components/header";
import About from "../components/about";
import Skills from "../components/skills";
import Projects from "../components/projects";
import Footer from "../components/footer";
import Contact from "../components/contact";

import en from '../public/translations/en.json'
import fr from '../public/translations/fr.json'

import {
  setTranslations,
  setDefaultLanguage,
  setLanguageCookie,
  setLanguage,
  translate,
} from "react-switch-lang";

setTranslations({ en, fr });
setDefaultLanguage("en");
setLanguageCookie();

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
