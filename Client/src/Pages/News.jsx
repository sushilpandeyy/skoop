import React from 'react'
import Sidebar from '../Components/Sidebar'
import Cardtxt from "../Components/Cardtxt"


const News = () => {
  return (
    <div className='flex justify-start content-start '>
        <Sidebar/>
        <Cardtxt 
        Title="Not just electoral bonds, BJP dominates all forms of political finance"
        Name="Dhanya Rajendran"
        Sub="The Hindutva party accounts for nearly 60% of contributions received by all political parties since 2018."
        />
        
    </div>
  )
}

export default News