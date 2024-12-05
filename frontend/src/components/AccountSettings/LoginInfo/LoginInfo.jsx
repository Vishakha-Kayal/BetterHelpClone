import React from 'react'
import { useVerification } from '../../../context/verifyToken'
import { decodeToken } from '../../../utils/decodeToken'
import UpdateFields from './UpdateFields'
import Heading from '../Heading'
const LoginInfo = () => {
  const { token, userType,logout } = useVerification()
  const user = token ? decodeToken(token) : null

  return (
    <div className='bg-textPrimary my-5 px-9 py-11 flex flex-col gap-4 rounded-md'>
      <Heading content="Login Information" />
      <p className='text-xl'>{user.email}</p>
      <UpdateFields forField="email" token={token} userType={userType} handleLogout={logout}/>
      <UpdateFields forField="password" token={token} userType={userType} handleLogout={logout}/>
    </div>
  )
}

export default LoginInfo