import React, {useState, useEffect} from 'react';
import BaseLayout from '../components/layout/BaseLayout';
import { Link } from '../routes'
import axios from 'axios';
import BasePage from '../components/BasePage';

function Portfolios(props){
	let { posts } = props;
console.log(posts);
	let renderPosts=(posts)=>{
		return posts.map((post)=>{
			return(
				<li key={post.id}>
					<Link route={`portfolio/${post.id}`}>
						<a>{post.title}</a>
					</Link>
				</li>
			)
		})
	}

	return(
		<BaseLayout>
			<BasePage className="portfolios">
				I am portfolio;

					<ol>
						{renderPosts(posts)}
					</ol>
			</BasePage>
		</BaseLayout>
		)
}

Portfolios.getInitialProps=async()=>{
	console.log('get')
	let posts={};
	try{
		const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
		posts= res.data;
		console.log(posts);

	}
	catch(err){
		console.log(err);
	}
	return {posts: posts.splice(0,10)};
}


export default Portfolios;