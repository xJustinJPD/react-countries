import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from "react";

// Pages
import Home from './pages/Home';
import SingleCountry from './pages/SingleCountry';

// Components
import Navbar from './components/Navbar'

const App = () => {
    const [term, setTerm] = useState("");

    const onHandleChange = (e) => {
        setTerm(e.target.value)
    }

    return(
        <Router>
            <Container>
                <Row>
                    <Col>
                        <Navbar mb={5} onHandleChange={onHandleChange} searchTerm={term}/>
                        <Routes>
                            <Route path='/' element={<Home searchTerm={term}/>}/>
                            <Route path='/country/:name' element={<SingleCountry/>}/>
                        </Routes>
                    </Col>
                </Row>
            </Container>
        </Router>
    );
}

export default App;