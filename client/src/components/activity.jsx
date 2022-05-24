import "../App.css"
export default function Act({activities}){
    let listActs = activities;
    listActs = activities.map((act)=>(
        <ul className="card"key = {act.id}>
        <div> Actividad: </div>
        <li> {act.name}</li>
        <div> Duracion: </div>
        <li>{act.duration}</li>
        <div> Dificultad: </div>
        <li>{act.difficulty}</li>
        <div> Temporada: </div>
        <li>{act.season}</li>
        </ul>)
    );
    return (
        <ul className="detallesAct">{listActs}</ul>
    )

    
}