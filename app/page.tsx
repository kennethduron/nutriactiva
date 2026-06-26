import { About } from "@/components/about";
import { Benefits } from "@/components/benefits";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Plans } from "@/components/plans";
import { Programs } from "@/components/programs";
import { Services } from "@/components/services";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Programs />
        <About />
        <Services />
        <Plans />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
