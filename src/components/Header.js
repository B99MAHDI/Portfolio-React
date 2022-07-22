//Personal Information
//Values - Soft Skills -
//Personal Goals and History
//Accomplishments and Job History - Experiences professionnelles -
//Skills and Attributes
//Education and Training as well as Testimonials and Recommendations - Formation Academique - 

import React from 'react'

const Header = () => {
	return (

		<div className="navBar">
			<ul id="nav" className="nav">
				<li><a href="#introsection" title="Introduction">Introduction</a></li>
				<li><a href="#infosection" title="Personal Information">Info Personnelles</a></li>
				<li><a href="#educationsection" title="My Education cursus">Education</a></li>
				<li><a href="#softskillsection" title="My Soft Skills">Soft Skills</a></li>
				<li><a href="#skillsection" title="My Skills">Compétences</a></li>
				<li><a href="#accomplishments" title="My Experiences">Experiences Prof</a></li>
				<li><a href="#projectssection" title="My Projects">Projets</a></li>
				{/* <li><a href="#goalsection" title="My Goals">Goals</a></li> */}
			</ul>
		</div>
	)
}

export default Header



