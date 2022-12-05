import Header from './components/Header';
import './App.css';
import Calculator from './components/Calculator';
import { Col, Container, Row } from 'reactstrap';


function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Header/>
        </Row>
        <Row>
          <Col className='6'>
            <Calculator/>
          </Col>
          <Col className='6'>
            <img src='C:\Users\SreedeviRavindranadh\OneDrive\Documents\Dev\portfolioproject\calculator\src\app\assets\img\minions.jpg'/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
