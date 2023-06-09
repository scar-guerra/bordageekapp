import CartWidget  from "../CartWidget/CartWidget"
import LogoBrand from "../LogoBrand/Logobrand"

const Navbar = () => {
    return(
        <nav>
            <LogoBrand/>
            <div>
                <button className="navbar_botones">Pokemon</button>
                <button className="navbar_botones">Harry Potter</button>
                <button className="navbar_botones">Star Wars</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default Navbar