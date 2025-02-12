import { RouterProvider } from "react-router-dom";
import "./App.css";
import Routes from "./routes/Router";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <>
      <HelmetProvider>
        <RouterProvider router={Routes}></RouterProvider>
      </HelmetProvider>
    </>
  );
}

export default App;
