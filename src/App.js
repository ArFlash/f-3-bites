import React from "react";
import "./App.css";
const Navbar = React.lazy(() => import("./Constent/Navbar"));
const Home = React.lazy(() => import("./Component/Home"));
const About = React.lazy(() => import("./Component/About"));
const Contact = React.lazy(() => import("./Component/Contact"));

function App() {
  return (
    <>
      <React.Suspense
        fallback={
          <div id="Loader">
            <div className="Spinner"></div>
          </div>
        }
      >
        <Navbar />
        <div id="Home">
          <Home />
        </div>
        <div id="About">
          <About />
        </div>
        <div id="Contact">
          <Contact />
        </div>
      </React.Suspense>
    </>
  );
}

export default App;
