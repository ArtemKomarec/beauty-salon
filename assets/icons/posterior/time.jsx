export const Time = (props) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={52}
			height={52}
			fill="none"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			className="feather feather-clock"
			{...props}
		>
			<circle stroke="#f02846" cx={12} cy={12} r={10} />
			<path stroke="#f02846" d="M12 6v6l4 2" />
		</svg>
	);
};
