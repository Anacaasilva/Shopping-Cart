import './ProductCard.css';
/** @name Dependencies */
import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { BsCartPlus } from 'react-icons/bs';
/** @name External */
import { formatCurrency } from '../../utils/formatCurrency';
import { AppContext } from '../../context/AppContext';

export const ProductCard = ({ data }) => {

	const { title, thumbnail, price } = data;

	const { cartItems, setCartItems } = useContext(AppContext);

	const handleAddCart = () => setCartItems([...cartItems, data]);

	return (
		<section className="productCard">
			<img
				src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
				alt="product"
				className="cardImg"
			/>
			<div className="cardInfos">
				<h2 className="cardPrice">{formatCurrency(price, 'BRL')}</h2>
				<h2 className="cardTitle">{title}</h2>
			</div>

			<button
				type="button"
				className="buttonAddCart"
				onClick={handleAddCart}
			>
				<BsCartPlus />
			</button>
		</section>
	);
};

ProductCard.propTypes = {
	data: propTypes.shape({}),
}.isRequired;
