import React, { useRef } from 'react';
import useClickOutside from "../hooks/useClickOutside";
import {GrMailOption} from "react-icons/gr";
import {RxLockClosed} from "react-icons/rx";
import "../styles/login.css";

const Input = ({type, name, placeholder, value, id}) => {
	const ref = useRef(null);
	const activeAnimation = () => ref.current.style["border-bottom"] = "10px solid #7E55F3";
	const disableAnimation = () => ref.current.style = "button";
	
	useClickOutside(ref, disableAnimation);

	const getIcon = (name) => {
		switch(name){
			case "mail":
				return <GrMailOption className="icon"/>;
			case "password":
				return <RxLockClosed className="icon"/>;
			default:
				return <GrMailOption className="icon"/>;
		}
	}

	const Icon = getIcon(name);

	return(
		<div className="input-background" onClick={activeAnimation} ref={ref}>
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