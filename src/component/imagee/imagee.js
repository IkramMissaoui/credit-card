import React, { Component } from 'react';
import './imagee.css'
import Img from './imb.png'
class Image extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <img src={Img} className="logo" alt="img card"/>
            </div>
          );
    }
}
 
export default Image;
