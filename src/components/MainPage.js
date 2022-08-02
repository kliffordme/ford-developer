import React from 'react'
import {Card} from 'react-bootstrap'

export const MainPage = () => {
  return (
    <Card id="home"  className='position-relative rounded-0' >
      <Card.Body className='position-absolute start-0 bottom-0 m-5'>
          <h1 id="profileName" className='text-white m-auto'>Klifford Orquillas</h1>
          <h4 className='text-white m-auto'>Software Developer</h4>
          <p className='text-white mt-2'>A 25-year-old software developer based in Iligan City, Philippines.</p>
      </Card.Body>
    </Card>
  )
}

