import { useCallback, useState ,useEffect,useRef} from 'react'



function App() {
  //Set all the initial values
  const [length , setlength] = useState(6);
  const [numberAllow , setnumberAllowed] = useState(false)
  const [characterAllow , setcharacterAllowed] = useState(false)
  const [password , setpassword] = useState("");

  //Generate a random password by using hooks
  const randompassword = useCallback(() => {
   let pass = ""
   let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuioplkjhgfdsazxcvbnm"
   if (numberAllow) str += "0123456789"
   if (characterAllow) str += "!@#$%^&*()_+- =[]{}~`"
   for (let i = 0; i <= length; i++) {
    let char = Math.floor(Math.random()*str.length + 1)
    pass += str.charAt(char)
   }
   setpassword(pass)

  } , [length, numberAllow , characterAllow , setpassword])


  //Create a reference to connect with generated password using reference function
  const passwordref = useRef(null)

  //To copy the password from clipboard and modify the UI usin hooks
  const CopyPassword = useCallback(() => {
    passwordref.current?.select();
    passwordref.current?.setSelectionRange(0,99);
    window.navigator.clipboard.writeText(password)
  },[password])

  //Run a randompassword function when there is any types of change occur
  useEffect(() => {randompassword()},[length,numberAllow,characterAllow,randompassword])

  return (
    <>
      <div className="w-full max-w-md  mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-2xl text-green-600">
        <h1 className='text-white  text-center'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 mt-4">
        <input
         type="text" 
         value={password}
         className='outline-none w-full py-2 px-4'
         placeholder="Password"
         ref={passwordref}
         readOnly
         />
         <button onClick={CopyPassword} 
         className='outline-none text-white bg-green-400 px-3 py-0.5 shrink-0 hover:bg-green-800 hover:text-black  '>
          Copy
          </button>
         </div>
         <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={4}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setlength(e.target.value)}}
            />
            <label>Length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked ={numberAllow}
            id='numberInput'
            onChange={() => {setnumberAllowed((prev) => !prev);  
            }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked ={characterAllow}
            id='characterInput'
            onChange={() => {setcharacterAllowed((prev) => !prev);  
            }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div> 
      </div>
    </>
  )
}

export default App
