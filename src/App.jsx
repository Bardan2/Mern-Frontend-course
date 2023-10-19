// import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/Home/About/About";
import Contact from "./pages/Home/Contact/Contact";
import UseEffect from "./pages/Home/UseEffect/UseEffect";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/useEffect" element={<UseEffect />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
