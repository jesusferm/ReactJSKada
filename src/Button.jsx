// Dependencies
import React from 'react';

export const Button = (props) => (
	<a href={props.url} className={props.class}>
		{props.content}
	</a>
);

export default Button;
