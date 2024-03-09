import "./App.css";
import { OpenProvider } from "./ContextApi/OpenProvider";
import RoutesLayout from "./Routers/RoutesLayout";

function App() {
  return (
    <>
      <OpenProvider>
        <RoutesLayout />
      </OpenProvider>
    </>
  );
}

export default App;
