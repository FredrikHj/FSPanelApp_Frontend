import React, { useState  } from 'react';
import { SectionsCSS } from '../../CSS/GenerallCSS.js'
import { SectionMiddle3CSS } from '../../CSS/Sections/SectionMiddle3CSS.js';
import { GreenLED, RedLED, SPDTVertical, SPDTHorizontal, LEDSegmentDigit4, LEDSegmentDigit8, RotarySpdt, RotaryEncorder, PushBtnCircle } from '../ComponentsParts.js';
import { Middle3Panel1Row1, Middle3Panel1Row2, Middle3Panel1Row3, Middle3Panel1Row4, Middle3Panel1Row5 } from './Middle3Panel1Rows.js';

function Middle3(props){   
    let fsDataApi = props.importedFsDataApi.fsDataValuesApi;
    console.log(fsDataApi);
    
    return(
        <> 
            <p className={ SectionsCSS.sectionHeadline }>Mitten sektion 3</p>        
            <div className={ SectionMiddle3CSS.section3 }>
                <Middle3Panel1 spdtStatus={ fsDataApi }/>
               {/*  <Middle3Panel2 spdtStatus={ fsDataApi.fsDataValuesApi }/>
                <Middle3Panel3 spdtStatus={ fsDataApi.fsDataValuesApi }/>
                <Middle3Panel4 spdtStatus={ fsDataApi.fsDataValuesApi }/>
                <Middle3Panel5 spdtStatus={ fsDataApi.fsDataValuesApi }/> */}
            </div>
        </>
    );
};
export default Middle3;

// Panel1 ==============================================================
let Middle3Panel1 = (props) => {
    let fsDataApi = props.spdtStatus;
    console.log(fsDataApi);
    
    return(
        <div className={ SectionMiddle3CSS.section3_1 }>
            <Middle3Panel1Row1
                fsDataApi={ fsDataApi }
            />
            <Middle3Panel1Row2
                fsDataApi={ fsDataApi }
            />
            <Middle3Panel1Row3
                fsDataApi={ fsDataApi }
            />
            <Middle3Panel1Row4
                fsDataApi={ fsDataApi }
            />
            <Middle3Panel1Row5
                fsDataApi={ fsDataApi }
            />
        </div>
    );
}
// Panel2 ==============================================================
let Middle3Panel2 = (props) => {
    return(
        <div className={ SectionMiddle3CSS.section3_2 }>
            <section className={ SectionMiddle3CSS.section3_2Row1 }>
                <GreenLED commandName={ 'Name' }/>
                <div className={ SectionMiddle3CSS.section3_2Row1_PushBtn2To3_5To6 }>
                    <div><PushBtnCircle commandName={ 'Name' } push={0.8} /></div>
                    <div><PushBtnCircle commandName={ 'Name' } push={0.8} /></div>
                </div>

                <div className={ SectionMiddle3CSS.section3_2Row1_HorizontalSpdt4 }><SPDTHorizontal commandName={ 'Name' }  spdtStatus={props.spdtStatus.test }/></div>
               
               <div className={ SectionMiddle3CSS.section3_2Row1_PushBtn2To3_5To6 }>
                    <div><PushBtnCircle commandName={ 'Name' } push={0.8} /></div>
                    <div><PushBtnCircle commandName={ 'Name' } push={0.8} /></div>
                </div>
                <GreenLED commandName={ 'Name' }/>
            </section>

            <section className={ SectionMiddle3CSS.section3_2Row2 }>
                <div className={ SectionMiddle3CSS.section3_2Row2_VerticalSpdt1_2 }>
                    <div className={ SectionMiddle3CSS.section3_2Row2_VerticalSpdt1_6 }><SPDTVertical commandName={ 'Name' } spdtStatus={props.spdtStatus.test }/></div>
                    <div className={ SectionMiddle3CSS.section3_2Row2_VerticalSpdt2_5 }><SPDTVertical commandName={ 'Name' } spdtStatus={props.spdtStatus.test }/></div>
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
                    <div className={ SectionMiddle3CSS.section3_2Row2_VerticalSpdt2_5 }><SPDTVertical commandName={ 'Name' } spdtStatus={props.spdtStatus.test }/></div>
                    <div className={ SectionMiddle3CSS.section3_2Row2_VerticalSpdt1_6 }><SPDTVertical commandName={ 'Name' } spdtStatus={props.spdtStatus.test }/></div>
                </div>
                <div className={ SectionMiddle3CSS.section3_2Row2_PushBtn7To8 }>
                        <div><PushBtnCircle commandName={ 'Name' } push={0.8} /></div>
                        <div><PushBtnCircle commandName={ 'Name' } push={0.8} /></div>
                </div>
            </section>

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
                                 rotaryStatus={ props.spdtStatus.rotaryStatus }
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
                                rotaryStatus={ props.spdtStatus.rotaryStatus }
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
                                 rotaryStatus={ props.spdtStatus.rotaryStatus }/>
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
                            rotaryStatus={ props.spdtStatus.rotaryStatus }
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
                                    rotaryStatus={ props.spdtStatus.rotaryStatus }
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
                                rotaryStatus={ props.spdtStatus.rotaryStatus }/></div>
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
                                    rotaryStatus={ props.spdtStatus.rotaryStatus }
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
                                    rotaryStatus={ props.spdtStatus.rotaryStatus }
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
                            rotaryStatus={ props.spdtStatus.rotaryStatus }
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
// Panel3 ==============================================================
let Middle3Panel3 = (props) => {
    return(
        <div className={ SectionMiddle3CSS.section3_3 }>
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
                    rotaryStatus={ props.spdtStatus.rotaryStatus }
                />
                <div className={ SectionMiddle3CSS.section3_3Row1VerticalSpdt2 }><SPDTVertical commandName={ 'Name' } spdtStatus={props.spdtStatus.test }/></div>
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
                    rotaryStatus={ props.spdtStatus.rotaryStatus }
                />
            </section>
            <section className={ SectionMiddle3CSS.section3_3Row2 }>
                <div className={ SectionMiddle3CSS.section3_1Row3_Spdt4 }><SPDTVertical commandName={ 'Name' } spdtStatus={props.spdtStatus.test }/></div>
                <div className={ SectionMiddle3CSS.section3_1Row3_Spdt4 }><SPDTVertical commandName={ 'Name' } spdtStatus={props.spdtStatus.test }/></div>
                <div className={ SectionMiddle3CSS.section3_1Row3_Spdt4 }><SPDTVertical commandName={ 'Name' } spdtStatus={props.spdtStatus.test }/></div>
            </section>
            <section className={ SectionMiddle3CSS.section3_3Row3 }>
                <div className={ SectionMiddle3CSS.section3_1Row3_Spdt4 }><SPDTVertical commandName={ 'Name' } spdtStatus={props.spdtStatus.test }/></div>
                <div className={ SectionMiddle3CSS.section3_1Row3_Spdt4 }><SPDTVertical commandName={ 'Name' } spdtStatus={props.spdtStatus.test }/></div>
                <div className={ SectionMiddle3CSS.section3_1Row3_Spdt4 }><SPDTVertical commandName={ 'Name' } spdtStatus={props.spdtStatus.test }/></div>
            </section>
        </div>
    );
}
// Panel4 ==============================================================
let Middle3Panel4 = (props) => {    
    return(
        <div className={ SectionMiddle3CSS.section3_4 }>
            <section className={ SectionMiddle3CSS.section3_4Row1 }>
                <RotarySpdt rotaryStatus={ props.spdtStatus.rotaryStatus }/>
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
                    rotaryStatus={ props.spdtStatus.rotaryStatus }
                />
                <section className={ SectionMiddle3CSS.section3_4Row2VerticalSpdt2To4 }>
                    <div className={ SectionMiddle3CSS.section3_3Row1VerticalSpdt2 }><SPDTVertical commandName={ 'Name' } spdtStatus={props.spdtStatus.test }/></div>
                    <div className={ SectionMiddle3CSS.section3_3Row1VerticalSpdt2 }><SPDTVertical commandName={ 'Name' } spdtStatus={props.spdtStatus.test }/></div>
                    <div className={ SectionMiddle3CSS.section3_3Row1VerticalSpdt2 }><SPDTVertical commandName={ 'Name' } spdtStatus={props.spdtStatus.test }/></div>
                </section>
            </section>
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
                    rotaryStatus={ props.spdtStatus.rotaryStatus }
                />
               <section className={ SectionMiddle3CSS.section3_4Row3VerticalSpdt2To3 }>
                    <div className={ SectionMiddle3CSS.section3_3Row1VerticalSpdt2 }><SPDTVertical commandName={ 'Name' } spdtStatus={props.spdtStatus.test }/></div>
                    <div className={ SectionMiddle3CSS.section3_3Row1VerticalSpdt2 }><SPDTVertical commandName={ 'Name' } spdtStatus={props.spdtStatus.test }/></div>
                </section>
            </section>
        </div>
    );
}
// Panel5 ==============================================================
let Middle3Panel5 = (props) => {
    return(
        <div className={ SectionMiddle3CSS.section3_5 }>
            <section className={ SectionMiddle3CSS.section3_5Row1 }>
                <GreenLED commandName={ 'Name' }/>
                <GreenLED commandName={ 'Name' }/>
                <GreenLED commandName={ 'Name' }/>
                <div ><SPDTVertical commandName={ 'Name' } spdtStatus={props.spdtStatus.test }/></div>
            </section> 

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
                <div className={ SectionMiddle3CSS.section3_5Row4VerticalSpdt3 }><SPDTVertical commandName={ 'Name' } spdtStatus={props.spdtStatus.test }/></div>         
            </section>
        </div>
    );
}