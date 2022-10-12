import React from 'react';
import { CardInterface, footerMenus } from './card.model';
import "./card.scss"

export const Card = ({label, pointClickCallback}: CardInterface) => {
	

	return (
		<article className="Card">
			<header>우울증 선별도구 PHQ-9</header>
			<section>
				지난 2주 동안에...
				<br/>
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
