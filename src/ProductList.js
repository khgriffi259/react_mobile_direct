import React, { Component } from 'react'
import Title from './Title'
import { withProductConsumer } from './context'
import Product from './Product'

export class ProductList extends Component {
       
    render() {
        const { products } = this.props.context
        return (
            <section className="container section">
                <Title name="Our" title="products"/>
                <div className="row">
                    {products.map(product => 
                        <Product key={product.id} product={product} />
                    )}
                </div>
            </section>
            
            
    )
}
}
export default withProductConsumer(ProductList)
