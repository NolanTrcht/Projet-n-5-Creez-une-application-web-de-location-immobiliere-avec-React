import '../style/Nav.css'
import { NavLink } from "react-router-dom"

function Nav(){
    return(
        <div className='header'>
            <img src='/public/logo.png' className='header-logo'/>
            <div className='header-nav'>
                <NavLink to ="/">Accueil</NavLink>
                <NavLink to="/about">A Propos</NavLink>
            </div>
        </div>
    )
}

export default Nav