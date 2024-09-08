import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import Tech from "./components/Tech"
import Experience from "./components/Experience"
import Footer from "./components/Footer";
import Achievements from "./components/Achievements";

function App() {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-black">
      <div className="w-full lg:w-[1340px]">
        <div className="top-0 fixed z-50 w-full lg:w-[1340px]">
          <Navbar></Navbar>
        </div>
        <Hero></Hero>
        <div className="my-10 lg:mt-20">
          <Experience></Experience>
        </div>
        <Tech></Tech>
        {/* <div className="my-10 lg:mt-20">
          <Achievements></Achievements>
        </div> */}
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
