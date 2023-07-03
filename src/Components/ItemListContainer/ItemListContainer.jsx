import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import {collection, getDocs, query, where} from 'firebase/firestore'
import {db} from '../../service/firebase/firebaseConfig'

const ItemListContainer = ({saludo}) => {

    const [bordados, setBordados] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()

    useEffect(() =>{
        setLoading(true)

        const collectionRef = categoryId
        ? query(collection(db, 'bordados'), where('category', '==', categoryId))
        : collection(db, 'bordados')

        getDocs(collectionRef)
        .then(response => {
            const productsAdapted=response.docs.map (doc=> {
                const data = doc.data()
                return {id: doc.id, ...data}

            })
            setBordados(productsAdapted)
        })
        .catch(error => {
            console.log(error)
        })
        .finally(() =>{
            setLoading(false)
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