import React, { PureComponent  } from 'react';
import { BasicCSS, SectionsCSS } from './CSS/GenerallCSS.js';
import axios from 'axios';

import ActiveFSParts from './Components/ActiveFSParts.js';
import Top5 from './Components/Section5.js';
import Top4 from './Components/Section4.js';
import Middle3 from './Components/SectionMiddle3/MainMiddle3.js';
import { Left1, Left2 } from './Components/SectionLeft/MainLeft.js';

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
    let sendFsDataApi = this.state;

    return (
      <div className={ BasicCSS.outerFrame }>
        <header className={ BasicCSS.header }>
          <div>
            <ActiveFSParts/>
          </div>
            <p className={ BasicCSS.mainHeadLine }>FlightSim Status</p>
        </header>
        <main>
{/*           <div className={ SectionsCSS.sectionContainer5 }>
            <SectionTop5 
              importedFsDataApi={ sendFsDataApi }
            />
          </div>
          <div className={ SectionsCSS.sectionContainer4 }>
            <SectionTop4
              importedFsDataApi={ sendFsDataApi }
            />
          </div>*/}
          <div className={ SectionsCSS.sectionContainer3 }>
            <Middle3
              importedFsDataApi={ sendFsDataApi }
            />
          </div>
          <div className={ SectionsCSS.sectionContainer2 }>
            <Left2
              importedFsDataApi={ sendFsDataApi }
            />
          </div> 
          <div className={ SectionsCSS.sectionContainer1 }>
            <Left1 
              importedFsDataApi={ sendFsDataApi }
            />  
          </div>
        </main>
      </div>
    );
  }
}

export default MainApp;