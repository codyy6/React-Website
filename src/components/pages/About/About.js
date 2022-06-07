import React from 'react'
import "./AboutCard"
import detail from "./AboutInfo"
import { Container , Card } from 'react-bootstrap'
import Body from "./AboutCard"
const about = () => {
    document.title='About'
  return (
    <div className='whole'>
      <Container className='card'>
        {detail.map((item,index)=>{
          return (
          <Card className='something' key = {index}>
            <img src={item.img} alt={item.alt}/>
            <Card.Title><h2>{item.h2}</h2></Card.Title>
            <Card.Body>
              <Body data={item.details}/>
            </Card.Body>
          </Card>)
        })}
      </Container>
    </div>
  )
}

export default about