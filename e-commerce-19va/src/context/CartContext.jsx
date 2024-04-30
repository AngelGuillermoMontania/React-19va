import { useState, createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  function existe(id) {
    return cart.some((elem) => elem.id == id);
  }

  function agregarProducto(producto, cantidad) {
    if (existe(producto)) {
      const newCart = cart.map((productInCart) => {
        // nuevo array
        if (productInCart.id === producto.id) {
          return {
            ...productInCart,
            cantidad: productInCart.cantidad + cantidad,
          };
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, { ...producto, cantidad }]);
    }
  }

  function limpiarCarrito() {
    setCart([]);
  }

  function totalPrecioCarrito() {
    const total = cart.reduce((acc, element) => {
      return acc + element.precio * element.cantidad;
    }, 0);
    return total; //    5000000    6 productos     2   3
  }

  function totalPrecioPorProducto(id) {
    const productoConsultado = cart.find(elem.id === id);
    return productoConsultado.precio * productoConsultado.cantidad;
  }

  function eliminarProductoPorId(id) {
    const aux = cart.filter((elem) => elem.id !== id);
    setCart(aux);
  }

  function eliminarPorCantidad(cant, id) {
    if (existe(producto)) {
      if (cart.find((elem) => elem.id == id).cantidad === 1) {
        const aux = cart.filter((elem) => elem.id !== id);
        return setCart(aux);
      } else {
        const newCart = cart.map((productInCart) => {
          // nuevo array
          if (productInCart.id === producto.id) {
            return {
              ...productInCart,
              cantidad: productInCart.cantidad - cantidad,
            };
          }
        });
        setCart(newCart);
      }
    }
  }

  const data = {
    cart,
    limpiarCarrito,
    totalPrecioCarrito,
    totalPrecioPorProducto,
    agregarProducto,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
