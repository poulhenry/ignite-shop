import { useRouter } from "next/router"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"

export default function Product() {
  const { query } = useRouter()

  return (
    <ProductContainer>
      <ImageContainer>

      </ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 33,90</span>


        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsam consectetur earum repellat velit nemo impedit molestiae reiciendis? Corrupti, quas!</p>

        <button>Comprar Agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}