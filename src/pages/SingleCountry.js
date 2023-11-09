import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

// Components
import { Row, Col, Spinner, Image, Card } from 'react-bootstrap';
import WeatherCard from "../components/Weather";
import BorderingCard from "../components/BorderingComponent";

const Country = () => {
    let { name } = useParams()

    const [country, setCountry] = useState(null)
    const [borderingList, setBorderingList ] = useState([])

    useEffect(() => {
        axios.get(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
        .then(response => {
            setCountry(response.data[0])
            console.log(response.data[0])

        })
        .catch(error => {
            console.error(error)
        })
    }, [name])


    useEffect(() => {

        if(country){
            axios.get(`https://restcountries.com/v3.1/alpha?codes=${country.borders}`)
            .then(borderResponse => {
                setBorderingList(borderResponse.data)
    
            })
            .catch(error => {
                console.error(error)
            })
        }
    }, [country])


    let borderCards = borderingList.map((country, i) => {
        return <BorderingCard key={i} flag={country.flags.png} name={country.name.common} region={country.region}/>
    })



    if(!country){
        return <Spinner animation='grow'/>;
    }

    return(
        <>
        <Row className="mt-5">
            <Col>
                <Image src={country.flags.png}/>
            </Col>
            <Col>
                <Card>
                <Card.Body>
                    <Card.Title><h2>{country.name.common}</h2></Card.Title>
                    <p><b>Officialy:</b> {country.name.official}</p>
                    <p><b>Currency:</b> {Object.values(country.currencies)[0].name}</p>
                    <p><b>Region:</b> {country.name.region}</p>
                </Card.Body>
            </Card>
            </Col>
            <Col>
                <WeatherCard name={name}/>
            </Col>
        </Row>
        <br/>
        <div className="d-flex justify-content-center mt-5 mb-2">
        <h3>Neighbouring Countries:</h3>
        </div>
        <Row className="g-4" md={3} xs={1}>
            {borderCards}
        </Row>
        </>
        
    )

}

export default Country;