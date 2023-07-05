
import { collection,query, where, documentId, getDoc, writeBatch, addDoc } from 'firebase/firestore'
import {db} from '../../service/firebase/firebaseConfig'
import CheckoutForm from '../CheckoutForm/CheckoutForm'
import { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

const Checkout = () => {
    const[loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const {cart, total, clearCart} = useContext(CartContext)

    const createOrder = async ({name, phone,email}) => {
        setLoading(true)

        try{
            const objOrder = {
                buyer:{
                    name, phone, email
                },
                items: cart,
                total: total

            }
            const batch = writeBatch(db)
            const outOfStock= []
            const ids = cart.map(prod =>prod.id)
            const productsRef = collection (db, 'products')
            const productsAddedFormFirestore = await getDoc(query(productsRef, where(documentId(), 'in', ids)))
            const {docs} = productsAddedFormFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity
                    if(stockDb >= prodQuantity){
                        batch.update(doc.ref, {stock: stockDb -prodQuantity})

                    }else{
                        outOfStock.push({id:doc.id, ...dataDoc})
                    }
            })

            if(outOfStock.length === 0){
                await batch.commit ()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart()
            }else{
                console.error('Hay productos que estan fuera de stock')
            }
        } catch(error){
            console.log(error)
        } finally{
            setLoading(false)
        }
    }
    if(loading) {
        return <h1>Estamos generando tu compra</h1>
    }
    if(orderId){
        return <h1>El id de tu orden es: {orderId}</h1>
    }
    return (
        <div>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder} />
        </div>
    )


}

export default Checkout