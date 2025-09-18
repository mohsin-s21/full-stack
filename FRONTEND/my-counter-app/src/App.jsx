 import { useState } from 'react'
 import reactLogo from './assets/react.svg'
 import viteLogo from '/vite.svg'
 import './App.css'
function App() {
   const [count, setCount] = useState(0)
const color = {
  backgroundColor: count<5?"red":"green",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
  backgroundColor: "#282c34",
  color: "green",
};<div style={color}>
     <h2>counter:{count}</h2>
     <button onClick={()=>setCount((count)=>count+1)}>INCREMENT</button>
     <button onClick={()=>setCount((count)=>count-1)}>Decrement</button>
     <button onClick={()=>setCount(0)}>Reset</button>
   </div>
  );
 }
   export default App; 
// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [num1, setNum1] = useState("");
//   const [num2, setNum2] = useState("");
//   const [result, setResult] = useState(null);

//   const handleAddition = () => {
//     setResult(Number(num1) + Number(num2));
//   };

//   const handleSubtraction = () => {
//     setResult(Number(num1) - Number(num2));
//   };

//   const handleMultiplication = () => {
//     setResult(Number(num1) * Number(num2));
//   };

//   const handleDivision = () => {
//     if (Number(num2) === 0) {
//       setResult("Error: Division by 0");
//     } else {
//       setResult(Number(num1) / Number(num2));
//     }
//   };

//   const handleReset = () => {
//     setNum1("");
//     setNum2("");
//     setResult(null);
//   };

//   return (
//     <div className="App">
//       <h1>Simple Calculator</h1>

//       <input
//         type="number"
//         placeholder="Enter first number"
//         value={num1}
//         onChange={(e) => setNum1(e.target.value)}
//       />
//       <br />
//       <input
//         type="number"
//         placeholder="Enter second number"
//         value={num2}
//         onChange={(e) => setNum2(e.target.value)}
//       />
//       <br />

//       <div className="buttons">
//         <button onClick={handleAddition}>Add</button>
//         <button onClick={handleSubtraction}>Subtract</button>
//         <button onClick={handleMultiplication}>Multiply</button>
//         <button onClick={handleDivision}>Divide</button>
//         <button onClick={handleReset}>Reset</button>
//       </div>

//       {result !== null && (
//         <h2>
//           Result: <span>{result}</span>
//         </h2>
//       )}
//     </div>
//   );
// }

// export  default App;


