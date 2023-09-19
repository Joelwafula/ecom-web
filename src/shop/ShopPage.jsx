import React, { Component } from 'react'
import SHOP_DATA from "./shopData.js";
import PreviewCollection from '../component/preview-components/previewCollection.jsx';

class ShopPage extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         collections:SHOP_DATA
         
      }
    }
    
  render() {
    const {collections} = this.state;
    return (
      <div className='shop-page'>{

        
        collections.map(({id,...otherCollectionProp})=>(
          <PreviewCollection key={id}{...otherCollectionProp}/>
        ))
      }
        
      </div>
    )
  }
}
export default ShopPage