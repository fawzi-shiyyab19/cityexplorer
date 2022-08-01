import React from "react";
import { Accordion } from "react-bootstrap";

class Weather extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Accordion>
                <Accordion.Item eventKey={this.props.weatherDay.eventKey}>
                    <Accordion.Header>{this.props.weatherDay.date}</Accordion.Header>
                    <Accordion.Body>
                    {this.props.weatherDay.description}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

        )
    }
}

export default Weather; 