import React from 'react'
import { fetchData } from '../helpers'
import { useLoaderData } from 'react-router-dom'
import Intro from '../components/Intro'
import { toast } from 'react-toastify'

export function dashboardLoader() {
    const userName = fetchData('userName')
    return {userName}
}


export async function dashboardAction({request}) {
    const data = await request.formData()
    const formData = Object.fromEntries(data)
    try {
      localStorage.setItem('userName',JSON.stringify(formData.userName))
      console.log(formData);
    } catch (error) {
      console.log(error);
    }
    finally {
      toast.success(`Welcome, ${formData.userName}!`)
    }
    
    
    
}

function Dashboard() {
  const {userName} = useLoaderData()
  return (
    <>
      {userName ? (<p>{userName}</p>) : <Intro/>}
    </>
  )
}

export default Dashboard