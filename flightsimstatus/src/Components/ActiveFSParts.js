import React, { useState  } from 'react';
import { BasicCSS, SectionsCSS } from '../CSS/GenerallCSS.js';
import { GreenLED, RedLED } from './ComponentsParts.js';

function ActiveFSParts(props){   
    return(
        <section>
            <p className={ SectionsCSS.sectionActiveFSParts }>Aktiv</p>
            <div>
                <p>FS Server</p> <div>{('namn' === '1') ? <GreenLED/> : <RedLED/> }</div> 
                <p>FSUIPC</p> <div>{('namn' === '1') ? <GreenLED/> : <RedLED/> }</div> 
                <p>FS 
                    Styrkort</p> <div>{('namn' === '1') ? <GreenLED/> : <RedLED/> }</div> 
            </div>
        </section>
    );
}
export default ActiveFSParts;