import Footer from "./components/Footer";
import "./App.css";
import Desktop from "./components/Desktop";

function App() {
  return (
    <div id="desktop" className="w-screen h-screen overflow-hidden bg-green">
      <Desktop />

      <Footer />
    </div>
  );
}

export default App;
