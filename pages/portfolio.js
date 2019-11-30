import React from 'react';
import BaseLayout from '../components/layout/BaseLayout';
// import { withRouter } from 'next/router'
import Axios from 'axios';
import BasePage from '../components/BasePage';

function Portfolio(props){
    const { portfolio } = props;
    return(
        <BaseLayout>
            <BasePage className="portfolio" title="portfolio">
                <h1>I am from portfolio without s</h1>
                <h3>id: {portfolio.id}</h3>
                <h3>title: {portfolio.title}</h3>
                <h3>body: {portfolio.body}</h3>
            </BasePage>
            
            {/* <h3>get:{postId.id}</h3> */}
        </BaseLayout>
    )
}
Portfolio.getInitialProps = async({query})=>{
    let portfolio={};
    try{
        const response = await Axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}`);
        portfolio = response.data;
    }
    catch(err){
        console.log(err);
    }
    return{portfolio}
}
export default Portfolio;