import React from 'react'
import { Container , Card } from 'react-bootstrap'
import details from "./SkillsInfo.js"
import Body from "./SkillsCard"
import "./Skills.css"
const Skills = () => {
  return (
    <div className='whole'>
        <Container className='card1'>
            {details.map((item,index)=>{
            return (
            <Card key = {index} className="category">
                <h1>{item.title}</h1>
                <Card.Body>
                    <Body data={item.skills}/>
                </Card.Body>
            </Card>)
            })}
        </Container>
    </div>
  )
}

export default Skills