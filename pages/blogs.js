import React from 'react';
import BaseLayout from '../components/layout/BaseLayout';
import BasePage from '../components/BasePage'

function Blogs(){
	return(
		<BaseLayout>
			<BasePage className="blogs" title="blogs">
				I am from blog;
			</BasePage>
		</BaseLayout>
		)
}

export default Blogs;