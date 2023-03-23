import styled from "styled-components";

export const ProductCardContainer = styled.div`
    width:40%;
    height:40%;
    display:flex;
    flex-direction:column;
    gap:10px;
    border:1.5px solid black;
`

export const CardButton = styled.button`
    width:80%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:0.2rem;
    &:hover{
        -moz-transform: scale(1.1);
	    -webkit-transform: scale(1.1);
	    transform: scale(1.1);
    }
`

export const Button = styled.div`
    display: flex;
    justify-content:center;
    padding-bottom:0.5rem;
`
export const Image = styled.img`
     &:hover{
        -moz-transform: scale(1.1);
	    -webkit-transform: scale(1.1);
	    transform: scale(1.1);
    }
    width:100%;
`

export const Name = styled.p`
    width:100%;
`