//react imports

import React from 'react'
import { fetchData } from '../helpers'
import { Outlet, useLoaderData, useRouteLoaderData } from 'react-router-dom'


//assets

import wave from "../assets/wave.svg"

//components
import Navbar from '../components/Navbar'

export function mainLoader() {
    const userName = fetchData('userName')
    return {userName}
}

function Main() {
    const {userName} = useLoaderData()
  return (
    <div className='layout'>
        <Navbar userName={userName}/>
        <main>
            <Outlet/>
        </main>
        <img src={wave} alt="" />
    </div>

  )
}

export default Main