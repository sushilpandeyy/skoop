import React from 'react'

export const cardtxt = (props) => {
  return (
    <div class="tweet-container1">
        
        <div class="summary1">
            <h2>
              {props.Title}
            </h2>
        </div>
        <div class="tweet-header1">
            <div class="user-info1">
                By: 
                <div class="user-name">{props.Name}</div>
            </div>
        </div>
        <div class="tweet-text1">
            {props.Sub}
        </div>
        
        
    </div>
  )
}
