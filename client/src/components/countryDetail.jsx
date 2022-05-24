import {useEffect, useState} from "react"
import {useParams} from "react-router"
import axios from "axios"
import Act from "./activity.jsx"
import {Link} from "react-router-dom"
import "../App.css"
export default function CountryDetail({name, image, continent, population, activities, capital}){
    const [country, setCountry] =useState(null)
     let {id} = useParams()
    useEffect(()=>{
        axios.get("http://localhost:3001/api/countries/" + id)
        .then ((response)=>{
            setCountry(response.data)
        })
    }, [id])
    
    return <div>
    {
        country?
        <>
        <h1 className="">{country.name} </h1> 
        <div className="">{country.id}</div>
        <img className="img" src = {country.image} alt= {country.name}></img>
        <ul className="detalles">
            <li >Subregion:  {country.subregion}</li>
            <li >Population:  {country.population}</li>
            <li >Area: {country.area} km2</li>
            <li >Capital: {country.capital}</li>
            <li >Actividades: <Act activities = {country.activities}></Act></li>
        </ul>
        <button className="button"><Link className="h1" to = "/home">Back</Link></button>
        </>: <div>Loading...</div>
    }
 
    </div>
}