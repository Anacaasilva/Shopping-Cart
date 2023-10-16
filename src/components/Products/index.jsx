import './Products.css';
/** @name Dependencies */
import React, { useState, useEffect } from 'react';
/** @name Internal */
import { fetchProducts } from '../../api/fetchProducts';
import { ProductCard } from '../ProductCard';

export const Products = () => {

	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetchProducts('iphones').then((response) => {
			setProducts(response);
		});
	}, []);

	return (
		<section className="products container">
			{products.map(product => <ProductCard key={product.id} data={product} />)}
		</section>
	);
};
