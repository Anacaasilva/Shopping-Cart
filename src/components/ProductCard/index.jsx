import './ProductCard.css';

import React from 'react';
import { BsCartPlus } from 'react-icons/bs';

export const ProductCard = () => {
	return (
		<section className="productCard">
			<img
				src="https://http2.mlstatic.com/D_916682-MLA47782359266_102021-W.jpg"
				alt="product"
				className="cardImg"
			/>

			<div className="cardInfos">
				<h2 className="cardPrice">R$200,00</h2>
				<h2 className="cardTitle">Iphonee</h2>
			</div>

			<button
				type="button"
				className="buttonAddCart"
			>
				<BsCartPlus />
			</button>
		</section>
	);
};
