import Taskbar from "./components/Taskbar";
import "./App.css";
import Desktop from "./components/Desktop";

function App() {
  return (
    <div id="desktop" className="w-screen h-screen overflow-hidden bg-green">
      <Desktop />

      <Taskbar />
    </div>
  );
}

export default App;
