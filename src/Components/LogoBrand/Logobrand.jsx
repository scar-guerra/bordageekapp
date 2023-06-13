import brand from './assetsLogo/logo_new_color.png'
import './Logobrand.css'

const LogoBrand = () =>{
    return(
        <div className='logoNavbar'>
            <img className='logo_brand' src={brand} alt="" />
        </div>
    )
}

export default LogoBrand