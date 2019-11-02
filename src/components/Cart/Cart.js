import React, { Component } from 'react'
import Title from '../../Title'
import CartColumns from './CartColumns'
import EmptyCart from './EmptyCart'
import { withProductConsumer } from '../../context'
import CartList from './CartList'
import CartTotals from './CartTotals'

export class Cart extends Component {

    render() {
        const { context, context: {cart} } = this.props
        
        if (!cart.length) return <EmptyCart />

        return <>
            <Title name="your" title="cart" />
            <CartColumns />
            <CartList context={context} />
            <CartTotals />
        </>
    }
}
export default withProductConsumer(Cart)
