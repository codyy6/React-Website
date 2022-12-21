import React from 'react'
import { Container , Card } from 'react-bootstrap'
import "./Research.css"
import details from "./ResearchInfo.js"
const Research = () => {
    document.title="Cody Liew's Researches"
  return (
    <div className='researchWhole'>
        <Container className="researchBody">
            {details.map((item,index)=>{
                return(
                <Card key = {index} className='researchCard'>
                    <img src={item.img} alt = {item.alt} className='researchImage' />
                    <a href={item.link} target={"_blank"} className = 'researchLink'>
                        <strong>{item.title}</strong>
                    </a>
                </Card>
                )
            })}
        </Container>
    </div>
  )
}

export default Research