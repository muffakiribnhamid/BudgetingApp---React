import React from 'react'

//assets
import logoMark from '..//assets/logomark.svg'
import { Form, NavLink } from 'react-router-dom'


//libraries
import { TrashIcon } from '@heroicons/react/24/solid'


const Navbar = ({ userName }) => {
  return (
    <nav>
        <NavLink to='/' aria-label='Go to home'>
        <img  src={logoMark} height={30} alt="" />
        <span>Budget App</span>
        </NavLink>
        

        {
            userName && (
                <Form method='post' action='/logout' 
                onSubmit={(event) => {
                    if(!confirm('Delete user and all data?')) {
                        event.preventDefault()
                    }
                }}>
                    <button type='submit' className='btn btn--warning'>
                        <span>Delete User</span>
                        <TrashIcon width={20}/>
                    </button>

                </Form>
            )
        }
        
    </nav>
  )
}

export default Navbar