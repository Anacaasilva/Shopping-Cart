import React, { useState } from 'react';
import propTypes from 'prop-types';

import { AppContext } from './AppContext';

export const Provider = ({ children }) => {

	const [products, setProducts] = useState([]);
	const [cartItems, setCartItems] = useState([]);
	const [loading, setLoading] = useState(true);

	const value = {
		products,
		setProducts,
		loading, 
		setLoading,
		cartItems,
		setCartItems,
	};

	return (
		<AppContext.Provider value={value}>
			{children}
		</AppContext.Provider>
	);
};

Provider.propTypes = {
	children: propTypes.any,
}.isRequired;
