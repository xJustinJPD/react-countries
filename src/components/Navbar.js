import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";

// Components
import CountryCard from "../components/CountryCard";
import { Card, Row, Button, Dropdown, DropdownItem, DropdownButton } from "react-bootstrap";

const Navbar = (props) => {

    let navigate = useNavigate();

    const handleInputChange = (e) => {
        navigate('/');
        props.onHandleChange(e)
    }

    return(
        <div className='my-4'>
            <Row>
                <div className='d-flex'>        
                    <Link to='/' className='text-decoration-none' style={{ color: '#000000'}}><h1>Countries</h1></Link>
                </div>
            </Row>
            <Row>
                <div className='d-flex justify-content-center'>
                    <p className='mx-1'><b>Search:</b></p>
                    <input type="text" value={props.searchTerm} onChange={handleInputChange} style={{ height:"65%"}}/>
                </div>
            </Row>
        </div>

    )
}

export default Navbar;