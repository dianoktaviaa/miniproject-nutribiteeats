import { ButtonBlue } from "../components/button";
import Footer from "../components/footer";
import Copyrights from "../components/footer-copyrights";
import Hero from "../components/hero";
import Input from "../components/input";
import Navbar from "../components/navbar";

function App() {
  return (
    <div className="w-full h-full">
      <Navbar />
      <Hero />
      <div className="p-36 text-center">
        <p className="search-content pb-2">Check The Food</p>
        <h1 className="font-extrabold text-2xl pb-10">
          Your Food Nutrisies is here
        </h1>
        <div className="flex gap-4">
          <Input placeholder="Search food in here..." />
          <ButtonBlue label="search" type="button" />
        </div>
      </div>
      <Footer />
      <Copyrights />
    </div>
  );
}

export default App;
