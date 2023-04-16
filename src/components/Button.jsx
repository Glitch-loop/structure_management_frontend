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
					<button 
						className="w-24 h-12 bg-d-prpl rounded-xl transition duration-700 ease-out delay-75 hover:-translate-y-2 hover:scale-110 hover:text-pink" 
						type="submit"
						>{text}
					</button>
				</>
				)}
		</>
	);
}

export default Button;