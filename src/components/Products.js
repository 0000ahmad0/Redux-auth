import React, { useEffect } from 'react';
import { fetchProducts } from '../actions/productActions';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Posts.css';

const Products = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error, products } = useSelector(state => state.products || {});

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const handleGoToPosts = () => {
        navigate('/Posts'); // Navigate to Card.js page
    };

    console.log("products :: ", products)
    return (
        <div className="container">
            <h1 className="title">Products</h1>
            <button onClick={handleGoToPosts} className='card-btn'>Go to Posts </button>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <div className="posts-grid">
                {products?.products?.length > 0 ? (
                    products.products.map((product, index) => (
                        <div key={index} className="post-card">
                            <img src={product.thumbnail} alt="prduct image" />
                            <h3 className="post-title">{product.title}</h3>
                        </div>
                    ))
                ) : (
                    !loading && <p>No product available</p>
                )}
            </div>
        </div>
    );
};

export default Products;
