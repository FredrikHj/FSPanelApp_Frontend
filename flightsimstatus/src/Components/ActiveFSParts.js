import React, { useState  } from 'react';
import { BasicCSS, SectionsCSS } from '../CSS/GenerallCSS.js';
import { GreenLED, RedLED } from './ComponentsParts.js';

function ActiveFSParts(props){   
    return(
        <section>
            <p className={ SectionsCSS.sectionActiveFSParts }>FS Status --></p><span>{ }</span> 
            <div>
                <table id="fsActiveTable">
                    <thead>
                        <tr>
                            <th rowSpan="2">FS Server</th>
                            <th rowSpan="2">FSUIPC</th>
                            <th colSpan="6">FS Styrkort</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Mega - D1</td>
                            <td>Mega - D2</td>
                            <td>Mega - D3</td>
                            <td>Mega - D4</td>
                            <td>Pidget LED - 1</td>
                            <td>Pidget LED - 2</td>
                        </tr>
                        <tr>
                            <td>fersd</td>
                            <td>feef</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <p></p> <div>{('namn' === '1') ? <GreenLED commandName={ 'Name' }/> : <RedLED commandName={ 'Name' }/> }</div> 
                <p></p> <div>{('namn' === '1') ? <GreenLED commandName={ 'Name' }/> : <RedLED commandName={ 'Name' }/> }</div> 
                <p></p> <div>{('namn' === '1') ? <GreenLED commandName={ 'Name' }/> : <RedLED commandName={ 'Name' }/> }</div> 
            </div>
        </section>
    );
}
export default ActiveFSParts;