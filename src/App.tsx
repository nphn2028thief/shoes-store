import { Toaster } from "react-hot-toast";
import Routes from "./routes";

function App() {
  return (
    <>
      <Routes />
      <Toaster position="top-center" />
    </>
  );
}

export default App;
