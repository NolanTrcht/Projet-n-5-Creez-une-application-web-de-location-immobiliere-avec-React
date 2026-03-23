import '../style/Card.scss'
import logements from "../data/logement.json"
import { Link } from 'react-router-dom'
import Logement from '../pages/Logement.jsx'

function Card(){
  
   
    return(
<div className='card'>
    <ul className='card-conteneur'>
        {logements.map(logement =>(
             
            <Link to={`/logement/${logement.id}`} key={logement.id} element={<Logement />}>
            <li className='card-logement'
             style={{backgroundImage: `url(${logement.cover})`,
             backgroundPosition: `center`,
             objectFit: `cover`}}>  

                <h2 className='card-logement_title'>{logement.title}</h2>

            </li>
        </Link>
        ))}
    </ul>
</div>
    )
}

export default Card