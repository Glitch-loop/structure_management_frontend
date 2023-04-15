import React, { useRef } from 'react';
import useClickOutside from "../hooks/useClickOutside";
import { Field } from 'formik'; 
import {GrMailOption} from "react-icons/gr";
import {RxLockClosed} from "react-icons/rx";
import "../styles/login.css";

const Input = ({type, name, placeholder, value, id, error}) => {
	const ref = useRef(null);
	const activeAnimation = (err) =>{
		const component = ref.current;
		err? component.className = "input-background-active-error" : component.className = "input-background-active";
	}
	const disableAnimation = () => ref.current.className = "input-background";
	
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
		<>
			<div className={error? "input-background-error" : "input-background"} onClick={() => activeAnimation(error)} ref={ref}>
				{Icon}
				<Field
					id={id}
					type={type}
					name={name}
					placeholder={placeholder}
					value={value}
					className="input"
				/>
			</div>
			<p className="error">{error}</p>
		</>
	);
}

export default Input;