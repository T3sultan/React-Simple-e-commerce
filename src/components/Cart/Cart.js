import React from 'react';
import './Cart.css'
const Cart = (props) => {
    // console.log(props)
    const { cart } = props || {};

    const sumReducer = (previousValue, currentValue) => {
        return previousValue + currentValue.price
    }
    const total = cart.reduce(sumReducer, 0).toFixed(2);
    const tax = (0.1 * total).toFixed(2)
    const totalPrice=parseInt(total+tax).toFixed(2)

    return (
        <div>
            <h3><i class="fas fa-shopping-cart"></i>
                {cart.length}

            </h3>
            <p>{total}</p>
            <p>{tax}</p>
            <h5>Total Price :{totalPrice}</h5>
            <ul>
                {
                    cart.map(product => <li>{product.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Cart;