import React, { useState, useEffect } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    //cart pass the data
    const [cart, setCart] = useState([]);

    const handleBtutton = (product) => {
        const newCart = [...cart, product];
        console.log(newCart)
        setCart(newCart);


    }

    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => setProducts(data));

    }, [])
    return (
        <div>
            <div className="row">
                <div className="col-md-9">
                    {/* this is product load step */}
                    <div className=" row">
                        {
                            products.map(product => <Product
                                key={product.key}
                                product={product}
                                handleBtutton={handleBtutton}

                            >

                            </Product>)
                        }

                    </div>

                </div>
                <div className="col-md-3">
                    {/* this is cart component */}
                    <Cart
                        cart={cart}
                    />
                </div>

            </div>
        </div>
    );
};

export default Shop;