import React, { useState  } from 'react';
import { GreenLED } from './ComponentsParts.js';

function SectionTop5(props){
    return(
      <section className="sectionContainer"> 
        <p className="sectionHeadline">Övre sektion 5</p>        
        <div className="sectionTop5">
            <Section5_1/>
            <Section5_2/>
            <Section5_3/>
            <Section5_4/>
            <Section5_5/>
            <Section5_6/>
        </div>
      </section>
    );
  }
  export default SectionTop5;

  let Section5_1 = () => {
    return(
        <div className="section5_1"> 
            <section className="section5_1__LEDContainer">
                <section className="LEDContainer__rowdRTop5_1">
                    <GreenLED test={ '1' }/>
                    <GreenLED test={ '2' }/>
                    <GreenLED test={ '3' }/>
                    <GreenLED test={ '4' }/>              
                    <GreenLED test={ '5' }/>
                    <GreenLED test={ '6' }/>
                </section>
                <section className="LEDContainer__rowdRMiddle5_1">
                    <GreenLED test={ '1' }/>
                    <GreenLED test={ '2' }/>
                    <GreenLED test={ '3' }/>
                    <GreenLED test={ '4' }/>              
                    <GreenLED test={ '5' }/>
                    <GreenLED test={ '6' }/>
                    <GreenLED test={ '7' }/>
                    <GreenLED test={ '8' }/>
                    <GreenLED test={ '9' }/>
                </section>
                <section className="LEDContainer__rowdRBottom5_1">
                    <GreenLED test={ '1' }/>
                    <GreenLED test={ '2' }/>
                    <GreenLED test={ '3' }/>
                    <GreenLED test={ '4' }/>              
                    <GreenLED test={ '5' }/>
                    <GreenLED test={ '6' }/>
                    <GreenLED test={ '7' }/>
                    <GreenLED test={ '8' }/>
                    <GreenLED test={ '9' }/>
                    <GreenLED test={ '10' }/>
                    <GreenLED test={ '11' }/>
                </section>
            </section>
        </div>
    );
  }
 


  let Section5_2 = () => {
    return(
        <div className="section5_2">

        </div>
    );
}
let Section5_3 = () => {
    return(
        <div className="section5_3">
            efwsdvdsa
        </div>
    );
}
let Section5_4 = () => {
    return(
        <div className="section5_4">
            efwsdvdsa
        </div>
    );
}
let Section5_5 = () => {
    return(
        <div className="section5_5">
            efwsdvdsa
        </div>
    );
}
let Section5_6 = () => {
    return(
        <div className="section5_6">
           <section className="section5_6__LEDContainer">
                <section className="LEDContainer__rowdRTop5_6">
                    <GreenLED test={ '1' }/>
                    <GreenLED test={ '2' }/>
                    <GreenLED test={ '3' }/>
                    <GreenLED test={ '4' }/>              
                    <GreenLED test={ '5' }/>
                    <GreenLED test={ '6' }/>
                </section>
                <section className="LEDContainer__rowdRMiddle5_6">
                    <GreenLED test={ '1' }/>
                    <GreenLED test={ '2' }/>
                    <GreenLED test={ '3' }/>
                    <GreenLED test={ '4' }/>              
                    <GreenLED test={ '5' }/>
                    <GreenLED test={ '6' }/>
                    <GreenLED test={ '7' }/>
                    <GreenLED test={ '8' }/>
                    <GreenLED test={ '9' }/>
                </section>
                <section className="LEDContainer__rowdRBottom5_6">
                    <GreenLED test={ '1' }/>
                    <GreenLED test={ '2' }/>
                    <GreenLED test={ '3' }/>
                    <GreenLED test={ '4' }/>              
                    <GreenLED test={ '5' }/>
                    <GreenLED test={ '6' }/>
                    <GreenLED test={ '7' }/>
                    <GreenLED test={ '8' }/>
                    <GreenLED test={ '9' }/>
                    <GreenLED test={ '10' }/>
                    <GreenLED test={ '11' }/>
                </section>
            </section>
        </div>
    );
}