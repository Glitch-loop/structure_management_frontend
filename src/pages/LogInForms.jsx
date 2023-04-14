import React from 'react';
import Input from "../components/Input"
import Button from '../components/Button';
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
				<div className="text-container">
					<p className="form-text-title">Inicia <span>Sesión</span></p>
					<p className="form-text">¡Bienvenido de nuevo!</p>
					<p className="form-text">Inicia seción para empezar</p>
				</div>

				<Formik
					initialValues={{
						mail: "",
						password: ""
					}}
					onSubmit={(values) => {
						console.log(values);
					}}
					className="formik"
				>
					<>
						<div style={{marginTop: 50, marginBottom: 50, position: "absolute", top: "25vh"}}>
							<Input 
								id="mail"
								name="mail"
								type="text"
								placeholder="Email"
							/>
						</div>
						<div style={{marginTop: 50, marginBottom: 50, position: "absolute", top: "35vh"}}>
							<Input 
								id="password"
								name="password"
								type="text"
								placeholder="Contraseña"
							/>
						</div>
						<div className="formik-button">
							<Button text="Iniciar"/>
						</div>
					</>
				</Formik>
			</div>
		</div>
	);
}

export default LogInForms;