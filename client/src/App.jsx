import React, { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"
function App() {
const [file,setfile]=useState();
const [image,setImage]=useState()

const handleupload=(e)=>{
  e.preventDefault()
  console.log(file)
  const formdata=new FormData()
  formdata.append('file',file)
  axios.post('http://localhost:3001/upload',formdata)
  .then(res=>console.log(res))
  .catch(err=>(console.log(err)))
}
useEffect(()=>{
  axios.get('http://localhost:3001/getImage')
  .then(res=>setImage(res.data[0].image))
  .catch(err=>(console.log(err)))
},[])
  return (
    <>
      <div>
        <input type="file" onChange={e=>setfile(e.target.files[0])}/>
        <button onClick={handleupload}>Upload</button>
        <br />
        <img src={`http://localhost:3001/images/`+image} alt="" />
      </div>
    </>
  )
}

export default App
