import { Component } from "react";
import SingleMovie from "./SingleMovie";

export default class Movie extends Component{
    render(){
        return(
            
                this.props.movie.map(item =>
            <SingleMovie movieData={item}/>
           
        )
        )
    }
}