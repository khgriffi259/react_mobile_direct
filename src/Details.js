import React, { Component } from 'react'
import { withProductConsumer } from './context'
import { Link } from 'react-router-dom'

export class Details extends Component { 
    
    render() {
        const { 
            detailProduct, 
            detailProduct: {id, img, title, price, info, inCart}, 
            addToCart 
        } = this.props.context
        
        console.log(detailProduct)

    return <>
        <div className="container section">
        <div className="card ">
        <div className="row">
        <div className="col s12 m6">
            <div className="img-container" >
                <img src={img} className=""/>   
            </div>
        </div>
        <div className="col s12 m6">
            <div className="card-content">
                <span class="card-title"> {title} </span>
                <h4>{`$${price}`}</h4>
                <h5>Some Info About Product:</h5>
                <p> {info}</p>
                <div className="mt-1">
                    <Link to="#" 
                        className={`btn mr-1 ${inCart ? 'disabled' : ''}`} 
                        onClick={()=> addToCart(id)}
                    >
                        {inCart ? 'In Cart' : 'Add To Cart'}
                    </Link>
                    <Link to="/" className="btn orange mr-1">Shop</Link>
                    <Link to="/" className="btn blue">Cart</Link>
                </div>
            </div>
        </div>
        </div>
        </div>
        </div>
    </>
    }
}

export default withProductConsumer(Details)
