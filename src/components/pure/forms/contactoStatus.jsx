import React from "react";
import PropTypes from "prop-types";
import { Contacto } from "../../models/contacto.class";

const ContactoStatus = ({ contacto }) => {
	return (
		<div>
			<h2>
				Nombre Completo: {contacto.nombre} {contacto.apellido}
			</h2>
			<h3>Email: {contacto.email}</h3>

			<h4 style={contacto.conectado ? { color: "green" } : { color: "red" }}>
				{contacto.conectado ? "En Línea" : "No Disponible"}
			</h4>
		</div>
	);
};

ContactoStatus.propTypes = {
	contacto: PropTypes.instanceOf(Contacto),
};

export default ContactoStatus;
