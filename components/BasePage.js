import { Container } from "reactstrap"

const BasePage =(props) =>{
    const { className, title } = props;

    return(
        <div className={`base-page ${className}`}>
            <Container>
                <div className="page-header">
                    <h1 className="page-header-title">{title}</h1>
                </div>
                {props.children}
            </Container>
        </div>
    )
}
export default BasePage;