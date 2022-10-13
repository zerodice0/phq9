import React from 'react';
import { CardInterface, footerMenus } from './card.model';
import "./card.scss"

export const Card = ({label, pointClickCallback}: CardInterface) => {
	return (
		<article className="Card">
			<header>지난 2주 동안에...</header>
			<section>
				{label}
			</section>
			<footer>
				{
					footerMenus.map(
						({point, label}, index) => 
							<div key={index} onClick={() => pointClickCallback(point)}>
								{label}
							</div>		
					)
				}
			</footer>
		</article>
	);
};
