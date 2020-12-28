import 'styles/globals.scss'
import {Provider} from 'react-redux'
import store from '../store'
import { createWrapper } from 'next-redux-wrapper';
import Layout from 'src/modules/common/components/Layout'

function MyApp({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default createWrapper(() => store).withRedux(MyApp)
