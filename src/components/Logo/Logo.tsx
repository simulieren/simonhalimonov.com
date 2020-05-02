import React from "react";

const SvgComponent = props => (
	<svg width={40} height={40} viewBox="0 0 40 40" fill="none" {...props}>
		<path
			d="M40 0v13.6L26.4 0H40zM0 0h9.6v11.2a4 4 0 004 4H32a8 8 0 018 8V40h-9.6V28.8a4 4 0 00-4-4H8a8 8 0 01-8-8V0zM0 26.4V40h13.6L0 26.4z"
			fill="#000"
		/>
	</svg>
);

export default SvgComponent;
