import React from 'react'
import { Card, Container } from 'react-bootstrap'
import "./WE.css"
import detail from "./WEInfo"
import Body from "./WECard"
const WorkingExperiences = () => {
    document.title="Cody Liew's Working Experiences"
  return (
    <div className='whole'>
      <Container className='card'>
        {detail.map((item,index)=>{
          return (
          <Card key = {index}>
            <img src={item.img} alt={item.alt} className ="WEimg"/>
            <Card.Title><h2>{item.h2}</h2></Card.Title>
            <Card.Body>
              <h3><u>{item.h3}</u></h3>
              <h4>{item.h4}</h4>
              <Body data={item.details}/>
            </Card.Body>
          </Card>)
        })}
      </Container>
    </div>
  )
}

export default WorkingExperiences