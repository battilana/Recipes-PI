import { GET_ALL_COUNT, SEARCH_COUNT, SORT, FILTER, ACT, FILTERACT } from "../actions/index"
import {ASCENDENTEALF, ASCENDENTEPOB, DESCENDENTEALF, DESCENDENTEPOB} from "../../constants/order"
import axios from "axios"
const initialState = {
    countries: [],
    filteredCount: [],
    activities: []
}
export default function reducer (state = initialState, action){
    switch(action.type){
        case GET_ALL_COUNT: 
            return {
                ...state,
                countries: action.payload,
                filteredCount: action.payload,
            }
        case SEARCH_COUNT:
            return {
                ...state,
                filteredCount: action.payload,
            }
        case SORT:
            let orderedCountries = [...state.filteredCount]
            console.log(state.countries)
            orderedCountries = orderedCountries.sort((a, b)=>{
                switch (action.payload){
                    case ASCENDENTEALF:
                        if (a.name < b.name ){
                        return -1}
                        return 1;
                    case DESCENDENTEALF:
                        if (a.name > b.name ){
                        return -1}
                        return 1;
                    case ASCENDENTEPOB:
                        if (a.population < b.population ){
                        return -1}
                        return 1;
                    case DESCENDENTEPOB:
                        if (a.population > b.population ){
                            return -1}
                            return 1;
                    default : return 0;}})
            return {
                ...state,
                filteredCount: orderedCountries,                
            }
        case FILTER: 
            let countByCont = [...state.countries]
            countByCont = countByCont.filter(country => 
                country.continent === action.payload)
            return {
                ...state,
                filteredCount: countByCont,
            }
        case FILTERACT:
            return{
                ...state,
                filteredCount: action.payload
            }
            
        case ACT:
            let newAct = action.payload[1]
            let newActDb = action.payload[0].data
            let actState= [...state.activities, newActDb]
            console.log(actState)
            let i = newAct.countries.length-1;
                for(i; i>=0; i--){
                axios.get("http://localhost:3001/api/countries?name="+newAct.countries[i])
                .then ((country) => {
                        let countId = country.data[0].id;
                        let actId = newActDb.id;
                        axios.post (`http://localhost:3001/api/activities/${countId}/${actId}`)
                        .catch((error) => {console.log(error)})
                })
                .catch((error) => {console.log(error)})
                }
            
            return {
                ...state,
                activities : actState
            }

        default: return state
    }
}