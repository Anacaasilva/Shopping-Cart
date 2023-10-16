import './ProductCard.css';

import React from 'react';
import propTypes from 'prop-types';
import { BsCartPlus } from 'react-icons/bs';
import { formatCurrency } from '../../utils/formatCurrency';

export const ProductCard = ({ data }) => {

	const { title, thumbnail, price } = data;
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
			>
				<BsCartPlus />
			</button>
		</section>
	);
};

ProductCard.propTypes = {
	data: propTypes.shape({}),
}.isRequired;
