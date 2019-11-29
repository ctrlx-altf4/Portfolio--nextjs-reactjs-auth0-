import React from 'react';
import BaseLayout from '../components/layout/BaseLayout'
import BasePage from '../components/BasePage';

function About(){

	return(
		<BaseLayout>
			<BasePage className="about">
				<div className="me">styleing</div>I am from about.js
			</BasePage>
		</BaseLayout>
		);
}

export default About;