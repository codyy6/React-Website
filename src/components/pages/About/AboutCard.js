import { Card } from "react-bootstrap";

const Body = (props)=>{
    const data = props.data.map((info, index)=>
    <li key={index}>{info}</li>)
    return(
        <div>
            <Card.Body>
                {props.data}
            </Card.Body>
        </div>
    )
}
export default Body