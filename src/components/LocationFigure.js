import React from "react"
import { Figure } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


class LocationFigure extends React.Component {
    constructor(props) {
        super(props);
    }

 render() {
     return (
            <>
            <Figure style={{marginTop:"50px"}}>
                <Figure.Image
                    alt={this.props.location.display_name}
                    src={this.props.locationMap}
                />
                <Figure.Caption>
                {this.props.location.display_name} has these coordinations: Latitude is {this.props.location.lat} and Longitude is {this.props.location.lon} 
                </Figure.Caption>
            </Figure>
            </>
        )
    }
}

export default LocationFigure;