import './App.css'
import React from 'react'
import axios from 'axios'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      locationResult: {},
      searchQuery: '',
      show : true,
      errorMsg: false,
      weatherData: [],
      errorMsgWeather: false,
      showWeather: false
    }
  }
  getLocFun = async (e) => {
    e.preventDefault()
    console.log('inside getLocFun')
    let reqUrl = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.searchQuery}&format=json`

    try{
      let locRes = await axios.get(reqUrl)
      console.log(locRes.data)
      this.setState({
        locationResult: locRes.data[0],
      })
      console.log(this.state.locationResult.lat, this.state.locationResult.lon)
    }catch{
      this.setState({
        show : false,
        errorMsg : true
      })
    }




    this.displayWeather()
  }
  displayWeather = async () => {
    try{
      const weather = await axios.get(`${process.env.REACT_APP_SERVER}/weather`, {
      params: { searchQuery: this.state.searchQuery }
    })
    console.log(weather)
    this.setState({
      weatherData: weather.data,
      showWeather : true
    })
  }catch{
    this.setState({
      errorMsgWeather: true,
      showWeather : false

    })
  }

}
updateSearchQuery = (e) => {
  this.setState({
    searchQuery: e.target.value
  })
}

render() {

  return (
    <div>
      <h3>City Explorer app</h3>

      <form onSubmit={this.getLocFun}>
        <input  onChange={this.updateSearchQuery} type="text" name="city" />
        <input type="submit" value='"Explore!' />
      </form>

      <p>City name: {this.state.locationResult.display_name}</p>
      <p>latitude: {this.state.locationResult.lat}</p>
      <p>latitude: {this.state.locationResult.lon}</p>

      {this.state.show &&
        <img
        src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center= ${this.state.locationResult.lat},${this.state.locationResult.lon}&zoom=18`}
        alt="city"
        />
      }

      {this.state.errorMsg &&
      <p>Error in getting location data</p>}

      {this.state.showWeather &&
        this.state.weatherData.map((day, index) => (
        <div key={index}>
          <p>day: {day.date}</p>
          <p>description: {day.description}</p>
        </div>

      ))}

      {this.state.errorMsgWeather &&
      <p>Error in getting the weather data</p>}
    </div>
  )
  }
}
export default App;