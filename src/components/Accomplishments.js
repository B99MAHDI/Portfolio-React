
const Accomplishments = () => {
	return (
		<section id="accomplishments" className="accomplishments">
			<div className="title">
			<u><h1>Experiences Professionnelles</h1></u>
			</div>
			<section className="projects-box">

				<div className="projects-item">
					<div className="project-header">
						<img src="images/projects-image.jpg" alt="project" width="100%"/>
					</div>
					<div className="project-content">
						<div className="project-title">
							Projet de fin d'étude
						</div><br />
						<div className="project-desc">
							<p>Nom de l'entreprise : Capgemini Engineering</p><br />
							<p>Dates d'emploi : Février. 2022 - juil. 2021</p><br />
							<p>Durée d'emploi : 5 mois</p><br />
							<p>Lieu : Casablanca, Maroc</p><br />
							<p>Sujet : Conception et réalisation d'une plateforme d'E-learning, de passation de projet et de montée en compétences :</p><br />
							<p>- Passation de projets.</p><br />
							<p>- Gestion des Utilisateurs - Formations.</p><br />
							<p>- Impression des factures.</p><br />
							<p>Outils : MongoDB (Mongoose), ExpressJS, Angular, NodeJS.</p><br />
						</div>
						<div className="three-points">...</div>
					</div>
					<div className="project-footer">
						<div className="date">
							<small>Modifié : 5 juil 2022</small>
						</div>
						<button type="button" className="learn-more-button">Plus d'info</button>
					</div>
				</div>

				<div className="projects-item">
					<div className="project-header">
						<img src="images/projects-image.jpg" alt="project" width="100%"/>
					</div>
					<div className="project-content">
						<div className="project-title">
							Stage technique
						</div><br />
						<div className="project-desc">
							<p>Nom de l'entreprise : ETS ORDIGLOBE SARL AU</p><br />
							<p>Dates d'emploi : juil. 2021 - sept. 2021</p><br />
							<p>Durée d'emploi : 2 mois</p><br />
							<p>Lieu : Tiflet, Maroc</p><br />
							<p>Sujet : Conception et réalisation d'une application de gestion de Stocke :</p><br />
							<p>- Gestion de Stocke.</p><br />
							<p>- Gestion des Clients - Fournisseurs.</p><br />
							<p>- Impression des factures.</p><br />
							<p>Outils : Html, Css (Bootstrap), Javascript (Ajax - JQuery) - PHP (Laravel).</p><br />
						</div>
						<div className="three-points">...</div>
					</div>
					<div className="project-footer">
						<div className="date">
							<small>Modifié : 2 Dec 2021</small>
						</div>
						<button type="button" className="learn-more-button">Plus d'info</button>
					</div>
				</div>

				<div className="projects-item">
					<div className="project-header">
						<img src="images/projects-image.jpg" alt="project" width="100%"/>
					</div>
					<div className="project-content">
						<div className="project-title">
							Stage d'initiation
						</div><br />
						<div className="project-desc">
							<p>Nom de l'entreprise : Best Plus Services.</p><br />
							<p>Dates d'emploi : sept. 2020.</p><br />
							<p>Durée d'emploi : 1 mois.</p><br />
							<p>Lieu : Casablanca.</p><br />
							<p>Sujet : Conception et réalisation d'une application de gestion des achats, (Bootstrap - Flask).</p><br />
						</div>
						<div className="three-points">...</div>
					</div>
					<div className="project-footer">
						<div className="date">
							<small>Modifié : 2 Dec 2021</small>
						</div>
						<button type="button" className="learn-more-button">Plus d'info</button>
					</div>
				</div>
			</section> 
		</section>
	)
}

export default Accomplishments