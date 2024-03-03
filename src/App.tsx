import "./App.css";
import { Diapo1 } from "@/components/mainPage/Diapo1";
import { Diapo2 } from "@/components/mainPage/Diapo2";
function App() {
  return (
    <div className="overflow-x-hidden absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      <Diapo1 />
      <Diapo2 />
    </div>
  );
}

export default App;
