import { NextSeo } from 'next-seo'

import '../styles/tailwind.css'
import '../styles/globals.css'

import nextSEOConfig from '../config/next-seo.config'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextSeo openGraph={nextSEOConfig} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
