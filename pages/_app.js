import '../styles/globals.css'
import Container from '../components/container/Container'
import SimpleReactLightbox from 'simple-react-lightbox'

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <SimpleReactLightbox>
          <Component {...pageProps} />
      </SimpleReactLightbox>
    </Container>
  )
}

export default MyApp
