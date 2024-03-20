import React from 'react'

const Cardimg = () => {
  return (
    <div class="tweet-container">
        <div class="summury">
            <h2>
                {props.Title}
            </h2>
        </div>
        <div class="tweet-header">
            <div class="user-info">
                <div class="user-name">By: {props.Name}</div>
            </div>
        </div>
        <div class="tweet-text">
           {props.Sub}
        </div>
        <div class="tweet-image">
            <img src="{props.Url}" alt="Tweet Image"/>
        </div>
        
    </div>
  )
}

export default Cardimg