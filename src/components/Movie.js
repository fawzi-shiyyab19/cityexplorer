import { Component } from "react";

export default class Movie extends Component{
    render(){
        return(
            
                this.props.movie.map(item =>
            
            <>
            <p>{item.title}</p>
            <p>{item.relased_on}</p>
            <p>{item.popularity}</p>

            </>
        )
        )
    }
}