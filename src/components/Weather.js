import { Component } from "react";

export default class Weather extends Component{
    render(){
        return(
<>
            {
                this.props.weatherinfo.map(item =>
                <li>{item.date} : {item.description}</li>
                )
            }
           
</>
        )
    }
}