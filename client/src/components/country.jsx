import {Link} from "react-router-dom"
import "../App.css"
export default function Country({id, name, image, continent}){
    return <div className= "item">
    <Link className= "h1" to= {`/${id}`}>
        <h1 className= "h1">{name} </h1> 
        <img  className= "img" src = {image} alt= {name}></img>
    </Link>
    <div className = "h2" >{continent}</div>
    </div>
}