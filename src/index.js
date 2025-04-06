import React from "react";
import ReactDOM from "react-dom/client"; // Import from 'react-dom/client'
import App from "./components/App";
import "./index.css";
import NavBar from "./components/NavBar";
// import Navbar from "./components/Navbar"; // Import the Navbar component

// Create the root element and render the app
const root = ReactDOM.createRoot(document.getElementById("root")); // Create root
root.render(
  <>
    <NavBar /> {/* Changed from Navbar to NavBar to match the import */}
    <div style={{ paddingTop: '80px' }}>
      <App />
    </div>
  </>
); // Use the render method on the root
