import React from 'react'
import { useVerification } from '../../../context/verifyToken'
import { decodeToken } from '../../../utils/decodeToken'
import UpdateFields from './UpdateFields'
import Heading from '../Heading'
const LoginInfo = () => {
  const { token, userType } = useVerification()
  const user = token ? decodeToken(token) : null
  console.log(user.email)
  return (
    <div className='bg-textPrimary my-5 px-9 py-11 flex flex-col gap-4 rounded-md'>
      <Heading content="Login Information" />
      <p className='text-xl'>{user.email}</p>
      <UpdateFields forField="email" />
      <UpdateFields forField="password" />
    </div>
  )
}

export default LoginInfo