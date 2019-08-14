import React, { useState  } from 'react';
import { SectionMiddle3CSS } from '../../CSS/Sections/SectionMiddle3CSS.js';
import { GreenLED, RedLED, SPDTVertical, SPDTHorizontal, LEDSegmentDigit4, LEDSegmentDigit8, RotarySpdt, RotaryEncorder, PushBtnCircle } from '../ComponentsParts.js';

export let Middle3Panel1Row1 = (props) => {
    let fsDataApi = props.fsDataApi;
    console.log(fsDataApi);
    
    return(
        <div className={ SectionMiddle3CSS.section3_1Row1 }>
            <div className={ SectionMiddle3CSS.section3_1Row1_4xSpdtContainer }>
                <div className={ SectionMiddle3CSS.section3_1Row1_1xSpdt }>
                    <div><SPDTVertical commandName={ 'Name' } spdtStatus={fsDataApi.test }/></div>
                </div>
                <div className={ SectionMiddle3CSS.section3_1Row1_2To4Spdt }>
                    <div><SPDTVertical commandName={ 'Name' } spdtStatus={fsDataApi.test }/></div>
                    <div><SPDTVertical commandName={ 'Name' } spdtStatus={fsDataApi.test }/></div>
                    <div><SPDTVertical commandName={ 'Name' } spdtStatus={fsDataApi.test }/></div>
                </div>
            </div>
            <div className={ SectionMiddle3CSS.section3_1Row1_2xRotarySpdt1xSpdt }>
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
                <div><SPDTHorizontal commandName={ 'Name' } spdtStatus={fsDataApi.test }/></div>
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
            </div>
            <div className={ SectionMiddle3CSS.section3_1Row1_2xPushBtns }>
                <div><PushBtnCircle commandName={ 'Name' } push={0.8} /></div>
                <div><PushBtnCircle commandName={ 'Name' } push={0.8} /></div>
            </div>
        </div>          
    );
}

export let Middle3Panel1Row2 = (props) => {
    let fsDataApi = props.fsDataApi;
    return(
        <div className={ SectionMiddle3CSS.section3_1Row2 }>
            <div><SPDTVertical commandName={ 'Name' } spdtStatus={fsDataApi.test }/></div>
        </div>
    );
}
export let Middle3Panel1Row3 = (props) => {
    let fsDataApi = props.fsDataApi;
    return(
        <div className={ SectionMiddle3CSS.section3_1Row3 }>
            <div className={ SectionMiddle3CSS.section3_1Row3_2RotarySpdt1xPushBtn }>
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
                <div className={ SectionMiddle3CSS.section3_1Row3_PushBtn2 }><PushBtnCircle commandName={ 'Name' } push={0.8} /></div>
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
                    rotaryStatus={ fsDataApi.rotaryStatus }/>
            </div>

            <div className={ SectionMiddle3CSS.section3_1Row3_Spdt4 }>
                <SPDTVertical commandName={ 'Name' } spdtStatus={fsDataApi.test }/>
            </div>

            <div className={ SectionMiddle3CSS.section3_1Row3PushBtn5To6 }>
                <div><PushBtnCircle commandName={ 'Name' } push={0.8} /></div>
                <div><PushBtnCircle commandName={ 'Name' } push={0.8} /></div>
            </div>
            <div className={ SectionMiddle3CSS.section3_1Row3_PushBtn7 }><PushBtnCircle commandName={ 'Name' } push={0.8} /></div>
            <div className={ SectionMiddle3CSS.section3_1Row3PushBtn8To9 }>
                <div><PushBtnCircle commandName={ 'Name' } push={0.8} /></div>
                <div><PushBtnCircle commandName={ 'Name' } push={0.8} /></div>
            </div>        
        </div>
    );
}
export let Middle3Panel1Row4 = (props) => {
    let fsDataApi = props.fsDataApi;
    return(
        <div className={ SectionMiddle3CSS.section3_1Row4 }>
            <div className={ SectionMiddle3CSS.section3_1Row4Push1To2 }>
                <div><PushBtnCircle commandName={ 'Name' } push={0.8} /></div>
                <div><PushBtnCircle commandName={ 'Name' } push={0.8} /></div>
            </div>
            <div className={ SectionMiddle3CSS.section3_1Row3_Rotary3 }>
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
            </div>
            <div className={ SectionMiddle3CSS.section3_1Row4Push4To6 }>
                <div><PushBtnCircle commandName={ 'Name' } push={0.8} /></div>
                <div><PushBtnCircle commandName={ 'Name' } push={0.8} /></div>
                <div><PushBtnCircle commandName={ 'Name' } push={0.8} /></div>
            </div>
        </div>
    );
}
export let Middle3Panel1Row5 = (props) => {
    let fsDataApi = props.fsDataApi;
    return(
        <div className={ SectionMiddle3CSS.section3_1Row5 }>
            <div className={ SectionMiddle3CSS.section3_1Row5_Spdt1To3 }>
                <div><SPDTVertical commandName={ 'Name' } spdtStatus={fsDataApi.test }/></div>
                <div><SPDTVertical commandName={ 'Name' } spdtStatus={fsDataApi.test }/></div>
                <div><SPDTVertical commandName={ 'Name' } spdtStatus={fsDataApi.test }/></div>
            </div>
            <div className={ SectionMiddle3CSS.section3_1Row5_PushBtn4To10Container }>    
                <div className={ SectionMiddle3CSS.section3_1Row5_PushBtn4To6 }>
                    <div><PushBtnCircle commandName={ 'Name' } push={0.8} /></div>
                    <div><PushBtnCircle commandName={ 'Name' } push={0.8} /></div>
                    <div><PushBtnCircle commandName={ 'Name' } push={0.8} /></div>
                </div>
                <div className={ SectionMiddle3CSS.section3_1Row5_PushBtn7 }>
                    <PushBtnCircle commandName={ 'Name' } push={0.8} />
                </div>
                <div className={ SectionMiddle3CSS.section3_1Row5_PushBtn8To10 }>
                    <div><PushBtnCircle commandName={ 'Name' } push={0.8} /></div>
                    <div><PushBtnCircle commandName={ 'Name' } push={0.8} /></div>
                    <div><PushBtnCircle commandName={ 'Name' } push={0.8} /></div>
                </div>
            </div>
        </div>
    );
}