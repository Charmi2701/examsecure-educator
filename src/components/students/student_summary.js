import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";

const StudentSummary = ({data}) => {
    console.log('---');
    console.log(data);
    return (
        <div className="card text-center">
            {/* <div className="card-body text-dark">
                <h3 className="card-title">{data.Name}</h3>
                <p className="card-text text-secondary">Giving Exam: {data.isGivingExam ? 'Yes' : 'No'}
                </p>
                <p className="card-text text-secondary">Disqualified: {data.isDisqualified ? 'Yes' : 'No'}
                </p>
            </div> */}
            <div className="card-body text-dark">
                <h3 className="card-title">{data.key}</h3>
                <p className="card-text text-secondary">Exam State: {data.value.examState}
                </p>
                <p className="card-text text-secondary">Disqualified: No
                </p>
            </div>
        </div>
    )
}

const NewStudentSummary = ({data}) => {
    return (
        <>
        <div>
            <Row>
                <Col xs={12} md={6}>

                </Col>
            </Row>
        </div>
        </>
    )
}

export default StudentSummary
