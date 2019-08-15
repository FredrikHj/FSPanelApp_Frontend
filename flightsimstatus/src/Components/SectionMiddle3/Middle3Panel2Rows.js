import React, { useState  } from 'react';
import { SectionMiddle3CSS } from '../../CSS/Sections/SectionMiddle3CSS.js';
import { GreenLED, RedLED, SPDTVertical, SPDTHorizontal, LEDSegmentDigit4, LEDSegmentDigit8, RotarySpdt, RotaryEncorder, PushBtnCircle } from '../ComponentsParts.js';

export let Middle3Panel2Row1 = (props) => {
    let fsDataApi = props.fsDataApi;
    console.log(fsDataApi);
    
    return(
        <section className={ SectionMiddle3CSS.section3_2Row1 }>
            <GreenLED commandName={ 'Name' }/>
            <div className={ SectionMiddle3CSS.section3_2Row1_PushBtn2To3_5To6 }>
                <div><PushBtnCircle commandName={ 'Name' } push={0.8} /></div>
                <div><PushBtnCircle commandName={ 'Name' } push={0.8} /></div>
            </div>

            <div className={ SectionMiddle3CSS.section3_2Row1_HorizontalSpdt4 }><SPDTHorizontal commandName={ 'Name' }  spdtStatus={fsDataApi.test }/></div>
        
        <div className={ SectionMiddle3CSS.section3_2Row1_PushBtn2To3_5To6 }>
                <div><PushBtnCircle commandName={ 'Name' } push={0.8} /></div>
                <div><PushBtnCircle commandName={ 'Name' } push={0.8} /></div>
            </div>
            <GreenLED commandName={ 'Name' }/>
        </section>
    );
}

export let Middle3Panel2Row2 = (props) => {
    let fsDataApi = props.fsDataApi;
    return(
        <section className={ SectionMiddle3CSS.section3_2Row2 }>
            <div className={ SectionMiddle3CSS.section3_2Row2_VerticalSpdt1_2 }>
                <div className={ SectionMiddle3CSS.section3_2Row2_VerticalSpdt1_6 }><SPDTVertical commandName={ 'Name' } spdtStatus={fsDataApi.test }/></div>
                <div className={ SectionMiddle3CSS.section3_2Row2_VerticalSpdt2_5 }><SPDTVertical commandName={ 'Name' } spdtStatus={fsDataApi.test }/></div>
            </div>
            <section className={ SectionMiddle3CSS.section3_2Row2_PushBtn2To4_9To10Container }>
                <div className={ SectionMiddle3CSS.section3_2Row2_PushBtn2To4_9To10 }>
                    <div><PushBtnCircle commandName={ 'Name' } push={0.8} /></div>
                    <div><PushBtnCircle commandName={ 'Name' } push={0.8} /></div>
                </div>
                <div className={ SectionMiddle3CSS.section3_2Row2_PushBtn2To4_9To10 }>
                    <div><PushBtnCircle commandName={ 'Name' } push={0.8} /></div>
                    <div><PushBtnCircle commandName={ 'Name' } push={0.8} /></div>
                </div>
            </section>
            <div className={ SectionMiddle3CSS.section3_2Row2_VerticalSpdt5_6 }>
                <div className={ SectionMiddle3CSS.section3_2Row2_VerticalSpdt2_5 }><SPDTVertical commandName={ 'Name' } spdtStatus={fsDataApi.test }/></div>
                <div className={ SectionMiddle3CSS.section3_2Row2_VerticalSpdt1_6 }><SPDTVertical commandName={ 'Name' } spdtStatus={fsDataApi.test }/></div>
            </div>
            <div className={ SectionMiddle3CSS.section3_2Row2_PushBtn7To8 }>
                    <div><PushBtnCircle commandName={ 'Name' } push={0.8} /></div>
                    <div><PushBtnCircle commandName={ 'Name' } push={0.8} /></div>
            </div>
        </section>        
    );
}
export let Middle3Panel2Row3 = (props) => {
    let fsDataApi = props.fsDataApi;
    return(
        <section className={ SectionMiddle3CSS.section3_2Row3 }>
            <div className={ SectionMiddle3CSS.section3_2Row3_RotarySpdt1To2_7To8Container }>
                <div className={ SectionMiddle3CSS.section3_2Row3_RotarySpdt1To2_7To8 }>                 
                    <div className={ SectionMiddle3CSS.section3_2Row3_RotarySpdt1_8 } >
                        <RotarySpdt 
                            rotarySpdfPosStr1= { ' Name = 1d' }
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
                    <div>
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
                </div>
                <div className={ SectionMiddle3CSS.section3_2Row3_RotarySpdt1To2_7To8 }>  
                    <div className={ SectionMiddle3CSS.section3_2Row3_RotarySpdt1_8 }>
                        <RotarySpdt
                            rotarySpdfPosStr1= { ' Name = 1'  } 
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
            </div>

            <div className={ SectionMiddle3CSS.section3_2Row3_PushBtn3To4_9Container }>
                <div className={ SectionMiddle3CSS.section3_2Row3_PushBtn3To4_9 }>
                    <div><PushBtnCircle commandName={ 'Name' } push={0.8} /></div>
                    <div><PushBtnCircle commandName={ 'Name' } push={0.8} /></div>
                </div>
                <div><PushBtnCircle commandName={ 'Name' } push={0.8} /></div>
            </div>

            <div className={ SectionMiddle3CSS.section3_2Row3_RotarySpdt5To6_10To11 }>  

                <div className={ SectionMiddle3CSS.section3_2Row3_RotarySpdt5To6_11To12Container }>
                    <div className={ SectionMiddle3CSS.section3_2Row3_RotarySpdt1To2_7To8 }>                 
                        <div>
                            <RotarySpdt rotarySpdfPosStr1= { 'Name = 1' }
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
                        <div className={ SectionMiddle3CSS.section3_2Row3_RotarySpdt6_11 }>
                        <RotarySpdt
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
                            rotaryStatus={ fsDataApi.rotaryStatus }/></div>
                    </div>

                    <div className={ SectionMiddle3CSS.section3_2Row3_RotarySpdt1To2_7To8 }>  
                        <div>
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
                        <div className={ SectionMiddle3CSS.section3_2Row3_RotarySpdt6_11 }>
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
                    </div>
                </div>
                <div  className={ SectionMiddle3CSS.section3_2Row3_RotarySpdt12 }>
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
            </div>
        </section>
    );
}