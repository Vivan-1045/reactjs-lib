import React , {useContext} from 'react'
import UserContext from '../context/UserContext'
function Account() {
    const {data} = useContext(UserContext);
    if (!data) 
        return <div className='text-3xl font-semibold mt-5'>Login here</div>
        return <div className='text-3xl font-semibold mt-5'>Welcome {data.username}✨</div>

}

export default Account
