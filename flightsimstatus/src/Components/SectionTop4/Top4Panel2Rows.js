import React, { useState  } from 'react';
import { SectionTop4CSS } from '../../CSS/Sections/SectionTop4CSS.js';
import { GreenLED, RedLED, SPDTVertical, SPDTHorizontal, LEDSegmentDigit4, LEDSegmentDigit8, RotarySpdt, RotaryEncorder, PushBtnCircle } from '../ComponentsParts.js';

export let Top4Panel2Row1 = (props) => {
    let fsDataApi = props.fsDataApi;
    return(
        <section className={ SectionTop4CSS.section4_2Row1 }>
            <LEDSegmentDigit8
                segmentName={ 'Name' }
                segmentsValue={ '0.0.0.0.0.0.0.0' }
            />
            <section className={ SectionTop4CSS.section4_2Row1Middle }>
                <GreenLED commandName={ 'Name' }/>
                <GreenLED commandName={ 'Name' }/>
            </section>
            <LEDSegmentDigit8
                segmentName={ 'Name' }
                segmentsValue={ '0.0.0.0.0.0.0.0' }
            />
        </section>
    );
}
export let Top4Panel2Row2 = (props) => {
    let fsDataApi = props.fsDataApi;
    return(
        <section className={ SectionTop4CSS.section4_2Row2 }>
            <section className={ SectionTop4CSS.section4_2Row22xledSpdf }>
                <div className={ SectionTop4CSS.section4_2Row2Led1 }>
                    <GreenLED commandName={ 'Name' }/>       
                </div>
                <div className={ SectionTop4CSS.section4_2Row2Spdf2 }>
                    <SPDTVertical commandName={ 'Name' } spdtStatus={fsDataApi.test } />
                </div>
                <div className={ SectionTop4CSS.section4_2Row2Led3 }>
                    <GreenLED commandName={ 'Name' }/>       
                </div>
            </section>
            <section className={ SectionTop4CSS.section4_2Row2RotaryEncorder }>
                <RotaryEncorder 
                    commandName={ 'Name' }
                    direction= { '-360' }/>
                <RotaryEncorder 
                    commandName={ 'Name' }
                    direction= { '360' }/>
            </section>
            <div className={ SectionTop4CSS.section4_2Row2LeftRotarySpdt }> 
                <RotarySpdt 
                    rotarySpdfPosStr1= { ' Name = 1' }
                    rotarySpdfPosStr2= { ' Name = 2' }
                    rotarySpdfPosStr3= { ' Name = 3' }
                    rotarySpdfPosStr4= { ' Name = 4' }
                    rotarySpdfPosStr5= { ' Name = 5' }
                    rotarySpdfPosStr6= { ' Name = 6' }
                    rotarySpdfPosStr7= { ' Name = 7' }
                    rotarySpdfPosStr8= { ' Name = 8' }
                    rotarySpdfPosStr9= { ' Name = 9' }
                    rotarySpdfPosStr10= { ' Name = 10' }
                    rotarySpdfPosStr11= { ' Name = 11' }
                    rotarySpdfPosStr12= { ' Name = 12' }
                    rotaryStatus={ props.rotaryStatus }
                />
            </div>
        </section>
    );
}