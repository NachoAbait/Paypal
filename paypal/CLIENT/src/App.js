import logo from "./logo.svg";
import "./App.css";
import Card from "./Componentes/Cards/Card.jsx";
import React from "react";
import axios from "axios";

axios.defaults.baseURL = "https://paypal-production.up.railway.app/";

function App() {
  return (
    <div className="App">
      <Card></Card>
    </div>
  );
}

export default App;
