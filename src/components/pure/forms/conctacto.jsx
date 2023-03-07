import React from "react";
import { Contacto } from "../../models/contacto.class";
import ContactoStatus from "./contactoStatus";

const ConctactoComponent = () => {
	const contactoNuevo = new Contacto(
		"FRANCISCO",
		"IBARROLA",
		"fibarrola06@gmail.com",
		true
	);
	return (
		<div>
			<ContactoStatus contacto={contactoNuevo}></ContactoStatus>
		</div>
	);
};

export default ConctactoComponent;
