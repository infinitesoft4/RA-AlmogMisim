import React from "react";
import { Hand } from "lucide-react";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Forms from "./components/Forms";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main>
        <section className="bg-luxury text-white pt-32 pb-20" id="home">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-8">
              <h1 className="text-5xl md:text-6xl font-bold ml-2 tracking-tight">
                המובילים בתחום המס - ברוכים הבאים למשרד 'אלמוג מיסים'
              </h1>
              <Hand className="h-10 w-10 text-primary-200 animate-wave" />
            </div>
            <p className="text-xl md:text-2xl text-primary-100 text-center max-w-3xl mx-auto leading-relaxed">
              צוות מומחה עם ניסיון של מעל 25 שנה בתחום הנהלת החשבונות וייעוץ
              המס, מעניק שירות אישי ומקצועי לאנשים פרטיים ולעסקים.
            </p>
            <div className="mt-12 text-center">
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-white text-primary-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-50 transition-colors duration-300"
              >
                קבע פגישת ייעוץ
              </button>
            </div>
          </div>
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="forms">
          <Forms />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
