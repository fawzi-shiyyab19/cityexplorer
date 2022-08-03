import { Component } from "react";

export default class Errorcom extends Component{
    render(){
        return(
        
                <p>{this.props.error}</p>
        
        )
    }
}