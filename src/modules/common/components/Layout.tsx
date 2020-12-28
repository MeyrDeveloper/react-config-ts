import {FC} from 'react'
import Head from 'next/head'

const Layout:FC = ({children}) => {
  return (
    <>
      <Head>

      </Head>
      <header></header>
      <main>
        {children}
      </main>
      <footer></footer>
    </>
  )
}

export default Layout