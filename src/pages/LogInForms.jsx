import React from 'react';
import Input from "../components/Input"
import * as Yup from "yup";
import {Formik} from "formik";
import "../styles/login.css";

const LogInForms = () => {
	return(
		<div className="frame">
			<div className="animation">
				Animation
			</div>
			<div className="form-container">
				<p className="form-text-title">Inicia <span>Sesión</span></p>
				<p className="form-text">¡Bienvenido de nuevo!</p>
				<p className="form-text">Inicia seción para empezar</p>

				<Formik
					initialValues={{
						email: "",
						password: ""
					}}
					onSubmit={(values) => {
						console.log(values);
					}}
				>
					<Input/>
				</Formik>
			</div>
		</div>
	);
}

export default LogInForms;