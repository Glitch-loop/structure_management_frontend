import React from 'react';
import Input from "../components/Input"
import Button from '../components/Button';
import * as Yup from "yup";
import {Formik, Form} from "formik";
import "../styles/login.css";

const LogInForms = () => {
	const loginSchema = Yup.object().shape({
		mail: Yup.
			string().
			email("Email no Válido").
			nonNullable().
			required("Este Campo es Obligatorio"),
		password: Yup.
			string().
			required("Este Campo es Obligatorio").
			nonNullable().
			max(300, "Texto Ingresado Demasiado Largo")
	});

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
					onSubmit={(values, {resetForm}) => {
						console.log("XD", values);
						resetForm();
					}}
					className="formik"
					validationSchema={loginSchema}
				>
					{({handleSubmit, values, errors, touched}) => {
						return(
							<Form onSubmit={handleSubmit}>
								<div style={{marginTop: 50, marginBottom: 50, position: "absolute", top: "30vh"}}>
									<Input 
										id="mail"
										name="mail"
										type="mail"
										value={values.mail}
										placeholder="Email"
										error={errors.mail && touched.mail? errors.mail : null}
									/>
								</div>
								<div style={{marginTop: 50, marginBottom: 50, position: "absolute", top: "45vh"}}>
									<Input 
										id="password"
										name="password"
										type="password"
										value={values.password}
										placeholder="Contraseña"
										error={errors.password && touched.password? errors.password : null}
									/>
								</div>
								<div className="formik-button">
									<Button text="Iniciar"/>
								</div>
							</Form>
						);	
					}}
				</Formik>
			</div>
		</div>
	);
}

export default LogInForms;