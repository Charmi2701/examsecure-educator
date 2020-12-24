import React from 'react'
import { Link } from "react-router-dom";

const MediaSummary = ({data}) => {
    return (
        <>
        <li className="media mx-5 my-3 border">
            <Link to={'/imagedetail/' + data.key}>
                <img class="mr-3" src={data.value.imageURL} style={{borderRadius:0, height:75, width:75 }} alt="triggered User examsecure"/>
            </Link>
                <div class="media-body ">
                    <h5 class="mt-0 mb-1" style={{fontWeight:'bold'}}>{data.key}</h5>
                    {data.value.reason}
                </div>
            {/* <a href="#" className="btn btn-outline-success">Verify</a>
            <a href="#" className="btn btn-outline-success disqualify">Disqualify</a> */}
        </li>
        </>
    )
}

export default MediaSummary
