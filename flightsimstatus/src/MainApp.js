import React, { PureComponent  } from 'react';
import { BasicCSS } from './CSS/GenerallCSS.js';
import axios from 'axios';

import SectionTop5 from './Components/Section5.js';
import SectionTop4 from './Components/Section4.js';
import SectionMiddle3 from './Components/Section3.js';
import {SectionLeft2, SectionLeft1 } from './Components/SectionLeft1&2.js';

  // Name for the commands - See the file "FSX Panel - Elektronikkort Komponenter --> Komponenter och dess kommandon" for names for the correspondings commands! 
import dbFlightCommandsName from './CommandsName.js'; 

let fsDataApi = {};
// FS Status ================================================================================

class MainApp extends PureComponent  {
  constructor(props) {
    super(props);
      this.state = {
        restAPIUrl: '',
        fsDataValuesApi: {},
        fsCommandsNameApi: dbFlightCommandsName,
      };
  }
  componentDidMount() {
    //setInterval(this.getFSData, 50);
  }

  getFSData = () => {
    axios.get('http://localhost:3001/FSData').
    then(response => {
      // Store the incomming API data in a object
    let fsDataApi = response.data;

    this.setState({fsDataValuesApi: fsDataApi});
    }).
    catch(error => {
      //console.log(error.response);
    });
  }
  render() {
    console.log(this.state.fsCommandsNameApi);
    
    return (
      <div className={ BasicCSS.outerFrame }>
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
          <SectionMiddle3
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