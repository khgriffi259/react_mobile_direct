import React from 'react'
import { Link } from 'react-router-dom'
import { withProductConsumer } from './context'
import PropTypes from 'prop-types'
import Modal from './Modal'
const Product = ({ 
    product: { title, img, inCart, price, id }, 
    context: { 
        handleDetail, 
        addToCart, 
        openModal,
    } 
}) => {
    
    return <div className="col s12 m6 l4">
      <div className="card">
        <div className="card-image " onClick={() => handleDetail(id)} >
            {inCart 
                ?   <Link 
                        to="/details"
                        className='disabled-react-link'
                        onClick={e => e.preventDefault()}    
                    >
                        <img src={img} className="responsive-img "/>
                    </Link>
                : <Link 
                        to="/details"
                    >
                        <img src={img} className="responsive-img "/>
                    </Link>
            }
            
            <a 
                className={`btn-floating halfway-fab waves-effect waves-light red ${inCart ? 'disabled' : ''}`}
                onClick={(e)=> {
                    e.stopPropagation()
                    addToCart(id)
                    openModal(id)
                    }}              
            >
                <i className="material-icons"> {`${inCart ? 'check' : 'add'}`} </i>
            </a>
        </div>
        <div className="card-content">
            <span className="card-title ">{title} </span>
            <p> These are the product details.</p>
        </div>
        <div className="card-action right-align">
            <h5>{`$${price}`}</h5>
        </div>
    </div>
    {/* MODAL */}
    <Modal />
    </div>
}

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
}

export default withProductConsumer(Product)
