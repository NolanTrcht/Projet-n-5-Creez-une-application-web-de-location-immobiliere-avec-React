import { useParams } from "react-router-dom"
import logements from "../data/logement.json"
import "../style/Logement.scss"
import Slideshow from "../components/Slideshow"
import Collapse from "../components/Collapse.jsx"
import { Navigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function Logement(){
    const {id} = useParams()
    
    const logement = logements.find(log => log.id === id)

    if(!logement){
        return <Navigate to={"/*"}/>
    }

    const rating = Number(logement.rating)

    return(
    <div className="logement">
        <Slideshow id={id}/>

        <div className="logement-header-title">
            <h2 className="logement-title">{logement.title} </h2>
            <p className="logement-name_desktop">{logement.host.name}</p>
        </div>

        
        <p className="logement-location">{logement.location}</p>

        <div className="logement-tags_note">
             <ul className="logement-tags">
                {logement.tags.map((tag, index) => (
                <li key={index} className="logement-tags_list">{tag}</li>
                ))}
            </ul>

        <div className="logement-mobile-info">
            <span className="logement-note">
                {[1,2,3,4,5].map((note, index) => (
                <FontAwesomeIcon
                 icon={faStar}
                key={index}
                className={note <= rating ? "active" : ""}
                />
                ))}
            </span>
            <p className="logement-name mobile">{logement.host.name}</p>
  </div>
</div>
        <div className="logement-collapse">
            <Collapse title="Description" className="logement-description"> {logement.description}</Collapse>
            <Collapse title="Équipements" className="logement-equipements">{logement.equipments.map((equipement, index) => <li key={index}>{equipement}</li>)} </Collapse>
        </div>
    </div>
    )
}

export default Logement