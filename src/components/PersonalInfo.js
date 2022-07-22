
import React from 'react'

const PersonalInfo = () => {
	return (
		<section id="infosection" className="infosection">
			<div className="title">
				<u><h1>Informations Personnelles</h1></u>
			</div>
			<section className="contact-info">
				<div className="fullname">
					<div className="firstname-contact">
						<h3>Prenom : </h3>
						<p>El Mahdi</p>
					</div>
					<div className="vertical-line-info"></div>
					<div className="lastname-contact">
						<h3>Nom : </h3>
						<p>Bahou</p>
					</div>
				</div>
				<br />
				<div className="contacts">
					<div className="email-contact">
						<h3>Adresse E-Mail : </h3>
						<p>mhdibhou99@gmail.com</p>
					</div>
					<div className="vertical-line-info"></div>
					<div className="phone-contact">
						<h3>Numéro de télèphone : </h3>
						<p>0616663580</p>
					</div>
				</div>
			</section>
			<br />
		</section>
	)
}

export default PersonalInfo