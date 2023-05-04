import { MouseEvent, useContext } from "react";
import { GetStaticProps } from "next";
import Image from "next/image";
import Link from 'next/link'
import Head from "next/head";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import { useKeenSlider } from 'keen-slider/react'
import { Container, Product } from "../styles/pages/home";
import { CartButton } from "../components/CartButton";
import { CartContext, IProduct } from "../contexts/CartContent";

import 'keen-slider/keen-slider.min.css'

interface HomeProps {
  products: IProduct[]
}

export default function Home({ products }: HomeProps) {
  const { addToCart, checkIfProductAlreadyExists } = useContext(CartContext)

  function handleAddProductToCart(e: MouseEvent<HTMLButtonElement>, product: IProduct) {
    e.preventDefault()
    const productAlreadyExists = checkIfProductAlreadyExists(product.id)

    if (!productAlreadyExists) {
      addToCart(product)
    }
  }

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

      <Container ref={sliderRef} className="keen-slider container">
        {products.map(product => (
          <Link href={`/product/${product.id}`} key={product.id} prefetch={false} passHref>
            <Product className="keen-slider__slide">
              <Image src={product.imageUrl} width={520} height={480} alt="#" />

              <footer>
                <div>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </div>

                <CartButton 
                  disabled={checkIfProductAlreadyExists(product.id)} 
                  onClick={(e) => handleAddProductToCart(e, product)}
                  type="button"
                  color="green" 
                />
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
      numberPrice: price.unit_amount! / 100,
      defaultPriceId: price.id
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 / 2  
  }
}