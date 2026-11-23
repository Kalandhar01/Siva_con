import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import { RevealObserver } from "@/components/RevealObserver";
import { ScrollTop } from "@/components/ScrollTop";
import SocialSidebar from "@/components/SocialSidebar";

export default function Home() {
  return (
    <>
      <RevealObserver />
      <div className="relative page-shell">
        <div className="site-frame" aria-hidden />
        <SocialSidebar />
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Services />
          <Stats />
          <Testimonials />
          <Blog />
        </main>
        <Footer />
      </div>
      <ScrollTop />
    </>
  );
}
