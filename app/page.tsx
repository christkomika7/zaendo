import About from "@/components/about";
import Blur from "@/components/bg-overlay/blur";
import Grain from "@/components/bg-overlay/grain";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Home from "@/components/home";
import Project from "@/components/project";
import Service from "@/components/service";

export default function HomePage() {
  return (
    <>
      <Blur />
      <Grain />
      <main className="bg-black overflow-x-hidden text-white">
        <Home />
        <About />
        <Service />
        <Project />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
