import React, { useEffect, useState } from 'react'
import Drawertest from '../../Common/Drawertest/Drawertest'
import Header from '../../Common/Header/Header'
import Loader from './../Loader/Loader'
import { useFormik } from 'formik'
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Aboutus = () => {

 const[isOpen, setIsOpen] = useState(false)
 const toggleDrawer = () => {

    setIsOpen(!isOpen)
 }
 const [isLoading, setIsLoading] = useState(true);
 useEffect(() => {

   setTimeout(() => {

     setIsLoading(false);

   }, 3000)
 }, []);

 const formik = useFormik(
  {
    initialValues: {
      email: '',
      password: '',
    }, 
    validationSchema: yup.object({
      email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
      password: yup
      
      .string('Enter your password')
      .matches((/^([^0-9]*)$/),"dont't allow Numeric Value")
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required')      
    ,
   }),
  onSubmit: (values) => {
  alert(values.email +" "+ values.password);
  console.log(values.password)
  },
  })
  return (
    <>
      {isLoading ?
      <Loader/>: ''} 
      <div>           
        <h1>About us</h1>
        <button onClick={toggleDrawer}>Open</button>                    
      </div>
     
      <Drawertest modal={isOpen} setModal={toggleDrawer} />

     {isOpen && <Header/>}

     <h1>Login Here</h1>

<form className='main' onSubmit={formik.handleSubmit}>

<TextField style={{paddingRight: "10px"}}
id="email"
name="email"
placeholder='enter your name'
value={formik.values.email}
onChange={formik.handleChange}
error={formik.touched.email && Boolean(formik.errors.email)}
helperText={formik.touched.email && formik.errors.email} 
label="Email" 
variant="outlined" />

<TextField variant="standard"  style={{paddingRight: "10px"}}
id="password"
name="password"
label="Password"
type='password'
value={formik.values.password}
onChange={formik.handleChange}
error={formik.touched.password && Boolean(formik.errors.password)}
helperText={formik.touched.password && formik.errors.password}/>

<Button variant="contained" type='submit'>Login</Button>

</form>
    </>
  )
}

export default Aboutus
