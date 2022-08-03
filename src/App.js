import { Component } from 'react';
import './App.css';
import SearchForm from './components/Searchform';
import DisplayInfo from './components/displayinformation';
import Weather from './components/Weather';
import Map from './components/map';
import axios from 'axios';
import Errorcom from './components/error';
class App extends Component{
  constructor(props){
    super(props);
    this.state={
      display_name:'',
      latitude:'',
      longitude:'',
      map_src:'',
      DisplayInfo:false,
      errormsg:'',
      displayerr:false,
      weather:[],
      isWeather:false
    }
  }
  displayLocation=async(e) =>{
e.preventDefault();
const searchQuery=e.target.searchQuery.value;
let reqUrl = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${searchQuery}&format=json`
// console.log(reqUrl);
try {
  const city=await axios.get(reqUrl)
  this.setState({
    display_name:city.data[0].display_name,
        latitude:city.data[0].lat,
        longitude:city.data[0].lon,
        DisplayInfo:true,
        displayerr:false
  })
  this.displayMap(city.data[0].lat,city.data[0].lon);
  this.displayWeather(searchQuery, city.data[0].lat,city.data[0].lon)
}catch(error){
this.setState({
  DisplayInfo:false,
displayerr:true,
errormsg:error.response.status + ': '+error.response.data.error
})
}

  }
  displayMap=(lat,lon) =>{
    const map=`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center= ${lat},${lon}&zoom=18`
    console.log(map)
    this.setState({
      map_src:map
    })
 
  }

  displayWeather =async(searchQuery,lat,lon) => {
    try{
    const weatherData =await axios.get(`http://localhost:3001/weather?searchQuery=${searchQuery}&lat=${lat}&lon=${lon}`)
    this.setState({
      isWeather:true,
      weather:weatherData.data
    })
  }
  catch (error){
    this.setState({
      errormsg:error.response.status + ': '+error.response.data.error,
      displayerr:true,
      isWeather:false,
      DisplayInfo:false
    })
  }
  }

  render(){
  return (
    <div className="App">
      <SearchForm submitHandler={this.displayLocation} />
      {
        this.state.DisplayInfo &&
     <>
      <DisplayInfo cityInfo={this.state}/>
      <Map mapsour={this.state.map_src}/>
        </>
    }  
    {
      this.state.isWeather &&
      <Weather weatherinfo={this.state.weather}/>
    }
    {
      this.state.displayerr &&
      <Errorcom error={this.state.errormsg}/>
    } 
    </div>
  );
  }
}
export default App;