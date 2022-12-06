import * as React from "react";

export const FacebookSizedIcon = (props) => (
	<svg
		className="t-sociallinks__svg"
		xmlns="http://www.w3.org/2000/svg"
		width={48}
		height={48}
		xmlSpace="preserve"
		{...props}
	>
		<path
			style={{
				fill: "#103038",
			}}
			d="M47.761 24c0 13.121-10.638 23.76-23.758 23.76C10.877 47.76.239 37.121.239 24 .239 10.876 10.877.24 24.003.24 37.123.24 47.761 10.876 47.761 24M20.033 38.85H26.2V24.01h4.163l.539-5.242H26.2v-3.083c0-1.156.769-1.427 1.308-1.427h3.318v-5.09l-4.568-.018c-5.072 0-6.225 3.796-6.225 6.224v3.394H17.1v5.242h2.933v14.84z"
		/>
	</svg>
);
