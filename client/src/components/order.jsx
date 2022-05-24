import {ASCENDENTEALF, ASCENDENTEPOB, DESCENDENTEALF, DESCENDENTEPOB} from "../constants/order"
import {useDispatch} from "react-redux"
import {sort} from "../store/actions"
import "../App.css"

export default function Order(){
    const dispatch = useDispatch()
    function onSelectChange(e){
        dispatch(sort(e.target.value))
    }
    return <select className= "select" name="select" onChange={onSelectChange}>
    <option value= "" >Ordenar por: </option>
    <optgroup label="Alfabetico">
        <option value= {ASCENDENTEALF}>Ascendente </option>
        <option value= {DESCENDENTEALF}>Descendente </option>
    </optgroup>
    <optgroup label="Poblacion">
        <option value= {ASCENDENTEPOB}>Ascendente </option>
        <option value= {DESCENDENTEPOB}>Descendente </option>
    </optgroup>
    </select>
}