import { Component } from "react";

export default class SingleMovie extends Component{
    render(){
        return(
            <>
            <p>{this.props.movieData.title}</p>
            <p>{this.props.movieData.relased_on}</p>
            <p>{this.props.movieData.popularity}</p>

            </>
        )
    }
}