import React from 'react'
import CartItem from './CartItem'

const CartList = ({
    context: {cart, decrement, increment, removeItem}
}) => {
  
    return  <>
            { cart.map(cartItem => 
                <CartItem 
                    key={cartItem.id} 
                    cartItem={cartItem} 
                    decrement={decrement}
                    increment={increment}
                    removeItem={removeItem}
                />
            )}
            </>
}


export default CartList
