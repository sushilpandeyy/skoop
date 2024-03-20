import React from 'react'
import '../App.css';
import Animated from '../Components/Animated';
import Mainpg from '../Components/Mainpg'
import Maintwo from '../Components/Maintwo';
import Mainthree from '../Components/Mainthree';
import Footer from '../Components/Footer';
import Hed from '../Components/Hed';
import Lastc from '../Components/Lastc';


const Homepage = () => {
  return (
    <>

    <div className="xx">
        <Animated />
    </div>
<div className="nn">
    <div className="gg ">
        <Mainpg/>
        <Mainthree/>
        <Maintwo/>
        <Lastc/>
        <Hed/>
        <Footer/>
    </div>
</div>

</>
  )
}

export default Homepage