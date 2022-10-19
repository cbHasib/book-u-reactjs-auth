import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routes } from "./Routes/Routes";

function App() {
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
