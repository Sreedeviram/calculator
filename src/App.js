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
        </Row>
      </Container>
    </div>
  );
}

export default App;
