import React from 'react'
import { Link } from "react-router-dom";

const CardSummary = (props) => {
    //console.log(props)
    const imageArray = []
    Object.keys(props.data).forEach(image => {
        imageArray.push(props.data[image])
    })
    //console.log(imageArray)
    return (
        <div className="card text-center">
            <Link to={'/imagedetail/' + props.testnumber+ '/' + props.name}>
            <div className="overflow">
                <img src={imageArray[0].imageURL}  alt= 'triggered User examsecure' className="card-img-top"/>
            </div>
            </Link>
            <div className="card-body text-dark">
                <h3 className="card-title">{props.name}</h3>
                <p className="card-text text-secondary">
                Reason
                </p>
                <a href="#" className="btn btn-outline-success">Verify</a>
                <a href="#" className="btn btn-outline-success disqualify">Disqualify</a>
            </div>
        </div>
    )
}

export default CardSummary;
