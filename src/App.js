import react from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class App extends react.Component {


  constructor(props) {
    super(props)
    this.state= {
      locationName : '',
      allInfo : {},
      showData : false,

    }
  }

  viewLocation = async (event) => {

    event.preventDefault();
    await this.setState({locationName:event.target.Cityname.value});
    let url = `https://eu1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATION_API_KEY}&q=${this.state.locationName}&format=json`;
    let response =await axios.get(url);
    console.log(response);
    this.setState({allInfo:response.data[0],showData:true})

  }


  render() {
    return (
      <div>
               <h1>Weclome my app aplication</h1>


        <Form onSubmit={this.viewLocation}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" name="Cityname" placeholder="Enter Place" />
          </Form.Group>
          <Button variant="primary" type="submit">
              submit
          </Button>
        </Form>
      <br>
      </br>
      {this.state.showData &&
      <>
      <p> Place Name : {this.state.allInfo.display_name}</p>
      <p> Latitude : {this.state.allInfo.lat}</p>
      <p> Longitude :{this.state.allInfo.lon}</p>
      <br>
    </br>
    <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_API_KEY}&center=${this.state.allInfo.lat},${this.state.allInfo.lon}&zoom=10`} alt='here we are'/>
    </>

      }

      </div>
    )
  }
}

export default App;