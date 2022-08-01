import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'

class Weather extends React.Component {
    render() {
        return (
            <div>
                <Card style={{width:'50%',height:'50%',marginLeft:380}} >

                    <ListGroup variant="flush">
                        <ListGroup.Item>{this.props.weather.date}</ListGroup.Item>
                        <ListGroup.Item>{this.props.weather.description}</ListGroup.Item>
                    </ListGroup>

                </Card>


            </div>
        );
    }
}

export default Weather;