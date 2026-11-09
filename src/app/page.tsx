import { Header, Footer } from "@/components/corporate";

import {
  BottomCta,
  Feature,
  Hero,
  Intro,
  Services,
} from "@/components/home-sections";

export const instant = false;

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <Services />
        <Feature />
        <BottomCta />
      </main>
      <Footer />
    </>
  );
}