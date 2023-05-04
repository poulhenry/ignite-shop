import Image from "next/image";
import { ContainerItemProduct, ImageContainerItemProduct } from "./styles";
import { useCart } from "../../hooks/useCart";
import { MouseEvent } from "react";

interface ItemProductProps {
  product: {
    id: string;
    name: string;
    price: string;
    imageUrl: string;
  };
}

export function ItemProduct({ product }: ItemProductProps) {
  const { removeProductInCart } = useCart()

  function handleRemoveProductInCart(e: MouseEvent<HTMLAnchorElement>, productId: string) {
    e.preventDefault()

    removeProductInCart(productId)
  }

  return (
    <ContainerItemProduct>
      <ImageContainerItemProduct>
        <Image src={product.imageUrl} alt="" width="100" height="100" />
      </ImageContainerItemProduct>

      <section>
        <p>{product.name}</p>
        <strong>{product.price}</strong>
        <a href="#" onClick={(e) => handleRemoveProductInCart(e, product.id)}>Remover</a>
      </section>
    </ContainerItemProduct>
  );
}
