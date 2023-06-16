import React from 'react'
import { API_URL } from '../index'
import axios from 'axios'
import { useState,useEffect } from 'react'
import Card from 'react-bootstrap/Card';

function Home() {
  let [blog,setBlog]=useState([])

  let data = async()=>{
    let res = await axios.get(`${API_URL}`)
    let newblog=[]
    newblog=res?.data?.filter((e)=>e.active_flag)
    
  setBlog(newblog)

  }
  useEffect(()=>{
    data()
  },[])



  return <>
  <h3 style={{textAlign:"center"}}>Lates Blogs</h3>
 <div>
 {
  blog.map((e,i)=>{
  return<Blogitem key={i}
     input = {e}
  />


  })
}
</div>  
  </>
}
export default Home
 

function Blogitem({input}){
return<>

<div style={{display:"flex",direction:"column",justifyContent:"center",alignItems:"center",border:"1px solid blacK",width:"500px",height:"500px",margin:"5px"}}>
<Card  >
        <Card.Img variant="top" src={input.image} style={{height:"300px"}}/>
        <Card.Body>
          <Card.Title >
          {input.title}
          </Card.Title>
          <Card.Text>
         {input.description}
          </Card.Text>
        </Card.Body>
      </Card>
      
</div>


</>



}