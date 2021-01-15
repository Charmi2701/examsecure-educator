import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";

const CardSummary = ({data}) => {
    return (
        <div className="card text-center container-fluid">
            <Row>
                <Col sm={12}>
                    <div id="inam" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">

                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default CardSummary
