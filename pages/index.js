import BaseLayout from '../components/layout/BaseLayout';
import { Button,Container,Row, Col } from 'reactstrap';
import {useState} from 'react';
import Typed from 'react-typed';


const Index =(props) =>{

	const [ roles, setRoles ] = useState(["Developer", 
	"React.js", "Node.js", "Next.js", "Team Player", "Literature Lover"]);
	return(	
		<BaseLayout className="cover" headerType="index">
			<div className="main-section">
				<div className="background-image">
					<img src="/static/images/background-index.png" />
				</div>
				<Container>
				<Row>
					<Col md="6">
					<div className="hero-section">
						<div className={`flipper`}>
						<div className="back">
							<div className="hero-section-content">
							<h2> Full Stack Web Developer </h2>
							<div className="hero-section-content-intro">
								Have a look at my portfolio and job history.
							</div>
							</div>
							<img className="image" src="/static/images/section-1.png"/>
							<div className="shadow-custom">
							<div className="shadow-inner"> </div>
							</div>
						</div>
						</div>
					</div>
					</Col>
					<Col md="6" className="hero-welcome-wrapper">
					<div className="hero-welcome-text">
						<h1> Hello! <br/>
						 NAMASTE!!!
						Welcome to my e-portfolio<br/>
						I'm Prajwal Pradhan.<br/>
						</h1>
					</div>
					<Typed
						strings={roles}
						typeSpeed={70}
						backSpeed={70}
						backDelay={1000}
						loopCount={0}
						showCursor
						cursorChar="|"
						loop 
						className="typed"
					/>

					<div className="hero-welcome-bio">
						<h1>
						Let's take a look on my work.
						</h1>
					</div>
					</Col>
				</Row>
				</Container>
			</div>
		</BaseLayout>

		);
}

export default Index;