import {Link} from "react-router-dom"
import "../App.css"
export default function Land(){
    return <div>
        <Link to = "/home">
            <img alt= "countries" className="imgLand" src= "https://www.tekcrispy.com/wp-content/uploads/2022/03/mapamundi-mas-preciso-portada-1536x768.jpg"></img>
        </Link>
    </div>
}