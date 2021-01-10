import React from 'react'
import { Link } from "react-router-dom";

const CardSummary = ({data}) => {
    console.log(data.value)
    return (
        <div className="card text-center">
            <Link to={'/imagedetail/' + data.key}>
            <div className="overflow">
                <img src={data.value.imageURL}  alt= 'triggered User examsecure' className="card-img-top"/>
            </div>
            </Link>
            <div className="card-body text-dark">
                <h3 className="card-title">{data.key}</h3>
                <p className="card-text text-secondary">
                {data.value.reason}
                </p>
                <a href="#" className="btn btn-outline-success">Verify</a>
                <a href="#" className="btn btn-outline-success disqualify">Disqualify</a>
            </div>
        </div>
    )
}

export default CardSummary
