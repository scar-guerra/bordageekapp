import {createContext, useState} from 'react'

export const CartContext = createContext ({
    cart: []
})

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([])

    console.log(cart)

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)){
            setCart(prev => [...prev, {...item, quantity}])
        }else {
            console.error('El producto ya fue agregado')
        }
    }

    const removeItem = (itemId) =>{
        const cartUpdate = cart.filter(prod => prod.id !== itemId)
        setCart (cartUpdate)
    }

    const clearCart = () =>{
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    const getTotalQuantity = () => {
        let totalQuantity = 0

        cart.forEach(prod => {
            totalQuantity += prod.quantity
        })

        return totalQuantity
    }

    const totalQuantity = getTotalQuantity()


    const getTotal = () => {
        let total = 0

        cart.forEach(prod => {
            total += prod.price
        })

        return total
    }

    const total = getTotal()



    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, totalQuantity, total}}>
            {children}
        </CartContext.Provider>
    )
}