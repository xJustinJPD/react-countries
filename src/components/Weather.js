import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";

// Components
import CountryCard from "../components/CountryCard";
import { Card, Row, Button, Dropdown, DropdownItem, DropdownButton } from "react-bootstrap";



const WeatherCard = (props) => {

    let WEATHER_KEY = 'acb4f81c5ce94c50bf5104347230211'

    const [weather, setWeather] = useState('Loading...')
    const [condition, setCondition] = useState('Loading...')

    useEffect(()=> {
        axios.get(`http://api.weatherapi.com/v1/current.json?key=${WEATHER_KEY}&q=${props.name}&aqi=no`)
        .then(response => {
            setWeather(response.data.current)
            setCondition(response.data.current.condition.text)
        })
        .catch(error => {
            error.name(error)
        })
    },[])

    return(
        <>     
            <Card>
                <Card.Body>
                    <Card.Title><b>Current Temp:</b> {weather.temp_c} degrees celcius</Card.Title>
                    <Card.Title><b>Current Condition:</b> {condition} degrees celcius</Card.Title>
                </Card.Body>
            </Card>
            
            
        </>

    )
}

export default WeatherCard;