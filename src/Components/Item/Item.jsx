import { Link } from "react-router-dom"

const Item = ({id, name, img, price}) =>{
    return(
        <article className="CardItem">
            <header className="HeaderItem">
                <h2 className="ItemName">
                    {name}
                </h2>
            </header>
            <picture>
                <img className="ItemImg" src={img} alt={name} />
            </picture>
            <section>
                <p>Precio: ${price}</p>
            </section>
            <footer className="ItemFooter">
                <Link to={`/item/${name}`} className="Option">Ver Más</Link>
            </footer>
        </article>
    )

}

export default Item