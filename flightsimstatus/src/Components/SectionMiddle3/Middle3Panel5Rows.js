import React, { useState  } from 'react';
import { SectionMiddle3CSS } from '../../CSS/Sections/SectionMiddle3CSS.js';
import { GreenLED, RedLED, SPDTVertical, SPDTHorizontal, LEDSegmentDigit4, LEDSegmentDigit8, RotarySpdt, RotaryEncorder, PushBtnCircle } from '../ComponentsParts.js';

export let Middle3Panel5Row1 = (props) => {
    let fsDataApi = props.fsDataApi;
    console.log(fsDataApi);
    
    return(
        <section className={ SectionMiddle3CSS.section3_5Row1 }>
            <GreenLED commandName={ 'Name' }/>
            <GreenLED commandName={ 'Name' }/>
            <GreenLED commandName={ 'Name' }/>
            <div ><SPDTVertical commandName={ 'Name' } spdtStatus={fsDataApi.test }/></div>
        </section> 
    );
}

export let Middle3Panel5Row2 = (props) => {
    let fsDataApi = props.fsDataApi;
    return(
        <section className={ SectionMiddle3CSS.section3_5Row2 }>
            <div>
                <LEDSegmentDigit8
                    segmentName={ 'Name' }
                    segmentsValue={ '0.0.0.0.0.0.0.0' }
                />
            </div>
            <div>
                <GreenLED commandName={ 'Name' }/>
            </div>
        </section>
    );
}
export let Middle3Panel5Row3 = (props) => {
    let fsDataApi = props.fsDataApi;
    return(
        <section className={ SectionMiddle3CSS.section3_5Row3 }>
            <div>
                <LEDSegmentDigit8
                    segmentName={ 'Name' }
                    segmentsValue={ '0.0.0.0.0.0.0.0' }
                />
            </div>
            <div>
                <GreenLED commandName={ 'Name' }/>
            </div>
        </section>
    );
}
export let Middle3Panel5Row4 = (props) => {
    let fsDataApi = props.fsDataApi;
    return(
        <section className={ SectionMiddle3CSS.section3_5Row4 }>
            <div className={ SectionMiddle3CSS.section3_5Row4RotaryEncorder1To2 }>
                <div>
                    <RotaryEncorder 
                    commandName={ 'Name' }
                    direction= { '360' }/>
                </div>
                <div>
                    <RotaryEncorder
                    commandName={ 'Name' }
                    direction= { '360' }/>
                </div>
            </div>
            <div className={ SectionMiddle3CSS.section3_5Row4VerticalSpdt3 }><SPDTVertical commandName={ 'Name' } spdtStatus={fsDataApi.test }/></div>         
        </section>
    );
}