import React from 'react'
import { Link } from "react-router-dom";

const Cardtxt = (props) => {

    return (
      <div class="tweet-container1">
          <div class="summary1">
              <h2 className='text-xl'>
              {props.Title} 
              </h2>
          </div>
          <div class="tweet-header1">
              <div class="user-info1">
                  By:
                  <span class="user-name"> {props.Name}</span>
              </div>
          </div>
          <div class="tweet-text1">
              {props.Sub}
          </div>
          
      </div>
    )
  }

const Cardimg = (props) => {
    const contract = props.state.Contract;
    const follow = async () => {      
        
        const follow = await contract.followReporter(props.ReporterAddress);
        console.log(follow);
    }
  return (
    <div class="tweet-container">
        <a href={"news/t/"+props.Len}>
        <div class="summary">
            <h2 className='text-xl'>
                {props.Title}
            </h2>
        </div>
        <div class="tweet-header">
            <div class="user-info">
                <div class="user-name">Category: {props.Name}</div>
            </div>
        </div>
        
        <div class="tweet-image">
            <img src={props.Url} alt="Tweet Image"/>
        </div>
        <div class="tweet-text">
           {props.Sub}
        </div>
        </a>
        <button onClick={follow}>Follow Reporter</button>
    </div>
  )
}

export {Cardimg, Cardtxt}