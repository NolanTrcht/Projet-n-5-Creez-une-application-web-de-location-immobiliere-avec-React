import '../style/Slideshow.scss'
import logements from "../data/logement.json"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'



function Slideshow({id}){


    const idLogement = logements.find((log) => log.id === id)
    
    const [index, setIndex] = useState(0)

     const nextPhoto = () => {setIndex(index === idLogement.pictures.length - 1 ? 0 : index + 1)}
     const prevPhoto = () => {setIndex(index === 0 ? idLogement.pictures.length -1 : index - 1)}

    if(idLogement.pictures.length <= 1){
        return(
        <div className='slideshow'>
            <img src={idLogement.pictures[0]} className='slideshow-picture'/>
        </div>
        )
    }

    return(
        <div className='slideshow'>
            <FontAwesomeIcon icon={faAngleLeft} className='arrow left' onClick={prevPhoto} />
            <FontAwesomeIcon icon={faAngleRight} className='arrow right' onClick={nextPhoto}/>
            <span className='slideshow-number'>{index + 1}/{idLogement.pictures.length}</span>
            <img src={idLogement.pictures[index]} className='slideshow-picture'/>
        </div>
    )
}

export default Slideshow