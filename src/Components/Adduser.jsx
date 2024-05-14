import React, { useState } from 'react'
import axios from 'axios'
import { useLoaderData,useNavigate } from 'react-router-dom'

const Adduser = () => {
    let navigate=useNavigate()
    const  [userdata,setUserdata]=useState({
        name:"",
        username:"",
        phone:"",
        website:"",
        email:""
    })

    const {name,username,phone,website,email}=userdata

    const getuservalues = (event) =>{
      // setUserdata((prev)=>{return {...prev,[event.target.name]:event.target.value}})
     setUserdata({...userdata,[event.target.name]:event.target.value})



    // Both approaches accomplish the same task of updating the state immutably and correctly. 
    // The difference is in how you access the previous state (userdata or prev), but in terms of functionality and behavior, 
    // they are the same. 
    // The second approach using the functional form is often preferred
    //  in cases where the new state depends on the previous state to ensure correctness in concurrent updates.
   
    }

    const submitting=(e)=>{
            //  const data=useLoaderData()
            //  const len=data.length
             e.preventDefault()
             axios.post("http://localhost:5112/UserData",userdata)
             navigate('/')

    }
  return (
    <>
      <form onSubmit={submitting}>

    <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" className="form-control" name="name" id="exampleInputEmail1" aria-describedby="emailHelp" value={name} placeholder='Name' onChange={getuservalues} />
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
    <input type="text" className="form-control" name='username' id="exampleInputEmail1" aria-describedby="emailHelp" value={username}  placeholder='Username' onChange={getuservalues}/>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Phone</label>
    <input type="number" className="form-control" name='phone' id="exampleInputEmail1" aria-describedby="emailHelp" value={phone}  placeholder='Phone Number' onChange={getuservalues}/>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Website Domain</label>
    <input type="text" className="form-control" name='website' id="exampleInputPassword1" placeholder='Website Domain'  value={website}  onChange={getuservalues}/>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" name='email' id="exampleInputEmail1" aria-describedby="emailHelp"  value={email}  placeholder='Email Address' onChange={getuservalues}/>
  </div>

 
 
  <button type="submit" className="btn btn-success">Add User</button>
</form>
    </>
  )
}

export default Adduser
