import type { AppProps } from 'next/app'
import Image from 'next/image'
import { globalStyles } from '../styles/global'
import { Container, Header } from '../styles/pages/app'

import logoImg from '../assets/logo.svg'
import { Handbag } from '@phosphor-icons/react'
import Link from 'next/link'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Link href="/">
          <Image src={logoImg} alt="" />
        </Link>

        <button>
          <Handbag size={24} weight='bold' />
          <span>1</span>
        </button>
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
