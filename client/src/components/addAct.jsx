import {useState} from "react"
import {addAct} from "../store/actions"
import {useDispatch} from "react-redux"
import "../App.css"
export default function NewAct(){
    const initialState = {name:"", difficulty:"", duration:"", season:"", countries:[]}
    const [activity, setActivity] = useState(initialState)
    const [country, setCountry] = useState({nombre:""})
    const [error, setError]= useState("")
    const [submit, setSubmit]= useState("false")
    const [newCount, setNewCount] = useState("false")
    const error1="Temporada incorrecta! Solo puede ser winter, summer, spring o autum."
    const error2="Solo podes ingresar numeros!"
    const error3="Agrega el pais!"
    const error4= "Campos incompletos!"
    let dispatch =useDispatch()
    function onSubmit(e){
         e.preventDefault();
         if(!activity.name || !activity.difficulty || !activity.duration || !activity.season){
             setError(error4)
             return
         }
        //  if(activity.countries === [] ){
        //      setError(error3)
        //      return
        //  }
         if (activity.season === "winter" || activity.season === "summer" || activity.season === "spring" || activity.season === "autum" ){
             dispatch(addAct(activity));
             setSubmit("true");
         } else {return setError(error1)}

        setActivity(initialState)
        setCountry({nombre:""})
        setError("")
    }

    function onInputChange(e){
         e.preventDefault();
         let type = e.target.name;
         let value = e.target.value;
         switch(type){
                 case "nombre" : 
                     return  setActivity(activity => ({...activity, name: value}))
                 case "difficulty" : 
                     return setActivity(activity => ({...activity, difficulty: value}))
                 case "duration" : 
                    return  validateDuration(value)
                case "season" : 
                    return  setActivity(activity => ({...activity, season: value}))
                case "countries" : 
                   return  setCountry(country => ({...country, nombre: value}))
                default : return;
         }
    }
    function validateDuration(value){
        console.log(isNaN(value))
        if(isNaN(value)){
            setError(error2);
        }
        else{
        setError("");
        setActivity(activity =>({...activity, duration: value}))
        return
    }}
    function agregarPais(e) {
        e.preventDefault()
        let newCount = country.nombre
        let listaCountries = activity.countries
        listaCountries = [...listaCountries, newCount]
        setActivity({...activity, countries: listaCountries})
        setCountry({nombre:""})
        setNewCount("true")
    }
    function eliminarPais(country){
        let listaCountries = activity.countries;
        console.log(country)
        listaCountries = listaCountries.filter(c => c !== country);
        console.log(listaCountries)
        setActivity({...activity, countries: listaCountries})
    }
    return <div>
        <form className="form"onSubmit={onSubmit}>
            <label className= "label">Nombre: 
            <input className= "input"type= "text" name= "nombre" onChange= {onInputChange} value= {activity.name}></input>
            </label>
            <br/>
            <label className= "label">Dificultad: 
            <input className= "input" type= "text" name= "difficulty" onChange= {onInputChange} value= {activity.difficulty}></input>
            </label>
            <br/>
            <label className= "label">Duracion(Horas):
            <input className= "input" type= "text" name= "duration" onChange= {onInputChange} value= {activity.duration}></input>
            {!(error===error2) ? null: <p>{error}</p>}
            </label>
            <br/>
            <label className= "label">Temporada: 
            <input className= "input" type= "text" name= "season" onChange= {onInputChange} value= {activity.season}></input>
            {!(error===error1)? null: <p>{error}</p>}
            </label>
            <br/>
            <label className= "label">Pais/es:
            <input className= "input" type= "text" name= "countries" onChange= {onInputChange} value= {country.nombre} ></input>
            {!(error===error3)? null: <p >{error}</p>}
            <button className= "input" type= "button" onClick={agregarPais}>Agregar Pais</button>
            {(newCount==="false")? null: <p>{activity.countries.map((country)=>{
                return <p>{country} <button type= "button" onClick={()=>eliminarPais(country)} >x</button></p>
            })}</p>}
            </label>
            {!(error===error4)? null: <p>{error}</p>}
            <br/>
            {(submit==="false")? null: <p>Se agrego la actividad!</p>}
            <input type="submit" value="Submit" ></input>

        </form>
    </div>
    }