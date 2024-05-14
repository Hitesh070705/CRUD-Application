// import React from 'react'
// import { useParams,useLoaderData } from 'react-router-dom'
// import axios from "axios"
// const Viewdata = () => {
//   let params=useParams()
//   const singleuserinfo=async()=>{
//   const userdata=await axios.get(`http://localhost:5112/UserData/${params.id}`)
//   console.log(userdata)
//   return (userdata.data)
//   }
//   const singledata=useLoaderData(singleuserinfo)
//   console.log(singledata)
//   return (
//     <>
//       {singledata && <table className="table table-dark table-striped">
//   <thead>
//     <tr>
      
//       <th scope="col">Name</th>
//       <th scope="col">Username</th>
//       <th scope="col">Email</th>
//       <th scope="col">Website</th>
    
//     </tr>
//   </thead>
//   <tbody>
      
//           <tr>
           
//             <td>{singledata.name}</td>
//             <td>{singledata.username}</td>
//             <td>{singledata.email}</td>
//             <td>{singledata.website}</td>
           
//           </tr>
        
      
      
      
//   </tbody>
// </table> }
//     </>
//   )
// }

// export default Viewdata
// // export const getsingleuserdata=async()=>{
// //     let params=useParams()
// //     const userdata=await axios.get(`http://localhost:5112/UserData/${params.id}`)
// //     return userdata
// // }


import React, { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom'
import axios from "axios"
const Viewdata = () => {
  let params=useParams()
  const [fix,setFix]=useState()

  useEffect(()=>{
   singleuserinfo()
  },[])

  const singleuserinfo=async()=>{
       const userdata=await axios.get(`http://localhost:5112/UserData/${params.id}`)
       console.log(userdata)
       setFix(userdata.data)
      //  return (userdata.data)
  
  }
  

  return (
    <>
      {fix && <table className="table table-dark table-striped">
  <thead>
    <tr>
      
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Website</th>
    
    </tr>
  </thead>
  <tbody>
      
          <tr>
           
            <td>{fix.name}</td>
            <td>{fix.username}</td>
            <td>{fix.email}</td>
            <td>{fix.website}</td>
           
          </tr>
        
      
      
      
  </tbody>
</table> }
    </>
  )
}

export default Viewdata
// export const getsingleuserdata=async()=>{
//     let params=useParams()
//     const userdata=await axios.get(`http://localhost:5112/UserData/${params.id}`)
//     return userdata
// }

