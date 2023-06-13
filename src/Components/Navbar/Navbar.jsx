import CartWidget  from "../CartWidget/CartWidget"
import LogoBrand from "../LogoBrand/Logobrand"
import { NavLink, Link } from "react-router-dom"

const Navbar = () => {
    return(
        <nav>
            <Link to ='/'>
            <LogoBrand/>
            </Link>
           
            <div className="Categories">
                <NavLink to={`/category/pokemon`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Pokemon</NavLink>
                 <NavLink to={`/category/series`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Series</NavLink>
                 <NavLink to={`/category/starwars`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Star Wars</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default Navbar