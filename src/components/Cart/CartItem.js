import React from 'react'
import '@fortawesome/fontawesome-free'

const CartItem = ({
    cartItem: {
        id, 
        title, 
        img, 
        price, 
        total, 
        count,
    },
    decrement,
    increment,
    removeItem
}) => {
    return  <>
            <div className="container section">
                <div className="row cart-row cartFont">
                    <div className="col s10 l2 center-align">
                        <img src={img} alt={title} className="responsive-img"/>
                    </div>
                    <div className="col s10 s10 l2 center-align">
                        <span className="hide-on-large-only center">Product: </span>
                        {title}
                    </div>
                    <div className="col s10 l2 center-align">
                            <span className="hide-on-large-only center">Price: </span>
                            {`$${price}`}
                    </div>
                    <div className="col s10 l3 center-align">
                        <div className="quantity-buttons mt-1">
                            <span className="btn transparent black-text" onClick={() => decrement(id)}> - </span>
                            <span className="item-count"> {count} </span>
                            <span className="btn transparent black-text" onClick={() => increment(id)}> + </span>
                        </div>
                    </div>
                    <div className="col s10 l1 center-align">
                            <span className="hide-on-large-only center-align span-block mt-1 pr-1" > Remove: </span>
                            <span><i class="fas fa-trash" onClick={() => removeItem(id)}></i></span>
                    </div>
                    <div className="col s10 l2 center-align">
                            <span className="hide-on-large-only left-align span-block mt-1">{`Item Total:  $${total}`}</span>
                            {`$${total}`}
                    </div>
                </div>
            </div>
            </>
}

export default CartItem
