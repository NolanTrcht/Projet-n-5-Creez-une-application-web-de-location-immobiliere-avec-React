import '../style/Nav.scss'
import { NavLink } from "react-router-dom"
import { useNavigate } from 'react-router-dom'

function Nav(){

    const navigate = useNavigate()

    return(
        <div className='header'>
            <img src='/logo.png' alt="Logo" className='header-logo' onClick={() => navigate("/")}/>
            <div className='header-nav'>
                <NavLink to ="/">Accueil</NavLink>
                <NavLink to="/about">A Propos</NavLink>
            </div>
        </div>
    )
}

export default Nav