import '../styles/globals.css'
import MainLayout from '../components/layouts/main-layout'

function MyApp({ Component, pageProps }) {
  return <MainLayout body={<Component {...pageProps} />} />
}

export default MyApp
