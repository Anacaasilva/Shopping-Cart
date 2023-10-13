import './CartButton.css';

import React from 'react';
import { CgShoppingCart } from 'react-icons/cg';

export const CartButton = () => {
	return (
		<button
			type="button"
			className="cartButton"
		>
			<CgShoppingCart />
			<span className="cartStatus">1</span>
		</button>
	);
};
