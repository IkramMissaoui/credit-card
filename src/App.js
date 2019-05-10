import React, { Component } from 'react';
import Header from './component/Header/Header.js';
import Image from './component/imagee/imagee.js';
import Paragrphe from './component/Paragraphe/Paragrphe.js';
import './App.css'
class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div id="body">
      <Header />
      <Image />
      <Paragrphe />
      </div>
     );
  }
}
 
export default App;