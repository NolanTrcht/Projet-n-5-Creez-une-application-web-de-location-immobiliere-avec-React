import { useParams } from "react-router-dom"

function Logement(){
    const {id} = useParams()

    return(
        <div>
            <h2>Logement</h2>

        </div>
    )
}

export default Logement