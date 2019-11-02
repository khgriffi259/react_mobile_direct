import React from 'react'
import { withProductConsumer } from '../../context'

const CartTotals = ({
    context: {
        subTotal,
        tax,
        total,
        clearCart
    }
}) => {
    
    return  <>
            <div className="container section">
                <div className="row">
                    <div className="col s10 offset-s2 l5 offset-l7 right-align">
                        <button 
                            className="btn-large waves-effect waves-light red "
                            onClick={() => clearCart()}    
                            >
                            Clear Cart
                        </button>
                        <h3>
                            <span className="text-title">Subtotal: </span>
                            <span> {`$${subTotal.toFixed(2)}`} </span>
                        </h3>
                        <h3>
                            <span className="text-title">Tax: </span>
                            <span> {`$${tax.toFixed(2)}`} </span>
                        </h3>
                        <h3>
                            <span className="text-title">Total: </span>
                            <span> {`$${total.toFixed(2)}`} </span>
                        </h3>
                    </div>
                </div>
            </div>
            </>
}

export default withProductConsumer(CartTotals)
