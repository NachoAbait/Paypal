import logo from "./logo.svg";
import "./App.css";
import Card from "./Componentes/Cards/Card.jsx";
import React from "react";
import axios from "axios";
import Carrito from "./Componentes/Carrito/Carrito.jsx";

axios.defaults.baseURL = "https://paypal-production.up.railway.app/";

function App() {
  return (
    <div className="App">
      <Carrito></Carrito>
      <Card></Card>
    </div>
  );
}

export default App;
