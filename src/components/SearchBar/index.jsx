import './SearchBar.css';
/** @name Dependencies */
import React, { useState } from 'react';
/** @name External */
import { BsSearch } from 'react-icons/bs';

export const SearchBar = () => {
	const [searchValue, setSearchValue] = useState('');

	return (
		<form className="searchBar">
			<input
				type="search"
				value={searchValue}
				placeholder="Buscar pordutos"
				className="searchInput"
				onChange={({ target }) => setSearchValue(target.value)}
				required
			/>
			<button
				type="submit"
				className="searchButton"
			>
				<BsSearch />
			</button>
		</form>
	);
};
