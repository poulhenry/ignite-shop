import type { AppProps } from 'next/app'
import Image from 'next/image'
import Link from 'next/link'
import { Sidebar } from '../components/Sidebar'
import { globalStyles } from '../styles/global'
import { Container, Header } from '../styles/pages/app'
import { CartContextProvider } from '../contexts/CartContent'

import logoImg from '../assets/logo.svg'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <Container>
        <Header>
          <Link href="/">
            <Image src={logoImg} alt="" />
          </Link>

          <Sidebar />
        </Header>

        <Component {...pageProps} />
      </Container>
    </CartContextProvider>
  )
}
