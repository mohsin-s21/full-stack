// import {Routes,Route} from "react-router-dom";
// import home from "./home.jsx/";
// import about from "./about.jsx/";
// import contact from "./Contact.jsx/";
// function F1() {
//   return(
//    <Routes>
//     <Route path="/" element={<home/>}/>
//     <Route path="/about" element={<about/>}/>
//     <Route path="/contact" element={<contact/>}/>
//    </Routes>
//   );
//   }
// export default F1;
// import {BrowserRouter , Route, Routes} from 'react-router-dom';
// import Home from "./home.jsx";
// import About from "./about.jsx";
// import Contact from "./contact.jsx";

// function App(){
//     return(<BrowserRouter>
//     <Routes>
//         <Route path='/home' element={<Home/>}/>
//         <Route path='/about' element={<About/>}/>
//         <Route path='/contact' element={<Contact/>}/>
//     </Routes>
//     </BrowserRouter>)
// }
// export default App;

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./home.jsx";
import About from "./about.jsx";
import Contact from "./contact.jsx";

function F1() {
  return (
    <BrowserRouter>
      {/* Navigation Bar */}
      <nav style={{
        padding: "15px",
        background: "#333",
        color: "white",
        display: "flex",
        justifyContent: "center",
        gap: "20px"
      }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
        <Link to="/about" style={{ color: "white", textDecoration: "none" }}>About</Link>
        <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>Contact</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default F1;
