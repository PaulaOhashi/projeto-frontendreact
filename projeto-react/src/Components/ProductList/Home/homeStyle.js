import styled from "styled-components";

export const HomeContainer =styled.div`
    /* width:60vw; */
    width: 100%;
    max-width:980px;
    height:100%;
    padding:8px;
    display:flex;
    flex-direction:column;
    gap:8px;
    border-top:6px solid palegoldenrod;
`
export const HomeHeader = styled.div`
    display:flex;
    flex-direction:row;
    gap:0.3rem;
    padding-top:1rem;
`

export const ProductCardContainer = styled.div`
    /* width:60vw; */
    width: 100%;
    max-width:980px;
    height:100%;
    padding:8px;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    gap:8px;
    align-items:center;
    justify-content:center;
`