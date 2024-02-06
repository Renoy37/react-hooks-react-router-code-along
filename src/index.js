import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

// const linkSTyles = {
//   display: "inline-block",
//   width: "50px",
//   padding: "12px",
//   margin: "0 6px 6px",
//   background: "blue",
//   textDecoration: "none",
//   color: "white",
// };

// function NavBar() {
//   return (
//     <div>
//       <NavLink
//         to="/"
//         exact
//         styles={linkSTyles}
//         activeStyle={{
//           background: "darkblue",
//         }}
//       >
//         Home
//       </NavLink>
//       <NavLink
//         to="/"
//         exact
//         styles={linkSTyles}
//         activeStyle={{
//           background: "darkblue",
//         }}
//       >
//         About
//       </NavLink>
//       <NavLink
//         to="/"
//         exact
//         styles={linkSTyles}
//         activeStyle={{
//           background: "darkblue",
//         }}
//       >
//         Login
//       </NavLink>
//     </div>
//   );
// }

// function Home() {
//   return (
//     <div>
//       <h1>Home!</h1>
//     </div>
//   );
// }

// function About() {
//   return (
//     <div>
//       <h1>This is my about component!</h1>
//     </div>
//   );
// }

// function Login() {
//   return (
//     <div>
//       <h1>Login</h1>
//       <form>
//         <div>
//           <input type="text" name="username" placeholder="Username" />
//         </div>
//         <div>
//           <input type="password" name="password" placeholder="Password" />
//         </div>
//         <input type="submit" value="Submit" />
//       </form>
//     </div>
//   );
// }

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
