import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='bg-gray-400 font-white text-4xl rounded-lg'>
      User : {userid}
    </div>
  )
}

export default User
