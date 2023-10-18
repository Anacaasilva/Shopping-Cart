import './Cart.css';

import React, { useContext } from 'react';

import { CartItem } from '../CartItem';
import { AppContext } from '../../context/AppContext';
import { formatCurrency } from '../../utils/formatCurrency';

export const Cart = () => {

	const {cartItems} = useContext(AppContext);

	const totalPrice = cartItems.reduce((acc, item) => item.price + acc, 0);

	return (
		<section className="cart">
			<div className="cartItems">
				{cartItems.map((cartItem) => <CartItem key={cartItem.id} data={cartItem} /> )}
			</div>

			<div className="cartResume">{formatCurrency(totalPrice, 'BRL')}</div>
		</section>
	);
};
