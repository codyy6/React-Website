import { Card } from "react-bootstrap";
import "./Skills.css"
const Body = (props)=>{
    const data = props.data.map((info, index)=>
    <li key={index}>{info}</li>)
    return(
        <div>
            <Card.Body>
                <ul className="list">
                    {data}
                </ul>
            </Card.Body>
        </div>
    )
}
export default Body