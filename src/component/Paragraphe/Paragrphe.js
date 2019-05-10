import React, { Component } from 'react';
import './Paragraphe.css'
import Img from './lastimage.png'
class Paragrphe extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="global">
            <div className="div1">
              <p className="craditNumber"> 7253 3256 7895 1245 </p>
                <div className="div2">
                   <h2 className="h-div2"> 5422</h2>
                   <p className="valid">valid <br/> thru</p>
                   <p className='month'>month/year <br/><span className="span"> 11/50</span></p>
                </div>
                <div className="div3">
                 <h2 className="h-div3"> cardholder </h2>
                </div>
                </div>

                <div className='visa1'>
                <img src={Img} className="visa" alt="visa"/>
                </div>
            </div>
         );
    }
}
 
export default Paragrphe;