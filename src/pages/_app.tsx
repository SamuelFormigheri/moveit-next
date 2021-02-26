import Head from 'next/head'
import GlobalStyle from '../styles/global';
import SharedContext from '../context/global';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>MoveIt</title>
      </Head>
      <SharedContext>
        <Component {...pageProps} />
        <GlobalStyle />
      </SharedContext>
    </>
  )
}

export default MyApp
