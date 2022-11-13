import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Header from '../navigation/header'
import Footer from '../navigation/footer'
import MobileMenu from '../navigation/mobile-menu'


export default function MainLayout (props) {
    const [mobileMenu, setMobileMenu] = useState(false)
    
    useEffect(()=> {
        window.addEventListener('resize', () => {
            if(window.innerWidth > '768') {
                setMobileMenu(false)
            }
        })
     }, [])

     const router = useRouter()
     useEffect(() => {
         const handleRouteChange = (url) => {
             setMobileMenu(false)
         }
 
         router.events.on('routeChangeComplete', handleRouteChange)
 
         return () => {
             router.events.off('routeChangeComplete', handleRouteChange)
         }
     }, [router.events])

    return <div className="relative h-screen bg-blue-900">
        <Header menu={mobileMenu} setMenu={() => setMobileMenu(!mobileMenu)} />
        {!mobileMenu ? <div>
            {props.body}
            <Footer />
        </div> : <MobileMenu />}
    </div>
}