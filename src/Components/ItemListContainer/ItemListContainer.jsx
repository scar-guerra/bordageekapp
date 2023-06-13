import { useEffect, useState } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = ({saludo}) => {

    const [bordados, setBordados] = useState([])

    const {categoryId} = useParams()

    useEffect(() =>{
        const asyncFunc = categoryId ? getProductsByCategory : getProducts
        asyncFunc(categoryId)
        .then(response => {
            setBordados(response)
        })
        .catch(error =>{
            console.error(error)
        })
    }, [categoryId])


    return(
        <div>
            <h1 className="saludoTitle">{saludo}</h1>
            <ItemList bordados={bordados}/>
        </div>
    )
}

export default ItemListContainer