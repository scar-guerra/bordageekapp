import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({  name, img, category, description, price}) =>{
    return(
        <article className="CardItem">
            <header className="headerItem">
                <h2 className="itemName">
                    {name}
                </h2>
            </header>
            <picture>
                <img className="itemImg" src={img} alt={name} />
            </picture>
            <section>
                <p className="info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Detalle: {description}
                </p>
                <p className="Info">
                    Precio: ${price}
                </p>
            </section>
            <footer className="itemFooter">
            <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('cantidad ingresada ', quantity)} />
            </footer>
        </article>
    )
}

export default ItemDetail