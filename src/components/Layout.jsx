import '../style/Layout.scss'
import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'


function Layout(){
    return(
            <div className="layout">
                    <Nav />
                <main className="layout-content">
                    <Outlet />
                </main>   
                    <Footer />    
            </div>
    )
}

export default Layout