import React, { useState } from 'react';
import propTypes from 'prop-types';

import { AppContext } from './AppContext';

export const Provider = ({ children }) => {

	const [loading, setLoading] = useState(true);
	const [products, setProducts] = useState([]);

	const value = {
		products,
		setProducts,
		loading, 
		setLoading,
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
