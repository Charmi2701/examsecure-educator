import React, {useState} from 'react'
import { Carousel } from 'react-bootstrap';
import { Link } from "react-router-dom";


function ControlledCarousel({imageArray, props }) {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      console.log(selectedIndex,e);
      setIndex(selectedIndex);
    };
    //console.log(imageArray)
    return (
      <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
        {imageArray && imageArray.map(data => {
            //console.log(data);
            return(
                <Carousel.Item>
                <img
                    className="d-block w-100 carousel"
                    src={data.imageURL}
                    alt="triggered-user-examsecure"
                />
                <Carousel.Caption>
                    <div className="carousel-caption">
                        <p>{data.reason}</p>
                    </div>
                </Carousel.Caption>
                </Carousel.Item>
            )
        })}
      </Carousel>
    );
  }
  
//render(<ControlledCarousel />);

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
                {/* <img src={imageArray[0].imageURL}  alt= 'triggered User examsecure' className="card-img-top"/> */}
                <ControlledCarousel imageArray={imageArray} props={props}/>
            </div>
            </Link>
            <div className="card-body text-dark">
                <h3 className="card-title">{props.name}</h3>
                {/* <p className="card-text text-secondary">
                Reason
                </p> */}
                <a href="#" className="btn btn-outline-success">Verify</a>
                <a href="#" className="btn btn-outline-success disqualify">Disqualify</a>
            </div>
        </div>
    )
}

export default CardSummary;
