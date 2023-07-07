import { Link } from "react-router-dom"
import '../Item/Item.css'

const Item = ({id, name, img, price, stock}) =>{
    return(
        <article className="CardItem">
            <header className="HeaderItem">
                <h2 className="ItemName">
                    {name}
                </h2>
            </header>
            <section>
            <img className="ItemImg" src={img} alt={name} />
            </section>
            <section>
                <p>Precio: ${price}</p>
            </section>
            <section>
                <p>Stock: {stock}</p>
            </section>
            <footer className="ItemFooter">
            <Link to={`/item/${id}`} className='Option'>
                    Ver Más
                </Link>
            </footer>
        </article>
    )

}

export default Item