import './CartButton.css';
/** @name Dependencies */
import React, { useContext } from 'react';
import { CgShoppingCart } from 'react-icons/cg';
/** @name External */
import { AppContext } from '../../context/AppContext';

export const CartButton = () => {

	const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext);

	return (
		<button
			type="button"
			className="cartButton"
			onClick={() => setIsCartVisible(!isCartVisible) }
		>
			<CgShoppingCart />
			{cartItems.length > 0 && <span className="cartStatus">{cartItems.length}</span>}
		</button>
	);
};
