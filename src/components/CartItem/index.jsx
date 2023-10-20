import './CartItem.css';
/** @name Dependencies */
import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { BsCartX } from 'react-icons/bs';
/** @name External */
import { formatCurrency } from '../../utils/formatCurrency';
import { AppContext } from '../../context/AppContext';

export const CartItem = ({ data }) => {

	const { cartItems, setCartItems } = useContext(AppContext);
	const { id, thumbnail, title, price } = data;

	const handleRemoveItem = () => {
		const updatedItems = cartItems.filter((item) => item.id != id);
		setCartItems(updatedItems);
	};

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
					onClick={handleRemoveItem}
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
