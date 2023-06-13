import Item from "../Item/Item"

const ItemList = ({bordados}) =>{
    
    return(
        <div className="ListGroup">
            {bordados.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>
    )
}


export default ItemList