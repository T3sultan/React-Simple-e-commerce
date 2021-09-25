import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props.product);
    const { img, name, price, stock } = props.product || {};

    return (
        <div className='col-md-6'>
            <div className="card mb-3" style={{ 'max-width': '540px' }}>
                <div className="row g-0">
                    <div className="col-md-5">
                        <img src={img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <h5 className="card-title">
                                <small>{name}</small>
                            </h5>
                            <p className="card-text">
                                <small>${price}</small>
                            </p>
                            <p className="card-text">
                                <small>{stock}</small>
                            </p>
                            <button onClick={()=>props.handleBtutton(props.product)} className="btn btn-warning">Add Product</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;