import { Card } from "react-bootstrap";

const Body = (props)=>{
    return(
        <div>
            <Card.Body>
                {props.data}
            </Card.Body>
        </div>
    )
}
export default Body