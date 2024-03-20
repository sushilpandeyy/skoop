import React from 'react'
import { Link } from 'react-router-dom'

const Lastc = () => {
  return (
   <div className="lastcc kk">
        <div className="lasth ">
         A community-owned journalism network based on transparency and trust.
         </div>
      <div className="lastte ">
           Skoop is home to a growing number of independent newsrooms from around the world. Our cooperative model allows journalists to capture more of the value they create, in a community that prioritizes ethical journalism above all.
      </div>
      <div className="lastbt">

      <button class="button-random">
          
          <span ><Link to="/login">Join us</Link></span>
        </button>
      </div>
   </div>
  )
}

export default Lastc