import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Technologies } from "./components/Technologies";
import { GalleryGram } from "./components/GalleryGram";

export default function App() {
  return (
    <Router>
      {/* background */}
      <div className="overflow-x-hidden antialiased">
        <div className="fixed inset-0 -z-10">
          <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>
        </div>

        <div className="container mx-auto px-8">
          <Navbar />
          
          {/* Define the routes */}
          <Routes>
            {/* Path for the home page */}
            <Route path="/" element={
              <>
              
                <Hero />
                <Technologies />
                <Experience />
                <Projects />
                <Contact />
              </>
            } />

            {/* Path for the gallery page */}
            <Route path="/gallery" element={<GalleryGram />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
