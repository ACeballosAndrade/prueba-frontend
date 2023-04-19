import AnimationSection from "./components/AnimationSection/AnimationSection";
import Sells from "./components/Branding/Sells";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import OurServices from "./components/OurServices/OurServices";
import SectionImages from "./components/SectionImages";
import Parallax from "./components/parallax/Parallax";

function App() {
  return (
    <div className="flex flex-col gap-8">
      <section className="h-screen bg-Equipo bg-cover md:bg-top bg-center">
        <Navbar />
        <div className="flex flex-col justify-center text-center items-center h-3/4 gap-8">
          <h2 className="text-white text-3xl font-medium">
            WELCOME TO INBUILD
          </h2>
          <button className="border-4 border-white px-14">
            <h1 className="md:text-6xl text-5xl text-white font-semibold py-5">
              GLOBAL STANDARD
            </h1>
          </button>
          <h2 className="text-white text-3xl font-medium">
            BUILD ALL THE UNIQUE PATTERNS
          </h2>
        </div>
      </section>
      <section>
        <AnimationSection/>
      </section>
      <section>
        <OurServices/>
      </section>
      <section>
        <Parallax />
      </section>
      <section>
        <Sells />
      </section>
      <section>
        <SectionImages />
      </section>
      <Footer />
    </div>
  );
}

export default App;
