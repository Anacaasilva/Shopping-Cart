import './Products.css';
/** @name Dependencies */
import React, { useEffect, useContext } from 'react';
/** @name External */
import { fetchProducts } from '../../api/fetchProducts';
import { AppContext } from '../../context/AppContext';
/** @name Internal */
import { ProductCard } from '../ProductCard';
import { Loading } from '../Loading';

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
