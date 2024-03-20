import React from 'react'
import '../App.css';
import Animated from '../Components/Animated';
import Mainpg from '../Components/Mainpg'
import Maintwo from '../Components/Maintwo';
import Mainthree from '../Components/Mainthree';
import Footer from '../Components/Footer';


const Homepage = () => {
  return (
    <>

    <div className="xx">
        <Animated />
    </div>
<div className="nn">
    <div className="gg">
        <Mainpg/>
        <Mainthree/>
        <Maintwo/>
        <div className="g">
        <h1>Welcome to My Web App</h1>
        <p>This is the landing page</p>
        </div>
        <Footer/>
    </div>
</div>

</>
  )
}

export default Homepage