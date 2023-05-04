import { GetStaticPaths, GetStaticProps } from "next"
import Image from "next/image"
import { stripe } from "../../lib/stripe"
import Stripe from "stripe"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"
import axios from "axios"
import Head from "next/head"
import { IProduct } from "../../contexts/CartContent"
import { useCart } from "../../hooks/useCart"

interface ProductProps {
  product: IProduct
}

export default function Product({ product }: ProductProps) {
  const { addToCart, checkIfProductAlreadyExists } = useCart()

  const productAlreadyExistsInCart = checkIfProductAlreadyExists(product.id)

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>

          <button disabled={productAlreadyExistsInCart} onClick={() => addToCart(product)}>
            {productAlreadyExistsInCart ? 'Produto já adicionado no carrinho' : 'Colocar na sacola'}
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { id: 'prod_N5LRcYejMNCBCF' } }
    ],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps<any, {id: string}> = async ({ params }) => {
  const productId = params.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          currency: 'BRL',
          style: 'currency'
        }).format(price.unit_amount! / 100),
        numberPrice: price.unit_amount! / 100,
        description: product.description,
        defaultPriceId: price.id
      }
    },
    revalidate: 60 * 60 * 1 // 1 hour
  }
}