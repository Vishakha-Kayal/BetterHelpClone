import React from 'react'
import { useVerification } from '../../../context/verifyToken'
import { decodeToken } from '../../../utils/decodeToken'
import UpdateFields from './UpdateFields'
const LoginInfo = () => {
    const {token,userType}=useVerification()
    const user = token?decodeToken(token):null
    console.log(user.email)
  return (
    <div className='bg-textPrimary my-5 p-7 flex flex-col gap-4 rounded-md'>
        <h2 className='text-[2.1rem] font-semibold'>Login Information</h2>
        <p className='text-xl'>{user.email}</p>
        <UpdateFields forField="email"/>
        <UpdateFields forField="password"/>
    </div>
  )
}

export default LoginInfo