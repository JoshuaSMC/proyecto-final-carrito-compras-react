import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Swal from "sweetalert2";
import "../styles/CartPage.css";

export const CartPage = () => {

    const {shoppingList,addProduct,removeProduct, incrementProduct, decrementProduct} = useContext(CartContext)

    const calculateTotal = () => {
        return shoppingList.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
    }

    const handlerPurchase = () => {
        const productsPurchased = shoppingList.map(product => `${product.title} x ${product.quantity}`).join('\n')
        Swal.fire({
            icon: 'success',
            title: 'Productos Comprados',
            html: `<p> Has comprado: </p> <pre> ${productsPurchased} </pre>`,
            
        })
    }
    return (
      <>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Precio</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {shoppingList.map((product) => (

              <tr key={product.id}>
                <td scope="row">{product.title}</td>
                <td>${product.price}</td>

                <td>
                  <button 
                    className="btn btn-outline-primary" 
                    onClick={() => decrementProduct(product.id)}
                    >-</button>
                  <button 
                    className="btn btn-primary" 
                  >{product.quantity}</button>
                  <button 
                    className="btn btn-outline-primary" 
                    onClick={() => incrementProduct(product.id)}
                    >+</button>

                </td>
                <td>
                  <button 
                    className="btn btn-danger" 
                    onClick={() => removeProduct(product.id)}
                    >Eliminar</button>
                </td>
              </tr>
            ))}

            <tr>
              <td colSpan="2" style={{ textAlign: "right", fontWeight: "bold" }}>
                TOTAL:
              </td>
              <td>${calculateTotal()}</td>
            </tr>

          </tbody>
        </table>

        <div className="d-grid gap-2">
          <button 
          className="btn btn-primary" 
          type="button"
          onClick={handlerPurchase}
          >Comprar</button>
        </div>

      </>
    )
}
