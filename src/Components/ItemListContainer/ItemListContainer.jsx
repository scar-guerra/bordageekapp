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
        
        const collectionRef = !categoryId
        ? collection(db, 'bordados')
        : query(collection(db, 'bordados'), where('category', '==', categoryId))
        setLoading(true)

        getDocs(collectionRef)
        .then(response => {
            const productsAdapted=response.docs.map (doc=> {
               const fields = doc.data()
                return {id: doc.id, ...fields}

            })
            
            setBordados(productsAdapted)
        })
        .finally(() =>{
            setLoading(false)
        })

       
    }, [categoryId])
    if(loading) {
        return <h1>Loading</h1>
    }

    return(
        <div>
            <h1 className="saludoTitle">{saludo}</h1>
            <ItemList bordados={bordados}/>
        </div>
    )


}

export default ItemListContainer