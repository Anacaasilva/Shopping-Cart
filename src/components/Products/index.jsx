import './Products.css';
/** @name Dependencies */
import React, { useEffect, useContext } from 'react';
/** @name Internal */
import { fetchProducts } from '../../api/fetchProducts';
import { ProductCard } from '../ProductCard';
import { Loading } from '../Loading';
import { AppContext } from '../../context/AppContext';

export const Products = () => {

	const { products, setProducts, loading, setLoading } = useContext(AppContext);

	useEffect(() => {
		fetchProducts('iphone').then((response) => {
			setProducts(response);
			setLoading(false);
		});
	}, []);

	return (
		(loading && <Loading />) || (
			<section className="products container">
				{console.log(products)}
				{products.map((product) => <ProductCard key={product.id} data={product} />)}
			</section>)
	);
};
