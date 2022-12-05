import { Container, Row,  } from 'reactstrap';

const Header = () => {
    return(
        <Container> 
            <Row sticky='top' expand='md' className='row-content mx-auto'>
                <h1>CALCULATOR</h1>
            </Row>
        </Container>
    );
};

export default Header;