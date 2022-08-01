import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button} from 'react-bootstrap/' 


class LocationSearchForm extends React.Component {
    constructor(props) {
        super(props);
    }

    getLocation = (event) =>{
        this.props.getLocation(event);

    }

    render() {
        return (

            <Form onSubmit={this.getLocation}>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label style={{textAlign:'left',width:"100%",marginLeft:"10px"}} >City Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter City Name" name="cityName" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    submit
                </Button>
            </Form>
        )
    }


}

export default LocationSearchForm; 
