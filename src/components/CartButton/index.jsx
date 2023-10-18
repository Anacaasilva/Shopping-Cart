import './CartButton.css';

import React, { useContext } from 'react';
import { CgShoppingCart } from 'react-icons/cg';

import { AppContext } from '../../context/AppContext';

export const CartButton = () => {

	const { cartItems } = useContext(AppContext);

	return (
		<button
			type="button"
			className="cartButton"
		>
			<CgShoppingCart />
			{ cartItems.length > 0 && <span className="cartStatus">{cartItems.length}</span> }
		</button>
	);
};
