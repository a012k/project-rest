import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Restcard({restdata}) {
  return (
    <>
<Link to={`/view-restuarant/${restdata.id}`} style={{textDecoration:'none',color:'white'}}>

<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={restdata.photograph}/>
      <Card.Body>
        <Card.Title>{restdata.name}</Card.Title>
        <Card.Text>
        <p><strong>Cuisine_Type</strong>{restdata.cuisine_type}</p>
        
        <strong>Neighborhood</strong>{restdata.neighborhood}
        

        </Card.Text>
      </Card.Body>
    </Card>

</Link>
      
      </>
  )
}

export default Restcard