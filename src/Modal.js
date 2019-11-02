import React from 'react'
import { Link } from 'react-router-dom'
import { withProductConsumer } from './context'

const styles = {
    container: {
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgb(0, 0, 0, 0.1)',
        zIndex: 1,
    },
    content: {
        textAlign: 'center'
    },
    button: {
        marginTop: '1rem'
    }

}

const Modal = ({
    context: {
        modalProduct: {title, price, img},
        modalOpen,
        closeModal
    }
}) => {
    
    if (!modalOpen) return null
    
    return (
        <div style={styles.container}>
            <div className="card">
                    <div className="card-content" style={styles.content}>
                        <h5> Item Added To Cart </h5>
                    </div>
                <div className="card-image">
                    <img src={img} alt=""/>
                </div>
                <div className="card-content" style={styles.content}>
                    <h5> {title} </h5>
                    <h5 className="grey-text"> {`Price: $${price}`} </h5>
                    <Link to="/" onClick={closeModal} className="btn orange mr-1" style={styles.button}>Store</Link>
                    <Link to="/cart" onClick={closeModal} className="btn blue" style={styles.button}>Cart</Link>
                </div>
            </div>
        </div>
    )
}

export default withProductConsumer(Modal)
