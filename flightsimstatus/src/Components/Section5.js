import React, { useState  } from 'react';
import { BasicCSS } from '../CSS/GenerallCSS.js';
import { SectionTop5CSS } from '../CSS/Sections/SectionTop5CSS.js';
import { GreenLED, LEDSegmentDigit4, LEDSegmentDigit8, LEDDisplay20x4 } from './ComponentsParts.js';

function SectionTop5(props){
    return(
      <> 
        <p className={ BasicCSS.sectionHeadline }>Övre sektion 5</p>        
        <div className={ SectionTop5CSS.sectionTop5 }>
            <Section5_1/>
            <Section5_2/>
            <Section5_3/>
            <Section5_4/>
            <Section5_5/>
            <Section5_6/>
        </div>
      </>
    );
}
export default SectionTop5;

let Section5_1 = (props) => {
    return(
        <div className={ SectionTop5CSS.section5_1 } id="section5_1TopCorner"> 
            <section className={ SectionTop5CSS.section5_1__LEDContainer }>
                <section className={ SectionTop5CSS.section5_1LEDContainer__rowdTop }>
                    <GreenLED test={ '1' }/>
                    <GreenLED test={ '2' }/>
                    <GreenLED test={ '3' }/>
                    <GreenLED test={ '4' }/>              
                    <GreenLED test={ '5' }/>
                    <GreenLED test={ '6' }/>
                </section>
                <section className={ SectionTop5CSS.section5_1LEDContainer__rowdMiddle }>
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
                <section className={ SectionTop5CSS.section5_1LEDContainer__rowdBottom }>
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

let Section5_2 = (props) => {
    return(
        <div className={ SectionTop5CSS.section5_2 }>
            <LEDDisplay20x4
                strRow1={ '11111111111111111111' }
                strRow2={ '11111111111111111111' }
                strRow3={ '11111111111111111111' }
                strRow4={ '11111111111111111111' }
            />
        </div>
    );
}
let Section5_3 = (props) => {
    return(
        <div className={ SectionTop5CSS.section5_3 }>
            efwsdvdsa
        </div>
    );
}
let Section5_4 = (props) => {
    return(
        <div className={ SectionTop5CSS.section5_4 }>
            efwsdvdsa
        </div>
    );
}
let Section5_5 = (props) => {
    return(
        <div className={ SectionTop5CSS.section5_5 }>
            efwsdvdsa
        </div>
    );
}
let Section5_6 = (props) => {
    return(
        <div className={ SectionTop5CSS.section5_6 } id="section5_6TopCorner">
           <section className={ SectionTop5CSS.section5_6__LEDContainer }>
                <section className={ SectionTop5CSS.section5_6LEDContainer__rowdTop }>
                    <GreenLED test={ '1' }/>
                    <GreenLED test={ '2' }/>
                    <GreenLED test={ '3' }/>
                    <GreenLED test={ '4' }/>              
                    <GreenLED test={ '5' }/>
                    <GreenLED test={ '6' }/>
                </section>
                <section className={ SectionTop5CSS.section5_6LEDContainer__rowdMiddle }>
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
                <section className={ SectionTop5CSS.section5_6LEDContainer__rowdBottom }>
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