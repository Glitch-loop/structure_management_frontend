import React from 'react';
import "../styles/login.css";

const Button = ({text, icon}) => {
	return (
		<>
			{icon ? (
				<>
				
				</>
				):(
				<>
					<button className="button" type="submit">{text}</button>
				</>
				)}
		</>
	);
}

export default Button;