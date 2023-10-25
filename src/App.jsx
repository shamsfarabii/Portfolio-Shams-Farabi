import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import Tech from "./components/Tech"
import Experience from "./components/Experience"
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-black">
      <div className="w-full lg:w-[1340px]">
        <div className="top-0 fixed z-50 w-full lg:w-[1340px]">
        <Navbar></Navbar>
        </div>
        <div className="w-full flex items-center justify-center">
        <Hero></Hero>
        </div>
        {/* <Experience></Experience> */}
        <Tech></Tech>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
