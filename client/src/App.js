import './App.css';
import PaginatedCountries from "./components/countries.jsx"
import {getCount} from "./store/actions"
import {useDispatch} from "react-redux"
import {useEffect} from "react"
import SearchBar from "./components/searchBar.jsx"
import Order from "./components/order.jsx"
import CountryDetail from "./components/countryDetail.jsx"
import Land from "./components/land.jsx"
import NewAct from "./components/addAct.jsx"
import { Route, Switch } from "react-router";
import FilterOptions from "./components/filter.jsx"
import FilterActOptions from "./components/filterAct.jsx"

function App() {
    let dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getCount())
        }, [dispatch])

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Land/>
        </Route>
         <Route path = "/home">
          <div className="App-header">HENRY RECIPES
              <SearchBar/>
          </div>
         {/* <div className="opciones">
              <Order/>
              <FilterOptions/>
              <FilterActOptions/>
              </div>
          <PaginatedCountries countriesPerPage={10}/>
           <div className="actividad"><div>NUEVA RECETA</div>
            <NewAct/> */}
          {/* </div> */}
        </Route>
        <Route path = "/:id">
          {/* <CountryDetail/> */}
        </Route>
      </Switch>
    </div>
  );
}

export default App;