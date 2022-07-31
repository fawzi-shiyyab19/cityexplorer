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
    let url = `https://eu1.locationiq.com/v1/search?key=pk.dcf3597210552ea62d79cef7216ad648&q=${this.state.locationName}&format=json`;
    let response =await axios.get(url);
    console.log(response);
    this.setState({allInfo:response.data[0],showData:true})

  }


  render() {
    return (
      <div>
        <h1>Weclome to Map Viewer</h1>

        <Form onSubmit={this.viewLocation}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" name="Cityname" placeholder="Enter Place" />
          </Form.Group>
          <Button variant="primary" type="submit">
              Goo!
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
    <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.dcf3597210552ea62d79cef7216ad648&center=${this.state.allInfo.lat},${this.state.allInfo.lon}&zoom=10`} alt='here we are'/>
    </>

      }

      </div>
    )
  }
}

export default App