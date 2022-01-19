import React from "react";
import CartItem from "./CartItem";

const CartList = ({cart, handleDeleteFromCart}) => {
    return(
        <div>
            {cart.map((product) => (
                <CartItem 
                    id={product.id}
                    name={product.name}
                    handleDeleteFromCart={handleDeleteFromCart}
                />
            ))}
        </div>
    )
}

export default CartList 