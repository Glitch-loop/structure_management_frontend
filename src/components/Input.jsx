import React from 'react';
import { useRef } from 'react';
import {GrMailOption} from "react-icons/gr";
import {RxLockClosed} from "react-icons/rx";
import "../styles/login.css";

const Input = ({type, name, placeholder, value, id}) => {
	const ref = useRef(null);

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

	const activeInputAnimation = () => {
		ref.current.click();
		console.log(ref)
	}

	const Icon = getIcon(name);

	return(
		<div className="input-background" onClick={activeInputAnimation} ref={ref}>
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