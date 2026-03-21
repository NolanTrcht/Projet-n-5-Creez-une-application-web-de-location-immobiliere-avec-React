import '../style/Banner.css'


function Banner({text}){
    return (
<div className='banner'>
        <div className='banner-text'>{text}</div>
</div>
    )
}

export default Banner