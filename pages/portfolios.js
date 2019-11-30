import React, {useState, useEffect} from 'react';
import BaseLayout from '../components/layout/BaseLayout';
import { Link } from '../routes'
import axios from 'axios';
import BasePage from '../components/BasePage';
import {Col, Row, CardBody, Card, CardHeader, CardTitle,CardText} from 'reactstrap'

function Portfolios(props){
	let { posts } = props;
console.log(posts);
	let renderPosts=(posts)=>{
		return posts.map((post,index)=>{
			return(
				// <li key={post.id}>
				// 	<Link route={`portfolio/${post.id}`}>
				// 		<a>{post.title}</a>
				// 	</Link>
				// </li>
			<Col md="4">
				<React.Fragment key={index}>
					<span>
					<Card className="portfolio-card">
						<CardHeader className="portfolio-card-header">Some Position {index}</CardHeader>
						<CardBody>
						<p className="portfolio-card-city"> Some Location {index} </p>
						<CardTitle className="portfolio-card-title">Some Company {index}</CardTitle>
						<CardText className="portfolio-card-text">Some Description {index}</CardText>
						<div className="readMore"> </div>
						</CardBody>
					</Card>
					</span>
				</React.Fragment>
			</Col>

			)
		})
	}

	return(
		<BaseLayout>
			<BasePage className="portfolio-page" title={"Portfolios"}>
				<Row>
					{renderPosts(posts)}
				</Row>
			</BasePage>
		</BaseLayout>
		)
}

Portfolios.getInitialProps=async()=>{
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