import React, { useEffect, useState } from 'react'
import axios from "axios"
import {useLoaderData,NavLink} from 'react-router-dom'

const Home = () => {
  // const data=useLoaderData();
  
  const [apiData,setApiData]=useState();
  useEffect(()=>{
    getUserData()
  },[])

  const getUserData=async()=>{
    const result=await axios.get("http://localhost:5112/UserData")
    console.log(result)
    console.log(result.data)
    setApiData(result.data)
  }
  const removedata=async(id)=>{
   await axios.delete("http://localhost:5112/UserData/"+id)
   getUserData()
  }
  return (
    <>
   <table className="table table-dark table-striped">
  <thead>
    <tr>
      <th scope="col">S.No</th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Website</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
      {apiData?.map((user,index)=>{
        return(
          <tr key={user.id}>
            <th scope='col'>{index+1}</th>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.website}</td>
            <td>
            <button className='btn btn-primary'><NavLink to={`user/${user.id}`} className="text-white" >View</NavLink></button>
            <button className='btn btn-success'><NavLink className="text-white" to={`edituser/${user.id}`}>Edit</NavLink></button>
            <button className='btn btn-danger' onClick={()=>removedata(user.id)}>Delete</button>
            </td>
          </tr>
        )
      })
      
      
      }
  </tbody>
</table>
    </>
  )
}

export default Home

export const getUserData=async()=>{
  const result=await axios.get("http://localhost:5112/UserData")
  // console.log(result)
  console.log(result.data)
  return (result.data)
}
