import React from "react";
import { CartContainer,ClearButton } from "./cartStyle";
import { Items } from "../Items/Items"; 

export const Cart = (props) =>{

    const removeProduct = (id) => {
        const newCart = [...props.cart]
        const alreadyInCart = props.cart.find((element)=>element.id===id)
        if(alreadyInCart.quantity>1){
            alreadyInCart.quantity -= 1
            props.setCart(newCart)
        }else{
            const removeItem = newCart.filter((element)=>element.id!==id)
            props.setCart(removeItem)
        }    
    }
    
    const clearCart = () =>{
        props.setCart([])
    }

    const totalValue = props.cart.reduce((total,current) =>{
        const cont = total+(current.value*current.quantity)
        return cont
    },0)
    
    return(
        <CartContainer>
            <h2>Carrinho</h2>
            {props.cart.map((element,index)=>{
                return(
                <Items
                key={index}
                name={element.name}
                value={element.value*element.quantity}
                quantity={element.quantity} 
                id={element.id}
                removeProduct={removeProduct}
                image={element.image}
                addProduct={props.addProduct}
                />
                )
            })} 
          {props.cart?totalValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }):0}
        
            <ClearButton onClick={clearCart}>Limpar Carrinho</ClearButton>
        </CartContainer>

    )
}