import { useState, useEffect } from "react";
import axios from "axios";

// Components
import CountryCard from "../components/CountryCard";
import { Card, Row, Button, Dropdown, DropdownItem, DropdownButton } from "react-bootstrap";

const Home = (props) => {
    const [countriesList, setCountriesList ] = useState([])
    const [filteredCountriesList, setFilteredCountriesList ] = useState([])

    useEffect(()=> {
        if(props.searchTerm<=2){
            setFilteredCountriesList(countriesList)
        }
        else{
            let filter = countriesList.filter((country)=>{
                return country.name.common.toLowerCase().includes(props.searchTerm)
            })
            setFilteredCountriesList(filter)
        }
    },[countriesList, props.searchTerm])

    useEffect(()=> {
        axios.get('https://restcountries.com/v3.1/all')
        .then(response => {
            setCountriesList(response.data);
            setFilteredCountriesList(response.data)
        })
        .catch(error => {
            console.error(error)
        })
    },[])

    let countryCards = filteredCountriesList.map((country, i) => {
        return <CountryCard key={i} flag={country.flags.png} name={country.name.common} region={country.region}/>
    })

    return(
        <>
        <Row className="g-4" md={3} xs={1}>
            {countryCards}
        </Row>
        </>
    )
}

export default Home;