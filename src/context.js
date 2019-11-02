import React, { Component, createContext } from 'react'
import { storeProducts, detailProduct } from './data'

const ProductContext = createContext()

class ProductProvider extends Component {
    
    state = {
        products: [],
        detailProduct,
        cart: [],
        modalOpen: false,
        modalProduct: {},
        subTotal: 0,
        tax: 0,
        total: 0,
    }
    
    componentDidMount() {
        this.setState({
            ...this.state,
            products: this.setProducts(),
        })
    }
    
    handleDetail = pId => {
        
        const {products} = this.state
        const selected = products.find(({ id }) => id === pId)
        this.setState({
            ...this.state, 
            detailProduct: selected
        })
    }

    addToCart = pid => {
        const { products } = this.state
        const newCartItems = products.map(item => {
            if (item.id === pid) {
                return {...item, inCart: true, count: 1, total: item.price}
            }
            return {...item}
        })
        
        //grab the product after updating incart, count, and total.  then place into cart
        const item = newCartItems.find(item => item.id === pid)
        
        const subTotal = this.getSubTotal(newCartItems)
        const tax = this.getTax(subTotal)
        const total = this.getTotal(subTotal, tax)


        this.setState(()=> ({
            products: newCartItems,
            detailProduct: {...this.state.detailProduct, inCart: true},
            cart: [...this.state.cart, item],
            subTotal,
            tax,
            total
        }))
    }
    
    setProducts = () => {
        return storeProducts.reduce((products, storeProduct) => {
            // products[i] = {...storeProduct}
            products = [...products, {...storeProduct}]
            return products
        }, [])
    }


    openModal = pid => {
        const { products } = this.state
        const product = products.find(product => product.id === pid)
        console.log(product)
        this.setState(() => ({
            modalOpen: true,
            modalProduct: product
        }))
    }
    
    closeModal = () => {
        this.setState({
            ...this.state, 
            modalOpen: false
        })
    }

    increment = id => {
        const { cart } = this.state
        const newCartItems = cart.map(item => {
            if (item.id === id) {
                return {
                    ...item, 
                    count: item.count += 1, 
                    total: item.count * item.price 
                }
            }
            return {...item}
        })

        // get subtotal, tax, and total. then set state
        const subTotal = this.getSubTotal(newCartItems)
        const tax = this.getTax(subTotal)
        const total = this.getTotal(subTotal, tax)

        this.setState({
            cart: newCartItems,
            subTotal,
            tax,
            total
        })
    }
    
    decrement = id => {
        const { cart } = this.state
        
        let newCartItems
        const item = cart.find(item => item.id === id)

        if (item.count > 0){ 
            if (item.count === 1) {
                newCartItems = this.removeItem(id)
            } else {
                newCartItems = cart.map(item => {
                    if (item.id === id) {
                        return {
                            ...item, 
                            count: item.count -= 1, 
                            total: item.count * item.price
                        }
                    }
                    return {...item}
                })
            }
        }
        
        // get subtotal, tax, and total. then set state
        const subTotal = this.getSubTotal(newCartItems)
        const tax = this.getTax(subTotal)
        const total = this.getTotal(subTotal, tax)
        
        this.setState({
            cart: newCartItems,
            subTotal,
            total
        })       
    }

    getSubTotal = newCartItems => {
        return newCartItems.reduce((subTotal, item) => {
            return subTotal += item.total
        }, 0)
    }

    getTax = (subTotal) => {
        // return parseInt(subTotal) * .1
        return subTotal * .1
    }

    getTotal = (subTotal, tax) => {
        return subTotal + tax
    }

    removeItem = id => {
        const { cart, products } = this.state
        const newCartItems = cart.filter(item => item.id != id)
        const newProducts = products.map(product => {
            if (product.id === id){
                return {...product, 
                    inCart: false,
                    count: 0, 
                    total: 0
                }
            }
            return {...product}
        })

        this.setState({
            cart: newCartItems,
            products: newProducts
        })

        return newCartItems
    }

    clearCart = () => {
        const { cart, products } = this.state
        const newProducts = products.map(product => {            
                return {
                    ...product, 
                    inCart: false,
                    count: 0,
                    total: 0
                }
        })

        this.setState({
            cart: [],
            products: newProducts,
        })
    }

    render() {
        return  <ProductContext.Provider value={{
                    ...this.state,
                    handleDetail: this.handleDetail,
                    addToCart: this.addToCart,
                    openModal: this.openModal,
                    closeModal: this.closeModal,
                    increment: this.increment,
                    decrement: this.decrement,
                    removeItem: this.removeItem,
                    clearCart: this.clearCart,
                    }}
                >
                    <div>
                        {this.props.children}
                    </div>
                </ProductContext.Provider>
    }
}

const ProductConsumer = ProductContext.Consumer

const withProductConsumer = Component => props => {
    return  <ProductConsumer>
                {value => <Component {...props} context={value} />}
            </ProductConsumer>
}

export  { ProductProvider, ProductConsumer, withProductConsumer }
