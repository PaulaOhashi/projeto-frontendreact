import React, { useEffect } from 'react';
import  Filters  from './Components/Filters/Filters'
import { GlobalStyles } from './GlobalStyles';
import Header from './Components/Header/Header';
import { useState } from 'react';
import styled from 'styled-components';
import { Home } from './Components/ProductList/Home/Home';
import { Cart } from './Components/ShoppingCart/Cart/Cart';
import { productList } from './assets/productList.js';
import fundo from "./assets/fundo.png"

const MainContainer = styled.main`
    display:flex;
    flex-direction:column;
    background-color:beige;
`

const Container = styled.div`
  display:flex;
  flex-direction:row;
`

const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart"))

function App() {
  const [minFilter, setMinFilter] = useState("")
  const [maxFilter, setMaxFilter] = useState("")
  const [searchFilter, setSearchFilter] = useState("")
  const [cart,setCart] = useState([])

  useEffect(() =>{
    localStorage.setItem("cart",JSON.stringify(cart))
  },[cart])

  const changeMinFilter = (event) => {
      setMinFilter(event.target.value)
  }

  const changeMaxFilter = (event) => {
      setMaxFilter(event.target.value)
  }

  const changeSearchFilter = (event) => {
      setSearchFilter(event.target.value)
  }

   const addProduct = (name,value,id,image) => {    
    const newCart = [...cart]
    const alreadyInCart = cart.find((element)=>element.id===id)
    if(!alreadyInCart){
        const itemObject = {name,value,id,image,quantity: 1}
        newCart.push(itemObject)
    }else{
        alreadyInCart.quantity+=1
    }
    setCart(newCart)
  }   

  return(
    <MainContainer className="App">
      <Header
      fundo={fundo}
      />
      <GlobalStyles/>
      <Container>
        <Filters 
        minFilter={minFilter}
        maxFilter={maxFilter}
        searchFilter={searchFilter}
        changeMaxFilter={changeMaxFilter}
        changeMinFilter={changeMinFilter}
        changeSearchFilter={changeSearchFilter}/>
        <Home
        productList={productList}
        cart={cart}
        setCart={setCart}
        searchFilter={searchFilter}
        minFilter={minFilter}
        maxFilter={maxFilter}
        addProduct={addProduct}
        />
        <Cart
        productList={productList}
        cart={cart}
        setCart={setCart}
        addProduct={addProduct}
        
        />
      </Container>
    </MainContainer>
  );
}

export default App;
