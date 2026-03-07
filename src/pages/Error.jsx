import "../style/Error.css"
import { Link } from "react-router-dom"

function Error(){
    return(
        <div className="error">
            <h2 className="error-title">404</h2>
            <p className="error-text">Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className="error-link">Retourner sur la page d’accueil</Link>
        </div>
    )
}

export default Error