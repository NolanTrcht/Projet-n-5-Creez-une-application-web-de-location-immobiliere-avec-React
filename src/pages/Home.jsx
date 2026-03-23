import Card from '../components/Card.jsx'
import Banner from '../components/Banner.jsx'
import BannerImage from '../assets/banner_image.png'

function Home(){
    return(
        <div>   
            <Banner text={"Chez vous, partout et ailleurs"} image={BannerImage}/>
            <Card />
        </div>
    )
}

export default Home