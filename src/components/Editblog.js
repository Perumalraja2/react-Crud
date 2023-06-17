/*eslint-disable */
import React, { useEffect,useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useFormik } from 'formik';

import * as Yup from 'yup'
import { API_URL } from '../index';
import { useNavigate,useParams} from 'react-router-dom';
import axios from 'axios';


function Editblog() 
  {
    let navigate =useNavigate();
 let  editBlog = async(data) =>{
  let res = await axios.put(`${API_URL}/${params.id}`,data)
navigate("/manageblog")

 }
    
    let params = useParams()

    let [title,setTitle]=useState("")
    let [image,setImage]=useState("")
    let [description,setdescription]=useState("")

 
     let  getData = async(id) =>{
      let res = await axios.get(`${API_URL}/${id}`)
  console.log(res.data)
  setTitle(res.data.title)
  setImage(res.data.image)
  setdescription(res.data.description)
  console.log({title,image,description})

}

useEffect(()=>{
  if(params.id){
getData(params.id)
}
})

    
      const formik = useFormik({
        initialValues: {
          title: title,
          image: image,
          description: description,
        },
    enableReinitialize:true,
        validationSchema: Yup.object({
          title: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
          description: Yup.string()
            .min(2, 'Too Short!')
            .max(500, 'Too Long!')
            .required('Required'),
          image: Yup.string().required('Required').matches(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,"must be URL")
        }),
    
        onSubmit: values => {
          values.active_flag=false
    
          editBlog(values)
        }
      });
    
      return <>
        <div>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3" >
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Enter email"
                id="title"
                name="title"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.title}
              />
              {formik.touched.title && formik.errors.title ? (
                <div className='error'>{formik.errors.title}</div>
              ) : null}
    
            </Form.Group>
    
            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control type="text" placeholder="Password"
                id="image"
                name="image"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.image} />
              {formik.touched.image && formik.errors.image ? (
                <div className='error'>{formik.errors.image}</div>
              ) : null}
    
    
            </Form.Group>
    
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={5}
                id="description"
                name="description"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.description} />
              {formik.touched.description && formik.errors.description ? (
                <div  className='error'>{formik.errors.description}</div>
              ) : null}
    
    
            </Form.Group>
    
    
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </>
}

export default Editblog
