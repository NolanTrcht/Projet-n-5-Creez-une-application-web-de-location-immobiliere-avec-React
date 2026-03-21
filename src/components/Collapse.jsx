import '../style/Collapse.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function Collapse({title, children}){
    const [isOpen, setisOpen] = useState(false)

    return(
          <div className="collapse">
            <div className="collapse-header"  onClick={() => setisOpen(!isOpen)}>
                <span>{title}</span>
                <FontAwesomeIcon icon={faAngleDown} color="blue" className={isOpen ? "drop-down" : "drop-down rotate"}/>
            </div>
            <div className={isOpen ? "collapse-text" : "collapse-text hide"}>{children}</div>
        </div> 
    )
}

export default Collapse