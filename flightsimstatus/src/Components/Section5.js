import React, { useState  } from 'react';
import { GreenLED, LEDSegmentDigit4, LEDSegmentDigit8, LEDDisplay20x4 } from './ComponentsParts.js';
import { SectionsHeadContainersCSS, SectionsHeadpartsCSS, SectionsSpecialRoulesCSS } from '../CSS/SectionsCSS.js';

function SectionTop5(props){
    return(
      <> 
        <p className="sectionHeadline">Övre sektion 5</p>        
        <div className={ SectionsHeadContainersCSS.sectionTop5 }>
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
        <div className={ SectionsHeadpartsCSS.section5_1 } id="section5_1TopCorner"> 
            <section className={ SectionsSpecialRoulesCSS.section5_1__LEDContainer }>
                <section className={ SectionsSpecialRoulesCSS.LEDContainer__rowdTop5_1 }>
                    <GreenLED test={ '1' }/>
                    <GreenLED test={ '2' }/>
                    <GreenLED test={ '3' }/>
                    <GreenLED test={ '4' }/>              
                    <GreenLED test={ '5' }/>
                    <GreenLED test={ '6' }/>
                </section>
                <section className={ SectionsSpecialRoulesCSS.LEDContainer__rowdMiddle5_1 }>
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
                <section className={ SectionsSpecialRoulesCSS.LEDContainer__rowdBottom5_1 }>
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
        <div className={ SectionsHeadpartsCSS.section5_2 }>
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
        <div className={ SectionsHeadpartsCSS.section5_3 }>
            efwsdvdsa
        </div>
    );
}
let Section5_4 = (props) => {
    return(
        <div className={ SectionsHeadpartsCSS.section5_4 }>
            efwsdvdsa
        </div>
    );
}
let Section5_5 = (props) => {
    return(
        <div className={ SectionsHeadpartsCSS.section5_5 }>
            efwsdvdsa
        </div>
    );
}
let Section5_6 = (props) => {
    return(
        <div className={ SectionsHeadpartsCSS.section5_6 } id="section5_6TopCorner">
           <section className={ SectionsSpecialRoulesCSS.section5_6__LEDContainer }>
                <section className={ SectionsSpecialRoulesCSS.LEDContainer__rowdTop5_6 }>
                    <GreenLED test={ '1' }/>
                    <GreenLED test={ '2' }/>
                    <GreenLED test={ '3' }/>
                    <GreenLED test={ '4' }/>              
                    <GreenLED test={ '5' }/>
                    <GreenLED test={ '6' }/>
                </section>
                <section className={ SectionsSpecialRoulesCSS.LEDContainer__rowdMiddle5_6 }>
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
                <section className={ SectionsSpecialRoulesCSS.LEDContainer__rowdBottom5_6 }>
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