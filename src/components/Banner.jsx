import '../style/Banner.scss'



function Banner({text, image}){
    return (
<div className='banner'  style={{ backgroundImage: `url(${image})`}}>
        <div className='banner-text'>{text}</div>
</div>
    )
}

export default Banner