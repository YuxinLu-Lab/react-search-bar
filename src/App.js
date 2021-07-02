import './App.css';
import React, { Component } from 'react';
import Autocomplete from './Autocomplete';

class App extends Component{
  render () {
    return (
     <div className="App">
       <Autocomplete
          suggestions = {['US', 'China', 'UK', 'Japan', 'Germany', 'Canada']}
        />
     </div>
  );
  }
}

export default App;
