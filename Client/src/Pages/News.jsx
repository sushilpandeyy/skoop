import React from 'react'
import Sidebar from '../Components/Sidebar'
import {Cardtxt, Cardimg} from '../Components/Cardimg.jsx'


const News = () => {
  return (
    <div className='flex justify-start content-start '>
      <div className="sec1 fixed top-0 left-0 w-auto h-full border-r bg-white space-y-8">
        <Sidebar/>
        </div>
        <div className="sec2 fixed top-0 left-0 w-auto h-full border-r bg-white space-y-8">
        <Cardimg
        Title="Government spends Rs 38 crore in over 6 months on Google ads promoting Modi"
        Sub="Rs 65 lakh was spent on ‘Modi Ka Parivar’ ads in just six days."
        Name="Sumedha Mittal"
        Url="https://media.assettype.com/newslaundry%2F2024-03%2F0e0ee246-e2c8-455f-bda3-459ebdb450cb%2Fmodi_google_ads.jpg"
        />
        <Cardtxt 
        Title="Not just electoral bonds, BJP dominates all forms of political finance"
        Name="Dhanya Rajendran"
        Sub="The Hindutva party accounts for nearly 60% of contributions received by all political parties since 2018."
        />
        <Cardimg
        Title="Delhi HC summons Moitra, media outlets over ‘defamatory statements’ against Jai Dehadrai"
        Sub="The court summoned five media outlets including India Today and The Guardian."
        Name="Dhanya Rajendran"
        Url="https://media.assettype.com/newslaundry%2F2023-10%2Fd2b739b1-3104-4fdb-8096-64a9ee13058d%2FMAHUA_.jpg"
        />
        </div>
    </div>
  )
}

export default News