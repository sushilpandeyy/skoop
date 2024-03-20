import { Link } from 'react-router-dom'
import React from 'react'

const Mainpg = () => {
  return (
    <div class="container-random ">
    <div>
      <h1 class="title-random">Dectralizing News With Public For Public</h1>
    </div>
    <div>
      <div class="description-random">"Blockchain-Powered Decentralized Journalism: Putting News in the Hands of the People"</div>
    </div>
    <div class="w-full">
      <div class="buttons-container-random">
        <button class="button-random">
          
          <span ><Link to="/login">Join us</Link></span>
        </button>
      </div>
    </div>
  </div>
  )
}

export default Mainpg