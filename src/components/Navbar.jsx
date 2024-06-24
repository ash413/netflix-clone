import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate()
//  console.log(user.email)

  /*const handleLogout = async () => {
    try {
      await logOut()
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }*/

  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>
        NETFLIX
      </h1>
      {/*</Link>
        {user?.email ? (
          <div>
            <Link to='/account'>
              <button className='text-white pr-4'>
                Account
              </button>
            </Link>
              <button onClick={handleLogout} className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>
                Logout
              </button>
          </div> )
        :( */}
        <div>  
          <button className='text-white pr-4'>
            Sign In
          </button>
          <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>
            Sign Up
          </button>
        </div> 
    </div>
  )
}

export default Navbar