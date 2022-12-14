import type { NextPage } from "next";
import Head from "next/head";
import AboutUs from "../components/aboutus";
import Masthead from "../components/masthead";
import Skills from "../components/skills";
import TrustedBy from "../components/trustedby";
import Works from "../components/works";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Anything</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Masthead />

      <AboutUs />

      <Skills />

      <Works />

      <TrustedBy />
    </div>
  );
};

export default Home;
