import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data , setdata] = useState([])
    // useEffect(() => {
    // fetch('https://api.github.com/users/Vivan-1045')
    // .then(response => response.json())
    // .then(data => {
    //       setdata(data)
    // })
    // },[])
  return (
    <div className=' bg-blue-400 text-3xl rounded-lg font-semibold p-4'>
    Github : {data.followers}
    <img src= {data.avatar_url} alt="Github profile picture" width={200}/>
  
   
    </div>
    
  )
}

export default Github
export const  githubinfo = async () =>{
   const response =  await fetch('https://api.github.com/users/Vivan-1045')
   return response.json();
}
