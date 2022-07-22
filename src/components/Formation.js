
import React from 'react'

const Formation = () => {
	return (
		<section id="educationsection" className="educationsection">
			<div className="title">
				<u><h1>Ma Formation</h1></u>
			</div>
			<section className="education">
				<div className="educationBox">
					<div className="educationHeader">
						<img src="images/education-icon.jpg" alt="education" />
						<div className='date-container'>
							<div className="date">
								2019 - 2022
							</div>
						</div>
					</div>
					<div className="educationContent">
						<div className="vertical-line">
							<div className="verticaLine"></div>
						</div>
						<div className="content">
							<div className="educationtitle">
								École nationale supérieure d'électricité et mécanique - Casablanca<br/>
							</div>
							<div className="educationdesc">
								Diplome d'ingénieur.
								Domaine d'étude : Génie Informatique.
							</div>
						</div>            
					</div>
				</div>
				
				<div className="educationBox">
					<div className="educationHeader">
						<img src="images/education-icon.jpg" alt="education" />
						<div className='date-container'>
							<div className="date">
								2017 - 2019
							</div>
						</div>
					</div>
					<div className="educationContent">
						<div className="vertical-line">
							<div className="verticaLine"></div>
						</div>
						<div className="content">
							<div className="educationtitle">
								Centre des Classes Préparatoires Salmane Al Farissi
							</div>
							<div className="educationdesc">
								Domaine d'étude : MP
							</div>
						</div>            
					</div>
				</div>
				
				<div className="educationBox">
					<div className="educationHeader">
						<img src="images/education-icon.jpg" alt="education" />
						<div className='date-container'>
							<div className='date'>
								2016 - 2017
							</div>
						</div>
					</div>
					<div className="educationContent">
						<div className="vertical-line">
							<div className="verticaLine"></div>
						</div>
						<div className="content">
							<div className="educationtitle">
								Lycée Oued Eddahab
							</div>
							<div className="educationdesc">
								Baccalauréat scientifique.
								Branche : Science Math A.
								Résultat : Bien.
							</div>
						</div>                
					</div>
				</div>
			</section>
			<br />
		</section>
	)
}

export default Formation