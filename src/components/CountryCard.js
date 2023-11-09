import { Link } from 'react-router-dom'
import { Card, CardBody } from "react-bootstrap";

const CountryCard = (props) => {
    return (

        <div className="col-md-4 col-lg-3 col-sm-4 mb-3">
        <Link to={`/country/${props.name}`} className='text-decoration-none'>
            <div className="card border-0.5">  <img src={props.flag} className="rounded-top" width="" height="175"/>
                <div className="card-body d-flex justify-content-center">
                        <h5 className="card-title">{props.name}</h5>
                </div>
            </div>
            </Link>
        </div>
    )
}

export default CountryCard;