import React from "react";
import {WithRouter  } from "react-router-dom ";

import './menu-item.scss'

const MenuItem = ({title,imageUrl,size ,history,linkUrl,match}) => {
  return (
        <div 
        onClick={()=>history.push(`${match.url} ${linkUrl}`)}
            className={`menu-item ${size}`}>
           <div  className="background-image"
            style={{
           backgroundImage: `url(${imageUrl})`, 
           }}/>

                <div className='content'>
                    <h1 className='title'>{title.toUpperCase()}</h1>
                    <span className='subtitle'>SHOP NOW</span>

                </div>

            </div>
  )
}

export default WithRouter(MenuItem)
