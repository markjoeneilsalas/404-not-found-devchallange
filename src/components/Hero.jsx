import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import scarecrow from '../assets/scarecrow.png';


const Hero = () => {
  return (
     <Container>
      <Row>
        <Col>
            <img className='scarecrow' src={scarecrow} style={{ width: '539.22px', height: '447.43px' }}/>
        </Col>
        <Col>
            <h1 className='text-center'>I have bad news for you</h1>
            <p className='pt-0'>The page you are looking for might be removed or is temporarily unavailable</p>
            <button className='rounder-5 bg-dark text-light'>Back to homepage</button>
        </Col>
      </Row>
    </Container>
  )
}

export default Hero