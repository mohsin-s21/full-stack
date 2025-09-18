import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/nav.jsx";
import Head, { Footer } from "./components/base.jsx";
import Home from "./home.jsx";
import About from "./about.jsx";
import Contact from "./contact.jsx";

function App() {
  return (
    <BrowserRouter>
      <Head />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />       
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
