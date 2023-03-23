import styled from "styled-components";

export const CartContainer = styled.div`
    width: 30%;
    max-width:980px;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding-top:1rem;
    border-top:6px solid palegoldenrod;
    background-color:palegoldenrod;
    gap:0.5rem;
`
export const ClearButton = styled.button`
    width:80%;
    height:4vh;
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