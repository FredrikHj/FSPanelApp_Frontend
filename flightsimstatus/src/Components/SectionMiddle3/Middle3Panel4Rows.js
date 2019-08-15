import React, { useState  } from 'react';
import { SectionMiddle3CSS } from '../../CSS/Sections/SectionMiddle3CSS.js';
import { GreenLED, RedLED, SPDTVertical, SPDTHorizontal, LEDSegmentDigit4, LEDSegmentDigit8, RotarySpdt, RotaryEncorder, PushBtnCircle } from '../ComponentsParts.js';

export let Middle3Panel4Row1 = (props) => {
    let fsDataApi = props.fsDataApi;
    console.log(fsDataApi);
    
    return(
        <section className={ SectionMiddle3CSS.section3_4Row1 }>
            <RotarySpdt rotaryStatus={ fsDataApi.rotaryStatus }/>
            <div className={ SectionMiddle3CSS.section3_4Row1Led2To3_LedSegment4 }>
                <div className={ SectionMiddle3CSS.section3_4Row1Led2To3Container }>
                    <GreenLED commandName={ 'Name' }/>
                    <GreenLED commandName={ 'Name' }/>
                </div>
                <div className={ SectionMiddle3CSS.section3_4Row1LedSegment4 }>
                    <LEDSegmentDigit8
                        segmentName={ 'Name' }
                        segmentsValue={ '0.0.0.0.0.0.0.0' }
                    />
                </div> 
            </div> 
        </section>
    );
}

export let Middle3Panel4Row2 = (props) => {
    let fsDataApi = props.fsDataApi;
    return(
        <section className={ SectionMiddle3CSS.section3_4Row2 }>
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
                rotaryStatus={ fsDataApi.rotaryStatus }
            />
            <section className={ SectionMiddle3CSS.section3_4Row2VerticalSpdt2To4 }>
                <div className={ SectionMiddle3CSS.section3_3Row1VerticalSpdt2 }><SPDTVertical commandName={ 'Name' } spdtStatus={fsDataApi.test }/></div>
                <div className={ SectionMiddle3CSS.section3_3Row1VerticalSpdt2 }><SPDTVertical commandName={ 'Name' } spdtStatus={fsDataApi.test }/></div>
                <div className={ SectionMiddle3CSS.section3_3Row1VerticalSpdt2 }><SPDTVertical commandName={ 'Name' } spdtStatus={fsDataApi.test }/></div>
            </section>
        </section>
    );
}
export let Middle3Panel4Row3 = (props) => {
    let fsDataApi = props.fsDataApi;
    return(
        <section className={ SectionMiddle3CSS.section3_4Row3 }>
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
                rotaryStatus={ fsDataApi.rotaryStatus }
            />
            <section className={ SectionMiddle3CSS.section3_4Row3VerticalSpdt2To3 }>
                <div className={ SectionMiddle3CSS.section3_3Row1VerticalSpdt2 }><SPDTVertical commandName={ 'Name' } spdtStatus={fsDataApi.test }/></div>
                <div className={ SectionMiddle3CSS.section3_3Row1VerticalSpdt2 }><SPDTVertical commandName={ 'Name' } spdtStatus={fsDataApi.test }/></div>
            </section>
        </section>
    );
}