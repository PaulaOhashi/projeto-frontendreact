import React from "react";
import logo from "../../assets/logo.png"
import { HeaderContainer } from "./headerStyle";


const Header = (props) => {
    return(
        <HeaderContainer>
            <img src={logo} alt="Imagem logo"/>
        </HeaderContainer>
    )
}

export default Header 