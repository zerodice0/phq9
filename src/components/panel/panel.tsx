import "./panel.scss";

export const Panel = ({label, color}: {label: string, color?: string}) => {
	return <div className={color === "warning" ? "Panel Warning": "Panel"}>
			<span>{label}</span>
		</div>
}