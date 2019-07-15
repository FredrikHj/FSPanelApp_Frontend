
import React, { PureComponent  } from 'react';

import axios from 'axios';


import SectionTop5 from './Components/Section5.js';
import SectionTop4 from './Components/Section4.js';
import {SectionLeft2, SectionLeft1} from './Components/SectionLeft1&2.js';

let fsDataApi = {};
// FS Status ================================================================================

class MainApp extends PureComponent  {
  constructor(props) {
    super(props);
      this.state = {
        restAPIUrl: '',
        fsApi: {},
      };
  }
  componentDidMount() {
    setInterval(this.getFSData, 50);
  }
  getFSData = () => {
    axios.get('http://localhost:3001/FSData').
    then(response => {
    let incommingData = response.data;
    let storedResData = response.data;
    // Checck for new data
    console.log(incommingData);

    // Store the incomming API data in a object
    fsDataApi = incommingData;
    this.setState({fsApi: fsDataApi});
    }).
    catch(error => {
      console.log(error.response);
    });
  }
  render() {  
    return (
      <div className="outerFrame">
        <header>
          <p className="mainHeadLine">FlightSim Status</p>
        </header>
        <main>
          <SectionTop5
            thisState={ this.state }
          />
          <SectionTop4
            thisState={ this.state }
          />
          <SectionLeft2
            thisState={ this.state }
          />
          <SectionLeft1
            thisState={ this.state }
          />  
        </main>
      </div>
    );
  }
}

export default MainApp;