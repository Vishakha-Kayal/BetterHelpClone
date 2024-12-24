import React from 'react'
import LoginInfo from './LoginInfo/LoginInfo'
import YourTherapist from './Therapist/YourTherapist'
import Notifications from './Notifications/Notifications'
import EditSessions from './EditSessions'
import Payment from './Payment'
import MyProfile from './MyProfile'
import QuitTherapy from './QuitTherapy'
import { useVerification } from '../../context/verifyToken'

const Home = () => {
  const { userType } = useVerification();

  return (
    <>

      <div className='px-8 md:px-48 py-24 bg-[#fef8eaaa] min-h-screen'>
        <h2 className='text-5xl'>Account Settings</h2>
        <LoginInfo />
        {
          !(userType === "doctor") && (
            <>
              <YourTherapist />
              <Notifications />
              <EditSessions />
              <Payment />
            </>)
        }
        <MyProfile />
        <QuitTherapy />
      </div>
    </>
  )
}

export default Home