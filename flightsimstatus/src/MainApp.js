import React, { PureComponent  } from 'react';
import { BasicCSS, SectionsCSS } from './CSS/GenerallCSS.js';
import axios from 'axios';

import ActiveFSParts from './Components/ActiveFSParts.js';
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
        <header className={ BasicCSS.header }>
          <div>
            <ActiveFSParts/>
          </div>
          <div></div>
          <div><p className={ BasicCSS.mainHeadLine }>FlightSim Status</p></div>
          <div></div>
        </header>
        <main>
          <div className={ SectionsCSS.sectionContainer5 }>
            <SectionTop5 
              thisState={ this.state }
            />
          </div>
          <div className={ SectionsCSS.sectionContainer4 }>
            <SectionTop4
              thisState={ this.state }
            />
          </div>
          <div className={ SectionsCSS.sectionContainer3 }>
            <SectionMiddle3
              thisState={ this.state }
            />
          </div>
          <div className={ SectionsCSS.sectionContainer2 }>
            <SectionLeft2
              thisState={ this.state }
            />
          </div>
          <div className={ SectionsCSS.sectionContainer1 }>
            <SectionLeft1
              thisState={ this.state }
            />  
          </div>
        </main>
      </div>
    );
  }
}

export default MainApp;