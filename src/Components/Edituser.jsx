import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from "axios"

const Edituser = () => {
 let navigate=useNavigate()
 let {uid}=useParams()



 const [userdata,setUserdata]=useState({
    name:"",
    username:"",
    phone:"",
    website:"",
    email:""
 })

// const [userdata,setUserdata]=useState()

 const {name,username,phone,website,email}=userdata



 useEffect(()=>{
    getdata()
},[])

const getdata=async()=>{
    const info=await axios.get("http://localhost:5112/UserData/"+uid)
    // console.log(info.data)
    setUserdata(info.data)
}






const getuservalues = (event) =>{
  // json file->That's why this syntax is valid
    // userdata[event.target.name]=event.target.value
    // setUserdata(...userdata)

    setUserdata({...userdata,[event.target.name]:event.target.value})
   }

const updateuser=async(e)=>{
     e.preventDefault()
     await axios.put("http://localhost:5112/UserData/"+uid,userdata)
     navigate('/')

}
  return (
    <> 
    <h1>Edit User</h1>
        <form onSubmit={updateuser}>

<div className="mb-3">
<label htmlFor="exampleInputEmail1" className="form-label">Name</label>
<input type="text" className="form-control" name='name' id="exampleInputEmail1" aria-describedby="emailHelp" value={name} placeholder='Name' onChange={getuservalues} />
</div>

<div className="mb-3">
<label htmlFor="exampleInputEmail1" className="form-label">Username</label>
<input type="text" className="form-control" name='username' id="exampleInputEmail1" aria-describedby="emailHelp" value={username}  placeholder='Username' onChange={getuservalues}/>
</div>

<div className="mb-3">
<label htmlFor="exampleInputEmail1" className="form-label">Phone</label>
<input type="text" className="form-control" name='phone' id="exampleInputEmail1" aria-describedby="emailHelp" value={phone}  placeholder='Phone Number' onChange={getuservalues}/>
</div>

<div className="mb-3">
<label htmlFor="exampleInputPassword1" className="form-label">Website Domain</label>
<input type="text" className="form-control" name='website' id="exampleInputPassword1" placeholder='Website Domain'  value={website}  onChange={getuservalues}/>
</div>

<div className="mb-3">
<label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
<input type="email" className="form-control" name='email' id="exampleInputEmail1" aria-describedby="emailHelp"  value={email}  placeholder='Email Address' onChange={getuservalues}/>
</div>



<button type="submit" className="btn btn-success">Update User</button>
</form>
    </>
  )
}

export default Edituser
