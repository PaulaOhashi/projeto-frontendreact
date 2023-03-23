import React from "react";
import { ProductCardContainer, CardButton,Button,Image,Name } from "./productCardStyle";


export const ProductCard = (props) => {
    return(
        <ProductCardContainer>
            <Image src={props.image} alt={"Imagem produto"} />
            <Name>{props.name}</Name> 
            <p>{props.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
            <Button>
            <CardButton onClick={()=>props.addProduct(props.name,props.value,props.id,props.image)}>Adicionar ao carrinho</CardButton>
            </Button>           
        </ProductCardContainer>
    )
}
