import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Products.css'

const Products = (props) => {
    //console.log(props);
    const {name,img,seller,price,stock} = props.product;
    return (
        <div className="product">
            <div className="product-img">
                <img src={img} alt=""/>
            </div>
            <div className="product-info">
                <h3>{name}</h3>
                <p><small>By : {seller} </small></p>
                <h5>${price}</h5>
                <p><small>Only {stock} left in stock - order soon</small></p>
                <button className="product-btn" onClick={()=>{props.handleAddProduct(props.product)}}> 
                    <FontAwesomeIcon icon={faShoppingCart}/>Add to cart
                </button>
            </div>
        </div>
    );
};

export default Products;