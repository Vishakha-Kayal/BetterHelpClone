import React from 'react'
import LoginInfo from './LoginInfo/LoginInfo'
import YourTherapist from './YourTherapist'
import Notifications from './Notifications/Notifications'
import EditSessions from './EditSessions'
import Payment from './Payment'

const Home = () => {
  return (
    <div className='px-8 md:px-48 py-24 bg-[#fef8eaaa] min-h-screen'>
      <h2 className='text-5xl'>Account Settings</h2>
      <LoginInfo />
      <YourTherapist />
      <Notifications />
      <EditSessions />
      <Payment />
    </div>
  )
}

export default Home