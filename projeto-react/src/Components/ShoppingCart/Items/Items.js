import React from "react";
import { ContainerItems, InfoItems, AddRemoveContainer,Image,ImageCard,NameItem } from "./itemsStyle";
import bin from "../../../assets/bin.png"
import add from "../../../assets/add.png"

export const Items = (props) => {
    return(
        <ContainerItems>
                <Image>
                <ImageCard src={props.image} alt={"Imagem produto"}/>
                </Image>
                <InfoItems>
                <NameItem>{props.name}</NameItem>
                <p>{props.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                </InfoItems>
                <AddRemoveContainer>
                <button onClick={()=>props.removeProduct(props.id)}>
                <img src={bin} alt="" width="16px"/>
                </button> 
                <p>{props.quantity}</p>
                <button onClick={()=>props.addProduct(props.name,props.value,props.id)}>
                <img src={add} alt="" width="16px"/>
                </button>
                </AddRemoveContainer>         
        </ContainerItems> 
    )
}