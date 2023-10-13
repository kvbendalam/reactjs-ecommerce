import React from 'react';
import Banner from './Banner';
import ProductCard from './ProductCard';
import productsData from '../productsList';

function Home() {
    return (
        <div>
            <Banner />
            <ProductCard products={productsData} />
        </div>
    );
}

export default Home;
