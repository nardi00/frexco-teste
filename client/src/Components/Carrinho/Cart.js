import React from "react";
import styled from "styled-components";
import CartList from "./CartList";
import { Button } from '@mui/material';

const Container = styled.div`
    padding: 50px 130px;
    height: 60px;    
`

const Cart = ({cart, handleDeleteFromCart, handleDeleteAll}) => {
    return(
        <Container>
            <div className="cart-container-cart">
            <h1>Checkout</h1>
                <div className="checkout">
                    <div>
                        <p>Total: ???????</p>
                    </div>
                        
                    <div className="pay-button">
                        <Button variant="contained" color="primary">Pagar</Button>
                    </div>
                </div>
                
                <div className="cart-header">
                    <h1>Carrinho</h1>
                    <Button variant="contained" color="error" onClick={() => handleDeleteAll()} >Apagar todos os items</Button>
                </div>
                <CartList cart={cart} handleDeleteFromCart={handleDeleteFromCart}/>
            </div>
        </Container>
    )
}

export default Cart
