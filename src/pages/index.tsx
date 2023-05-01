import { GetStaticProps } from "next";
import Image from "next/image";
import Link from 'next/link'
import Head from "next/head";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import { useKeenSlider } from 'keen-slider/react'
import { Container, Product } from "../styles/pages/home";

import 'keen-slider/keen-slider.min.css'
import { Handbag } from "@phosphor-icons/react";

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: string
  }[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  })

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <Container ref={sliderRef} className="keen-slider">
        {products.map(product => (
          <Link href={`/product/${product.id}`} key={product.id} prefetch={false}>
            <Product className="keen-slider__slide">
              <Image src={product.imageUrl} width={520} height={480} alt="#" />

              <footer>
                <div>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </div>

                <button type="button">
                  <Handbag size={24} weight="bold" />
                </button>
              </footer>
            </Product>
          </Link>
        ))}

      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        currency: 'BRL',
        style: 'currency'
      }).format(price.unit_amount! / 100),
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 / 2  
  }
}