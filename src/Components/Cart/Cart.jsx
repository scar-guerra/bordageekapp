import { Link } from "react-router-dom"
import { CartContext } from "../../Context/CartContext"
import { useContext } from "react"
import Item from "../Item/Item"


const Cart = () => {
    const {cart, clearCart, totalQuantity, total} = useContext (CartContext)

    if(totalQuantity === 0){
        return (
            <div>
                <h1>No hay productos en el carrito</h1>
                <Link to='/' className="Option">Productos</Link>
            </div>
        )
    }

    return(
        <div>
            {cart.map(p => <Item key={p.id} {...p}/>)}
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()} className=' Option'>Limpiar Carrito</button>
            <Link to='/checkout' className="Option">Checkout</Link>
        </div>
    )
}

export default Cart