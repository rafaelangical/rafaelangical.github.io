import Head from 'next/head'
import * as React from 'react'
import Footer from '../footer/footer'
import Header from '../header/header'

type LayoutProps = {
  title?: string
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => (
  <div className="App">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    {children}
    <Footer />
  </div>
)
export default Layout