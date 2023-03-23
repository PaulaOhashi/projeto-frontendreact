import React, { useState } from "react";
import { HomeContainer,ProductCardContainer,HomeHeader } from "./homeStyle";
import { ProductCard } from "../ProductCard/ProductCard";

export const Home = (props) =>{
    const [ordination, setOrdination] = useState("")
   
    const changeOrdination = (event) => {
        setOrdination(event.target.value)
    }

    return(
        <HomeContainer>
            <HomeHeader>
                <select onChange={changeOrdination}>
                    <option value="crescente">Crescente</option>
                    <option value="decrescente">Decrescente</option>
                </select>
            </HomeHeader>
            <ProductCardContainer>
            {props.productList.sort((a,b)=>{
                if(ordination==="crescente"){
                    return a.value - b.value
                }
                if(ordination==="decrescente"){
                    return b.value - a.value
                }
            })
            .filter((element) => {
                return element.name.toLowerCase().includes(props.searchFilter.toLowerCase())
            })
            .filter((element) => {
                if((props.minFilter <= element.value) && (element.value <= props.maxFilter)){
                    return element
                }
            })
            .map((element)=>(
                <ProductCard 
                key={element.id} 
                name={element.name}
                id={element.id} 
                value={element.value} 
                image={element.image}
                cart={props.cart}
                amount={props.amount}
                addProduct={props.addProduct}
                />
            ))}
            </ProductCardContainer>
        </HomeContainer>
    )
}