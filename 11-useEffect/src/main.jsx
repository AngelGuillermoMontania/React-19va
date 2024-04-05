import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// export default function Desmontaje() {
//   const [date, setDate] = useState(new Date());

//   /* PARA EL DESMONTAJE, SE USA UN RETURN DE UNA FUNCION */
//   useEffect(() => {
//     const timer = setInterval(() => {
//       console.log("ENTRE INTERVAL");
//       setDate(new Date());
//     }, 1000);
//     return () => {
//       console.log("DESMONTAJE");
//       clearInterval(timer);
//     };
//   }, []);

//   return <div>{date.toString()}</div>;
// }
