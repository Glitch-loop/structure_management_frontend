import React from 'react';
import {Link} from "react-router-dom";
import "../styles/login.css";

const Button = ({text, icon}) => {
	return (
		<>
			{icon ? (
				<>

				</>
				):(
				<>
					<Link 
						className="w-24 h-12 pt-[11px] text-center bg-d-prpl rounded-xl transition duration-700 ease-out delay-75 hover:-translate-y-2 hover:scale-110 hover:text-pink"
						type="submit"
						to="/main"
						>{text}
					</Link>
				</>
				)}
		</>
	);
}

export default Button;