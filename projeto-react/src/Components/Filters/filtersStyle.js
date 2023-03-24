import styled from "styled-components";

export const FiltersContainer = styled.div`
        width: 30%;
        max-width:980px;
        padding-top:1rem;
        display:flex;
        flex-direction:column;
        gap:30px;
        align-items:center;
        border-top:6px solid palegoldenrod;
        background-color:palegoldenrod;
`

export const Form = styled.form`
        display:flex;
        flex-direction:column;
        gap:16px;
        width:80%;
`

export const Input = styled.input`
`

export const Label = styled.label`
    display:flex;
    flex-direction:column;
`

export const Button = styled.button`
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