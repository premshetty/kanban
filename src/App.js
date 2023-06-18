import "./App.css";
import Hero from "./components/main/Hero";
import NavBar from "./components/nav/NavBar";
import SideBar from "./components/sideBard/SideBar";

function App() {
  return (
    <div className="shadow  flex max-w-full">
      <hr className="absolute h-[2px] bg-border w-[98.9vw] top-[100px] md:top-20" />
      <SideBar />
      <div className="flex-grow max-w-full">
        <NavBar />
        <Hero />
      </div>
    </div>
  );
}

export default App;
