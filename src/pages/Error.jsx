import React from 'react'
import { Link, useNavigate, useRouteError } from 'react-router-dom'
import { HomeIcon, ArrowUturnLeftIcon} from '@heroicons/react/24/solid'

function Error() {
  const error = useRouteError()
  const navigate = useNavigate()
  return (
    <div className='error'>
        <h1>Uh oh! we've got a error!</h1>
        <p>{error.message || error.statusText}</p>   
        <div className="flex-md">
          <button onClick={() => navigate(-1)} className='btn btn--dark'> 
            <span>Go back!</span>
            <ArrowUturnLeftIcon/>
          </button>

            <Link to="/" className='btn btn--dark'>
              <span>Go home</span>
              <HomeIcon/>
            </Link>
          
        </div>     
    </div>
  )
}

export default Error