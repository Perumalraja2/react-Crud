import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import { useState } from 'react';
import { API_URL } from '../index';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import CheckBox from '../common/CheckBox';




function Manageblog() {
  let [blog,setBlog]=useState([])
  let navigate=useNavigate()

  let data = async()=>{
    let res = await axios.get(`${API_URL}`)
   
  setBlog(res.data)
  toast.success("blog success")
    
  }
useEffect(()=>{
  data()
},[])

let handledelete=async(id)=>{
let res = await axios.delete(`${API_URL}/${id}`)
console.log(res)
data()
}
let handleStatuschange=async(id,status)=>{
  let res = await axios.put(`${API_URL}/${id}`,{active_flag:status})
  console.log(res)
  data()

}

  return <>
  <div>
  <Table striped bordered hover>
      <thead>
        <tr>
          <th style={{width:"2%",textAlign:"center"}}>#</th>
          <th style={{width:"12%",textAlign:"center"}}>Title</th>
          <th style={{width:"43%",textAlign:"center"}}>Description</th>
          <th style={{width:"10%",textAlign:"center"}}>image</th>
          <th  style={{width:"8%",textAlign:"center"}}>Status</th>
          <th style={{width:"10%",textAlign:"center"}}>Action</th>
        </tr>
      </thead>
      <tbody>
      {
          blog.map((e)=>{
            return<tr key={e.id} style={{verticalAlign:"middle"}}
>
<td>{e.id}</td>
<td>{e.title}</td>
<td><div>{e.description}</div></td>
<td><Image imageUrl={e.image}/></td>
<td><CheckBox id={e.id} status={e.active_flag} onStatusChange={handleStatuschange}/></td>
<td><div style={{width:"100%",textAlign:"center"}}><i className="fa-solid fa-pen fa-2x" onClick={()=>navigate(`/edit/${e.id}`)} style={{cursor:"pointer",color:"#a6bade",}}>
  </i>
  &nbsp;
  &nbsp;
  
  <i className="fa-solid fa-trash-can fa-2x" style={{cursor:"pointer",color:"#f5938c"}} onClick={()=>handledelete(e.id)}></i>
  </div>
  </td>



</tr>
            
        

          })

  

      }
      </tbody>
    </Table>


  </div>
  
  
  </>
}

export default Manageblog


function Image({imageUrl}){
return<>
  <div style={{textAlign:"center",width:"100%"}}>
<img src={imageUrl} alt={'imag'} style={{width:"50px",height:"50px"}}/>

  </div></>
}

