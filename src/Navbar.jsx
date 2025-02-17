import React from "react";
import { Link, NavLink } from "react-router-dom";



const Navbar = (() => {

    return(
        <div>
            
            <nav className="dt w-13 border-box pa3 ph5-ns bg-light-gray">
                <Link className="dtc v-mid mid-gray link dim w-25 " to='/'>Főoldal </Link>
                <NavLink className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" to='/ermesek'>Az olimpia érmesei </NavLink>
                <NavLink className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" to='/mermesek'>A magyar érmesek </NavLink>
            </nav>
            
        </div>
    )
}
)

export default Navbar