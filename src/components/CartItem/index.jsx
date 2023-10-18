import './CartItem.css';

import React from 'react';
import propTypes from 'prop-types';
import { BsCartX } from 'react-icons/bs';

import { formatCurrency } from '../../utils/formatCurrency';

export const CartItem = ({ data }) => {

	const { thumbnail, title, price } = data;

	return (
		<section className="cartItem">
			<img
				src={thumbnail}
				alt=""
				className="cartItemImg"
			/>

			<div className="cartItemContent">
				<h3 className="cartItemTitle">{title}</h3>
				<h3 className="cartItemPrice">{formatCurrency(price, 'BRL')}</h3>
				<button
					type="button"
					className="buttonRemoveItem"
				>
					<BsCartX />
				</button>
			</div>
		</section>
	);
};

CartItem.propTypes = {
	data: propTypes.object
}.isRequired;
