import { faToiletPaper } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total,product)=> total + product.price,0);
    
    //You can use For loop or reduce function
    // let total = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const product = cart[i];
    //     total = total+product.price;
    // }

    let shipping = 0;
    if(total > 35){
        shipping = 0;
    }else if(total > 15){
        shipping = 4.99;
    }
    else if(total > 10){
        shipping = 12.99;
    }
    const tax = total /10

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return precision;
    }
    const grandtotal = total+shipping+tax;
    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Items Ordered: {cart.length}</h5>
            <p>Product Price : {formatNumber(total)}</p>
            <p><small>Shipping : {formatNumber(shipping)} </small></p>
            <p><small>Tax+VAT : {formatNumber(tax)}</small></p>
            <p className="grandtotal">Total Price : {formatNumber(grandtotal)}</p>
        </div>
    );
};

export default Cart;