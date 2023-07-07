
import ItemCount from "../ItemCount/ItemCount"
import '../ItemDetail/ItemDetail.css'
import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import { CartContext } from "../../Context/CartContext"

const ItemDetail = ({ id, name, img, category, description, price, stock}) =>{

    const [quantityAdded, setQuantityAdded] = useState (0)

    const {addItem} = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, name, price
        }
        addItem(item, quantity)
    }

    return (
        <article className="Carditem">
            <header className="Headeritem">
                <h2 className="Itemname">
                    {name}
                </h2>
            
            <picture>
                <img className="ItemImg" src={img} alt={name} />
            </picture>
            </header>
            <section>
                <p className="info">
                    Categoria: {category}
                </p>
                <p className="info">
                    Detalle: {description}
                </p>
                <p className="info">
                    Precio: ${price}
                </p>
                <p className="info">
                    Stock: {stock}
                </p>
            
            <footer className="itemFooter">
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart' className="Option">Terminar Comprar</Link>
                    ) : (
                        <ItemCount initial={1} stock={10} onAdd={handleOnAdd} />
                    )
                }
            
            </footer>
            </section>
        </article>
    )
}

export default ItemDetail