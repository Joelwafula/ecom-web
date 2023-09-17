import React from "react";
import { Component } from 'react'
import MenuItem from "../menu-item/menu-item";
import './directory.styles.scss'

class Directory extends Component {
    constructor() {
      super()
    
      this.state = {
        sections :[
            {
                title: 'hats',
                imageUrl: 'https://plus.unsplash.com/premium_photo-1675989087109-f8a00bfea7d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGF0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
                id: 1,
                linkUrl: 'shop/hats'
              },
              {
                title: 'jackets',
                imageUrl: 'https://images.unsplash.com/photo-1605022600390-071c6f969b32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGphY2tldHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
                id: 2,
                linkUrl: 'shop/jackets'
              },
              {
                title: 'sneakers',
                imageUrl: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c25lYWtlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
                id: 3,
                linkUrl: 'shop/sneakers'
              },
              {
                title: 'womens',
                imageUrl: 'https://images.unsplash.com/photo-1596484552993-aec4311d3381?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHdvbWVuJTIwb3V0Zml0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
                size: 'large',
                id: 4,
                linkUrl: 'shop/womens',
                size:'large'
              },
              {
                title: 'mens',
                imageUrl: 'https://images.unsplash.com/photo-1534260748473-e1c629d04bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVuJTIwb3V0Zml0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
                size: 'large',
                id: 5,
                linkUrl: 'shop/mens',
                size:'large'
              }

        ]
         
      }
    }
    
  render() {
    return (
      <div className='directory-menu'>
      
        {
             this.state.sections.map(({id,...otherSectionProp}) =>(
                <MenuItem key={id} {...otherSectionProp}/>
             ))
        }
       
        
      </div>
    )
  }
}
export default Directory
