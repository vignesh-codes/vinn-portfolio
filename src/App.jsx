import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
// import { Technologies } from "./components/Technologies";
import { Contact } from "./components/Contact";
import { Technologies } from "./components/Technologies";


export default function App() {
  return (
    // background
    <div className="overflow-x-hidden antialiased">
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>      </div>


      <div className="container mx-auto px-8">
        <Navbar />
        <Hero></Hero>
        <Technologies></Technologies>
        <Experience></Experience>
        <Projects></Projects>
        <Contact></Contact>
      </div>


    </div>


  )
}