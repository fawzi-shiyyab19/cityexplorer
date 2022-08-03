import { Component } from "react";

export default class DisplayInfo extends Component{
    render(){
        return(
            <>
            <p>City name:{this.props.cityInfo.display_name}</p>
            <p>latitude:{this.props.cityInfo.latitude}</p>
            <p>longitude:{this.props.cityInfo.longitude}</p>
            </>
        )
    }
}