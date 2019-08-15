import React, { useState  } from 'react';
import { SectionMiddle3CSS } from '../../CSS/Sections/SectionMiddle3CSS.js';
import { GreenLED, RedLED, SPDTVertical, SPDTHorizontal, LEDSegmentDigit4, LEDSegmentDigit8, RotarySpdt, RotaryEncorder, PushBtnCircle } from '../ComponentsParts.js';

export let Middle3Panel3Row1 = (props) => {
    let fsDataApi = props.fsDataApi;
    console.log(fsDataApi);
    
    return(
        <section className={ SectionMiddle3CSS.section3_3Row1 }>
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
            <div className={ SectionMiddle3CSS.section3_3Row1VerticalSpdt2 }><SPDTVertical commandName={ 'Name' } spdtStatus={fsDataApi.test }/></div>
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
        </section>
    );
}

export let Middle3Panel3Row2 = (props) => {
    let fsDataApi = props.fsDataApi;
    return(
        <section className={ SectionMiddle3CSS.section3_3Row2 }>
            <div className={ SectionMiddle3CSS.section3_1Row3_Spdt4 }><SPDTVertical commandName={ 'Name' } spdtStatus={fsDataApi.test }/></div>
            <div className={ SectionMiddle3CSS.section3_1Row3_Spdt4 }><SPDTVertical commandName={ 'Name' } spdtStatus={fsDataApi.test }/></div>
            <div className={ SectionMiddle3CSS.section3_1Row3_Spdt4 }><SPDTVertical commandName={ 'Name' } spdtStatus={fsDataApi.test }/></div>
        </section>
    );
}
export let Middle3Panel3Row3 = (props) => {
    let fsDataApi = props.fsDataApi;
    return(
        <section className={ SectionMiddle3CSS.section3_3Row3 }>
            <div className={ SectionMiddle3CSS.section3_1Row3_Spdt4 }><SPDTVertical commandName={ 'Name' } spdtStatus={fsDataApi.test }/></div>
            <div className={ SectionMiddle3CSS.section3_1Row3_Spdt4 }><SPDTVertical commandName={ 'Name' } spdtStatus={fsDataApi.test }/></div>
            <div className={ SectionMiddle3CSS.section3_1Row3_Spdt4 }><SPDTVertical commandName={ 'Name' } spdtStatus={fsDataApi.test }/></div>
        </section>
    );
}