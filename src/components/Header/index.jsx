import './Header.css';

import React from 'react';

import { SearchBar } from '../SearchBar';
import { CartButton } from '../CartButton';

export const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<SearchBar />
				<CartButton />
			</div>
		</header>
	);
};
