import React, { useState , useEffect  } from "react";
import Modal from "react-modal";
import css from "../Carrito/Carrito.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../../Actions/deleteProduct.js"
import { increaseProduct } from "../../Actions/increaseProduct";
import { decreaseProduct } from "../../Actions/decreaseProducto";
import { cleanOrder } from "../../Actions/cleanOrden";
import { createOrder } from "../../Actions/createOrder";

export default function Carrito() {
  const dispatch = useDispatch()
  
  const init_endpoint = useSelector((state) => state.init_endpoint);
  

  const [isOpen, setIsOpen] = useState(false);

    const carrito = useSelector((state) => state.cart)
    console.log("este es el carrito")
    console.log(carrito)

  const precioTotal = carrito.reduce((acumulador, producto) =>  acumulador + (producto.precio*producto.cantidad), 0)
  
  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (producto) => {
    dispatch(deleteProduct(producto))
  }


  const sumarProducto = (producto) => {
    dispatch(increaseProduct(producto))
  }

  const restarProducto = (producto) => {
    dispatch(decreaseProduct(producto))
  }

  const pagar = (producto) => {
    dispatch(cleanOrder())
    dispatch(createOrder(producto))
  };

  useEffect(() => {
    if (init_endpoint.length) {
      console.log("Redirigiendo a la URL:", init_endpoint);
      window.open(init_endpoint)
    }
  }, [init_endpoint]);

  return (
    <div className={css.container} >
          <button onClick={toggleCart} className={css.btn}>🛒</button>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleCart}
        className={css.modal}
        overlayClassName={css.overlay}
        >
              
        <div className={css.PopUp}>
                <h2 className={css.tituloPopUp}>Carrito de Compras</h2>
                <button onClick={toggleCart} className={css.btnPopUp}>❌</button> 
                  <ul className={css.list}>
                      {carrito && carrito.map((producto) => {
                        return (
                          <div key={producto.titulo}>
                              <li>
                                <div className={css.infoProduct}>
                                  <img src={producto.img} alt="" className={css.imgPopUp} />
                                  <h3>{producto.titulo}</h3>
                                  <h3>
                                    <button className={css.btnCant} onClick={() => restarProducto(producto)}>-</button>
                                    {producto.cantidad}
                                    <button className={css.btnCant} onClick={() => sumarProducto(producto)}>+</button>
                                  </h3>
                                  <h2>${producto.precio * producto.cantidad}</h2>
                                  <h3>
                                  <button className={css.btnEliminar} onClick={() => handleClick(producto)}>❌</button>
                                  </h3>
                                </div>
                              </li>
                           
                            </div>
                           
                            
                          )  
                        })
            }
            {carrito.length ?
              <div>
                <div>
                  <h2>Total: ${precioTotal} </h2>
                </div>
                <div>
                  <button onClick={() => pagar(carrito)} className={css.btnMP}> COMPRAR </button> 
                </div>
              </div>
              : null}
              
                  </ul>
        </div>
        
      </Modal>
    </div>
  );
}
