import { useEffect, useState } from "react"
import ItemDetail from '../ItemDetail/ItemDetail.jsx'
import { useParams } from "react-router-dom"
import {getDoc, doc} from 'firebase/firestore'
import {db} from '../../service/firebase/firebaseConfig.jsx'

const ItemDetailContainer = () =>{

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)


    const {itemId} = useParams();

    useEffect(() =>{
      setLoading(true)

      const docRef = doc(db, 'bordados', itemId)

      getDoc(docRef)
      .then(response =>{
        const data = response.data()
        const productsAdapted = {id: response.id, ...data}
        setProduct(productsAdapted)
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() =>{
        setLoading(false)
      })

      

    }, [itemId]);
    

    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...product}/>
        </div>)
    
}

export default ItemDetailContainer