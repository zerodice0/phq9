import { ReactNode } from "react";
import "./panel.scss";

export const Panel = (
	{color, children}
	: {color?: string, children: ReactNode}
) => {
	return (
		<div className={color === "warning" ? "Panel Warning": "Panel"}>
			{children}
		</div>
	);
}