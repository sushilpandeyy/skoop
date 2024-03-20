import React from 'react'
import '../App.css';
import Animated from '../Components/Animated';
import Mainpg from '../Components/Mainpg'


const Homepage = () => {
  return (
    <>

    <div className="xx">
        <Animated />
    </div>
<div className="nn">
    <div className="gg">
        <Mainpg/>
        <div className="g">
        <h1>Welcome to My Web App</h1>
        <p>This is the landing page</p>
        </div>
    </div>
</div>

</>
  )
}

export default Homepage