import React from 'react'

const CartColumns = () => {
    return <>
        <div className="container section hide-on-med-and-down">
            <div className="row" style={{marginBottom: '0'}}>
                <div className="col l2 center-align title-font">Products</div>
                <div className="col l2 center-align title-font">Name of Product</div>
                <div className="col l2 center-align title-font">Price</div>
                <div className="col l3 center-align title-font">Quantity</div>
                <div className="col l1 center-align title-font">Remove</div>
                <div className="col l2 center-align title-font">Total</div>
            </div>
        </div>
    
    
    </>
}

export default CartColumns
