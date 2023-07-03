import { useContext } from 'react'
import cart from './assets/cart_shop.png'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'
import '../CartWidget/CartWidget.css'


const CartWidget = ()=> {

    const {totalQuantity} = useContext(CartContext)
    
    return(

        <Link to='/cart' className='CartWidget' >
            <img style={{width:30, paddingRight:8}}  src={cart} alt='cart-logo'/> {totalQuantity}
        </Link>
    )
}

export default CartWidget