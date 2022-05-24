import {useState} from "react"
import {searchCount} from "../store/actions"
import {useDispatch} from "react-redux"
import "../App.css"
export default function SearchBar(){
    const [search, setSearch] = useState('')
    let dispatch =useDispatch()
    
    function onSubmit(e){
        e.preventDefault();
        dispatch(searchCount(search));
    }
    function onInputChange(e){
         e.preventDefault();
        setSearch(e.target.value);
    }

    return <div >
        <form className= "form" onSubmit={onSubmit}>
        <input className= "searchInput" type= "text" onChange= {onInputChange} value= {search}></input>
        <input className= "searchInputButton" type="submit" value="Buscar"></input>
        </form>
        
    </div>
}