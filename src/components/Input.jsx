import React from 'react';
import {GrMailOption} from "react-icons/gr";
import {RxLockClosed} from "react-icons/rx";
import "../styles/login.css";

const Input = (type, name, placeholder, value, id, icon) => {
	const getIcon = (name) => {
		switch(name){
			case "mail":
				return <GrMailOption className="icon"/>;
			case "password":
				return <RxLockClosed/>;
			default:
				return <GrMailOption className="icon"/>;
		}
	}

	const Icon = getIcon(icon);

	return(
		<div className="input-background">
				{Icon}
				<input
					id={id}
					type={type}
					name={name}
					placeholder={placeholder}
					value={value}
					className="input"
				/>
		</div>
	);
}

export default Input;