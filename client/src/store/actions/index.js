import axios from "axios"
export const GET_ALL_COUNT = 'GET_ALL_COUNT'
export const SEARCH_COUNT = 'SEARCH_COUNT'
export const SORT = "SORT"
export const FILTER = "FILTER"
export const ACT = "ACT"
export const FILTERACT = "FILTERACT"

export function getCount(){
    return async function (dispatch){
       try{
           let countries = await axios.get("http://localhost:3001/api/countries/") 
            dispatch ({
                type: GET_ALL_COUNT,
                payload: countries.data
            })
    }
        catch(error){
            console.log(error)
        }
}}
export function searchCount(search){
    return function (dispatch){
        axios.get("http://localhost:3001/api/countries?name="+search)
        .then ((countries) => {
            dispatch ({
                type: SEARCH_COUNT,
                payload: countries.data
            })
        })
    }
}
export function sort(order){
    return {
        type: SORT,
        payload: order
    }
}
export function filter(filtro){
    return {
        type: FILTER,
        payload: filtro
    }
}
export function filterAct(season){
    return function (dispatch){
        axios.get("http://localhost:3001/api/activities/filter?acType=" + season)
        .then ((countries)=>{
            console.log(countries.data)
            dispatch({
            type: FILTERACT,
            payload: countries.data
        })
    })
}}
export function addAct(activity){
            console.log(activity)
    return function (dispatch){
        let data = JSON.stringify({
                name: activity.name,
                difficulty: activity.difficulty,
                duration: activity.duration,
                season: activity.season
            })
        axios.post("http://localhost:3001/api/activities/", data ,
            {headers:{"Content-Type" : "application/json"}}
            )
             .then ((newAct) => {
            dispatch ({
                type: ACT,
                payload: [newAct, activity]
            })
        })
            }

    }
