import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Review from './Review';
import OperatingTime from './OperatingTime';
import { useSelector } from 'react-redux';

function RestView() {

    // var [Allrestaurants,setRestaurants]=useState([])

    // const fetchRest=async()=>{
    //   const result=await fetch('/restaurants.json')
    
    
  
    //   result.json().then(data=>{
    




    //     setRestaurants(data.restaurants)
    //   })
    


    const params=useParams()

    //console.log(params.id);
   //console.log(Allrestaurants);

  

    useEffect(()=>{
        
    },[])
    
    const {restaurantList} = useSelector(state=>state.restaurantReducer)

    const restaurant= restaurantList.find(item=>item.id==params.id)

    //console.log(restaurant);

  return (
<>

{
    restaurant?(
        <Row>
      <Col lg={6} md={6} className='p-5 ms-5 border text-center' >
    <img className='rounded border' style={{height:'600px'}} src={restaurant.photograph}/>
      </Col>
    
      <Col lg={6} md={6}className='p-5 ms-5 border text-center'>

      <ListGroup variant='flush'>
      <ListGroup.Item>{restaurant.name}</ListGroup.Item>
      <ListGroup.Item>{restaurant.neighborhood}</ListGroup.Item>
      <ListGroup.Item>{restaurant.address}</ListGroup.Item>
      <ListGroup.Item>{restaurant.cuisine_type}</ListGroup.Item>
      <ListGroup.Item>

        <div className='mt-4'><OperatingTime/>  <Review/></div>

      </ListGroup.Item>
    </ListGroup>


      </Col>
        </Row>):"" 
} 
  </>
  )
}

export default RestView