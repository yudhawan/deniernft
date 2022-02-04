import '../styles/globals.css'
import { Provider } from 'react-redux'
import {store} from '../store'
import Navigation from '../components/Navigation'
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Navigation>
        <Component {...pageProps} />
      </Navigation>
    </Provider>
    )
}

export default MyApp
