import "./App.css";
import FooterComponent from "./components/FooterComponent";
import MainComponent from "./components/MainComponent";
import NavbarComponent from "./components/NavbarComponent";

function App() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <NavbarComponent/>
      <MainComponent/>
      <FooterComponent />
    </div>
  );
}

export default App;
