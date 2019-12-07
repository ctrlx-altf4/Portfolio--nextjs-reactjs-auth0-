import React from 'react';
import BaseLayout from '../components/layout/BaseLayout';
import BasePage from '../components/BasePage'

function Callback(){
    console.log("I am in");
	return(
		<BaseLayout>
			<BasePage>
				Verifying login detail;
			</BasePage>
		</BaseLayout>
		)
}

export default Callback;