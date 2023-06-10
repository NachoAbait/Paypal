import { useDispatch, useSelector } from "react-redux";
import css from "./Card.module.css"
import { createOrder } from "../../Actions/createOrder";
import React, { useEffect } from "react";
import { cleanOrder } from "../../Actions/cleanOrden";


export default function Card() {
  // acá va tu código
  
  const productos = [
    {
      titulo: "Remera",
      talle: "L",
      precio: 7000,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGf9yeHjRqGl6M0gmPpNO6EnrSDuJCkaHS9g&usqp=CAU"
    },
    {
      titulo: "Zapatillas",
      talle: "42",
      precio: 30000,
      img:"https://media.istockphoto.com/id/506922838/es/foto/nike-pegasus-zapatos-y-dise%C3%B1o-de-logotipo.jpg?s=612x612&w=0&k=20&c=fN3k1sh3cSp4P-CTmwIx9wweQ6XGrtpjDtkKfPSD_kA="
    },
    {
      titulo: "Pantalon",
      talle: "L",
      precio: 10000,
      img: "data:image/jpeg;base64,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"
    },
    {
      titulo: "Hoddie",
      talle: "XL",
      precio: 16000,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSukVnprA_iaiC4VI5ymBsLfIm1LjfeaqASjg&usqp=CAU"
    }
  ]

  const dispatch = useDispatch();

  const init_endpoint = useSelector((state) => state.init_endpoint);
  


  const handleClick = (producto) => {
    dispatch(cleanOrder());
    dispatch(createOrder(producto));
  };

  useEffect(() => {
    if (init_endpoint.length) {
      console.log("Redirigiendo a la URL:", init_endpoint);
      window.open(init_endpoint)
    }
  }, [init_endpoint]);


  return (
    <div className={css.card}>
      <div className={css.mp}>
        <img src="https://brandemia.org/sites/default/files/sites/default/files/logo_paypal_principal.jpg" alt="" />
      </div>
      {productos.map((producto, index) => (
        <div key={index} className={css.tarjeta}>
          <img src={producto.img} alt={producto.titulo} className={css.imagen} />
          <h3>{producto.titulo}</h3>
          <p>Talle: {producto.talle}</p>
          <p>Precio: {producto.precio}</p>
          <button onClick={() => handleClick(producto)} className={css.boton}>COMPRAR</button>
        </div>
      ))}
    </div>
  );
  
      
};