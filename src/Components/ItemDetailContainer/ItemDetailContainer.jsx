import { useEffect, useState } from "react"
import { getProductsById } from "../../asyncMock.js"
import ItemDetail from '../ItemDetail/ItemDetail.jsx'
import { useParams } from "react-router-dom"

const ItemDetailContainer = () =>{

    const {itemId} = useParams();

    const [product, setProduct] = useState({});



    useEffect(() =>{
        getProductsById(itemId)
          .then(response => {
            setProduct(response);
        })
          .catch((error) => {
            console.error(error)
        });
    }, [itemId]);

    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...product}/>
        </div>)
    
}

export default ItemDetailContainer