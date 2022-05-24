import {useDispatch} from "react-redux"
import {filterAct} from "../store/actions"
import "../App.css"

export default function FilterActOptions(){
    const dispatch = useDispatch()
    function onSelectChange(e){
        dispatch(filterAct(e.target.value))
    }
    return <select className= "select"name="select" onChange={onSelectChange}>
    <option value= "" >Filtrar por actividad: </option>
    <optgroup label="Activity season">
        <option value="winter">Invierno </option>
        <option value= "summer">Verano </option>
        <option value="spring">Primavera </option>
        <option value= "autum">Otoño </option>
    </optgroup>
    </select>
}