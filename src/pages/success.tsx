import Link from "next/link";
import { SuccessContainer, ImageContainer, ImagesContainer } from "../styles/pages/success";
import Image from "next/image";
import { GetServerSideProps } from "next";
import { stripe } from "../lib/stripe";
import Stripe from "stripe";
import Head from "next/head";

interface SuccessProps {
  customerName: string
  productImagens: string[]
}

export default function Success({ customerName, productImagens }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
      </Head>

      <SuccessContainer>
        <ImagesContainer>
          {productImagens && productImagens.map(imageUrl => (
            <ImageContainer key={imageUrl}>
              <Image src={imageUrl} width={120} height={110} alt="" />
            </ImageContainer>
          ))}
        </ImagesContainer>
        
        <h1>Compra efetuada</h1>

        <p>Uhuul, <strong>{customerName}</strong>, sua compra de {productImagens.length} camisetas ja está a caminho da sua casa.</p>

        <Link href='/'>
          Voltar ao catalogo
        </Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })

  const customerName = session.customer_details.name
  const productImagens = session.line_items.data.map(item => {
    const product = item.price.product as Stripe.Product

    return product.images[0]
  })

  return {
    props: {
      customerName,
      productImagens
    }
  }
}