import './SearchBar.css';
/** @name Dependencies */
import React, { useState, useContext } from 'react';
/** @name External */
import { BsSearch } from 'react-icons/bs';
import { fetchProducts } from '../../api/fetchProducts';
import { AppContext } from '../../context/AppContext';

export const SearchBar = () => {

	const { setProducts, setLoading } = useContext(AppContext);
	const [searchValue, setSearchValue] = useState('');

	const handleSearch = (event) => {
		event.preventDefault();
		setLoading(true);

		fetchProducts(searchValue)
			.then(products => {
				setProducts(products);
				setLoading(false);
				setSearchValue('');
			});
	};

	return (
		<form className="searchBar" onSubmit={handleSearch}>
			<input
				type="search"
				value={searchValue}
				placeholder="Buscar produtos"
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
