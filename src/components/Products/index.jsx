import './Products.css';
/** @name Dependencies */
import React, { useState, useEffect } from 'react';
/** @name Internal */
import { fetchProducts } from '../../api/fetchProducts';
import { ProductCard } from '../ProductCard';
import { Loading } from '../Loading';

export const Products = () => {

	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchProducts('iphones').then((response) => {
			setProducts(response);
			setLoading(false);
		});
	}, []);

	return (
		(loading && <Loading />) || (
			<section className="products container">
				{products.map(product => <ProductCard key={product.id} data={product} />)}
			</section>)
	);
};
