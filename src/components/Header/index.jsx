import './Header.css';
/** @name Dependencies */
import React from 'react';
/** @name Internal */
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
