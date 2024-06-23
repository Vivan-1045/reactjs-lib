import React, { useState , useContext} from "react"
import UserContext from "../context/UserContext"

function Login() {
    
    const[username , setusername] = useState('')
    const[password , setpassword] = useState('')
    const {setData} = useContext(UserContext)
    const HandleSubmit = (e) => {
        e.preventDefault();
        setData({username , password});

    }
  return (
    <div className="box-shadow[0]">
      <input className=" mt-10 w-auto px-4 py-3 outline-none rounded-2xl " placeholder="username" type="text" value={username} 
      onChange={(e) => setusername(e.target.value)}
      />  
    
      <input className="w-auto px-4 py-3 outline-none rounded-2xl ml-10 " placeholder="password" type="password" value={password} 
      onChange={(e) => setpassword(e.target.value)}
      />
      <button onClick={HandleSubmit} className="w-auto px-4 py-3 outline-none rounded-2xl ml-10">Submit</button>
    </div>
  )
}

export default Login
