import {ASIA, OCEANIA, EUROPA, LAS, NA, ANT, AFRICA} from "../constants/filter"
import {useDispatch} from "react-redux"
import {filter} from "../store/actions"
import "../App.css"

export default function FilterOptions(){
    const dispatch = useDispatch()
    function onSelectChange(e){
        dispatch(filter(e.target.value))
    }
    return <select className= "select" name="select" onChange={onSelectChange}>
    <option value= "" >Filtrar por continente: </option>
    <optgroup label="Continente">
        <option value= {ASIA}> Asia </option>
        <option value= {AFRICA}> Africa </option>
        <option value= {OCEANIA}>Oceania </option>
         <option value= {EUROPA}>Europa </option>
        <option value= {LAS}>Sudamerica </option>
         <option value= {NA}>Norteamerica </option>
        <option value= {ANT}>Antartica </option>
    </optgroup>
    </select>
}