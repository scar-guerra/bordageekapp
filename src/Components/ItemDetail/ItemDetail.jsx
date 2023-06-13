import ItemCount from "../ItemCount/ItemCount"
import '../ItemDetail/ItemDetail.css'

const ItemDetail = ({ id, name, img, category, description, price}) =>{
    return (
        <article className="Carditem">
            <header className="Headeritem">
                <h2 className="Itemname">
                    {name}
                </h2>
            
            <picture>
                <img className="Itemimg" src={img} alt={name} />
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
            
            <footer className="itemFooter">
            <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('cantidad ingresada ', quantity)} />
            </footer>
            </section>
        </article>
    )
}

export default ItemDetail