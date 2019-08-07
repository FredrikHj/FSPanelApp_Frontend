import React, { useState  } from 'react';
import { SectionsCSS } from '../CSS/GenerallCSS.js'
import { SectionMiddle3CSS } from '../CSS/Sections/SectionMiddle3CSS.js';
import { GreenLED, RedLED, SPDTVertical, SPDTHorizontal, LEDSegmentDigit4, LEDSegmentDigit8, RotarySpdt, RotaryEncorder, PushBtnCircle } from './ComponentsParts.js';

function SectionMiddle3(props){   
    return(
        <> 
            <p className={ SectionsCSS.sectionHeadline }>Mitten sektion 3</p>        
            <div className={ SectionMiddle3CSS.section3 }>
                <Section3_1 spdtStatus={ props.thisState.fsDataValuesApi }/>
                <Section3_2 spdtStatus={ props.thisState.fsDataValuesApi }/>
                <Section3_3 spdtStatus={ props.thisState.fsDataValuesApi }/>
                <Section3_4 spdtStatus={ props.thisState.fsDataValuesApi }/>
                <Section3_5 spdtStatus={ props.thisState.fsDataValuesApi }/>
            </div>
        </>
    );
  }
  export default SectionMiddle3;

  let Section3_1 = (props) => {
    return(
        <div className={ SectionMiddle3CSS.section3_1 }> 
            <div className={ SectionMiddle3CSS.section3_1Row1 }>
                <div className={ SectionMiddle3CSS.section3_1Row1_4xSpdtContainer }>
                    <div className={ SectionMiddle3CSS.section3_1Row1_1xSpdt }>
                        <div><SPDTVertical spdtStatus={props.spdtStatus.test }/></div>
                    </div>
                    <div className={ SectionMiddle3CSS.section3_1Row1_2To4Spdt }>
                        <div><SPDTVertical spdtStatus={props.spdtStatus.test }/></div>
                        <div><SPDTVertical spdtStatus={props.spdtStatus.test }/></div>
                        <div><SPDTVertical spdtStatus={props.spdtStatus.test }/></div>
                    </div>
                </div>
                <div className={ SectionMiddle3CSS.section3_1Row1_2xRotarySpdt1xSpdt }>
                    <RotarySpdt rotaryStatus={ props.spdtStatus.rotaryStatus }/>
                    <div><SPDTHorizontal spdtStatus={props.spdtStatus.test }/></div>
                    <RotarySpdt rotaryStatus={ props.spdtStatus.rotaryStatus }/>
                </div>
                <div className={ SectionMiddle3CSS.section3_1Row1_2xPushBtns }>
                   <div><PushBtnCircle push={0.8} /></div>
                   <div><PushBtnCircle push={0.8} /></div>
                </div>
            </div>

            <div className={ SectionMiddle3CSS.section3_1Row2 }>
               <div><SPDTVertical spdtStatus={props.spdtStatus.test }/></div>
            </div>
            <div className={ SectionMiddle3CSS.section3_1Row3 }>
                <div className={ SectionMiddle3CSS.section3_1Row3_2RotarySpdt1xPushBtn }>
                    <RotarySpdt rotaryStatus={ props.spdtStatus.rotaryStatus }/>
                    <div className={ SectionMiddle3CSS.section3_1Row3_PushBtn2 }><PushBtnCircle push={0.8} /></div>
                    <RotarySpdt rotaryStatus={ props.spdtStatus.rotaryStatus }/>
                </div>
                <div className={ SectionMiddle3CSS.section3_1Row3_Spdt4 }><SPDTVertical spdtStatus={props.spdtStatus.test }/></div>
             
                    <div><PushBtnCircle push={0.8} /></div>
                    <div><PushBtnCircle push={0.8} /></div>
                
                <div className={ SectionMiddle3CSS.section3_1Row3_PushBtn7 }><PushBtnCircle push={0.8} /></div>
                <div><PushBtnCircle push={0.8} /></div>
                <div><PushBtnCircle push={0.8} /></div>
            </div>
            <div className={ SectionMiddle3CSS.section3_1Row4 }>
                <div><PushBtnCircle push={0.8} /></div>
                <div><PushBtnCircle push={0.8} /></div>
                <div className={ SectionMiddle3CSS.section3_1Row3_Rotary3 }><RotarySpdt rotaryStatus={ props.spdtStatus.rotaryStatus }/></div>
                <div><PushBtnCircle push={0.8} /></div>
                <div><PushBtnCircle push={0.8} /></div>
                <div><PushBtnCircle push={0.8} /></div>
            </div>
            <div className={ SectionMiddle3CSS.section3_1Row5 }>
                <div className={ SectionMiddle3CSS.section3_1Row5_Spdt1To3 }>
                    <div><SPDTVertical spdtStatus={props.spdtStatus.test }/></div>
                    <div><SPDTVertical spdtStatus={props.spdtStatus.test }/></div>
                    <div><SPDTVertical spdtStatus={props.spdtStatus.test }/></div>
                </div>
                <div className={ SectionMiddle3CSS.section3_1Row5_PushBtns4To10 }>
                    <div><PushBtnCircle push={0.8} /></div>
                    <div><PushBtnCircle push={0.8} /></div>
                    <div><PushBtnCircle push={0.8} /></div>
                    
                    <div><PushBtnCircle push={0.8} /></div>

                    <div><PushBtnCircle push={0.8} /></div>
                    <div><PushBtnCircle push={0.8} /></div>
                    <div><PushBtnCircle push={0.8} /></div>
                </div>
            </div>
        </div>
    );
  }
  let Section3_2 = (props) => {
    return(
        <div className={ SectionMiddle3CSS.section3_2 }>
            <section className={ SectionMiddle3CSS.section3_2Row1 }>
                <GreenLED/>
                <div className={ SectionMiddle3CSS.section3_2Row1_PushBtn2To3_5To6 }>
                    <div><PushBtnCircle push={0.8} /></div>
                    <div><PushBtnCircle push={0.8} /></div>
                </div>

                <div className={ SectionMiddle3CSS.section3_2Row1_HorizontalSpdt4 }><SPDTHorizontal spdtStatus={props.spdtStatus.test }/></div>
                <div className={ SectionMiddle3CSS.section3_2Row1_PushBtn2To3_5To6 }>
                    <div><PushBtnCircle push={0.8} /></div>
                    <div><PushBtnCircle push={0.8} /></div>
                </div>
                <GreenLED/>
            </section>

            <section className={ SectionMiddle3CSS.section3_2Row2 }>
                <div className={ SectionMiddle3CSS.section3_2Row2_VericalSpdt1_6 }><SPDTVertical spdtStatus={props.spdtStatus.test }/></div>
                <div className={ SectionMiddle3CSS.section3_2Row2_VericalSpdt2_5 }><SPDTVertical spdtStatus={props.spdtStatus.test }/></div>
                <section className={ SectionMiddle3CSS.section3_2Row2_PushBtn2To4_9To10Container }>
                    <div className={ SectionMiddle3CSS.section3_2Row2_PushBtn2To4_9To10 }>
                        <div><PushBtnCircle push={0.8} /></div>
                        <div><PushBtnCircle push={0.8} /></div>
                    </div>
                    <div className={ SectionMiddle3CSS.section3_2Row2_PushBtn2To4_9To10 }>
                        <div><PushBtnCircle push={0.8} /></div>
                        <div><PushBtnCircle push={0.8} /></div>
                    </div>
                </section>
                <div className={ SectionMiddle3CSS.section3_2Row2_VericalSpdt2_5 }><SPDTVertical spdtStatus={props.spdtStatus.test }/></div>
                <div className={ SectionMiddle3CSS.section3_2Row2_VericalSpdt1_6 }><SPDTVertical spdtStatus={props.spdtStatus.test }/></div>

                <div className={ SectionMiddle3CSS.section3_2Row2_PushBtn7To8 }>
                        <div><PushBtnCircle push={0.8} /></div>
                        <div><PushBtnCircle push={0.8} /></div>
                </div>
            </section>

            <section className={ SectionMiddle3CSS.section3_2Row3 }>
                <div className={ SectionMiddle3CSS.section3_2Row3_RotarySpdt1To2_7To8Container }>
                    <div className={ SectionMiddle3CSS.section3_2Row3_RotarySpdt1To2_7To8 }>                 
                        <div className={ SectionMiddle3CSS.section3_2Row3_RotarySpdt1_8 } ><RotarySpdt rotaryStatus={ props.spdtStatus.rotaryStatus }/></div>
                        <div><RotarySpdt rotaryStatus={ props.spdtStatus.rotaryStatus }/></div>
                    </div>
                    <div className={ SectionMiddle3CSS.section3_2Row3_RotarySpdt1To2_7To8 }>  
                        <div className={ SectionMiddle3CSS.section3_2Row3_RotarySpdt1_8 }><RotarySpdt rotaryStatus={ props.spdtStatus.rotaryStatus }/></div>
                        <div><RotarySpdt rotaryStatus={ props.spdtStatus.rotaryStatus }/></div>
                    </div>
                </div>

                <div className={ SectionMiddle3CSS.section3_2Row3_PushBtn3To4_9Container }>
                    <div className={ SectionMiddle3CSS.section3_2Row3_PushBtn3To4_9 }>
                        <div><PushBtnCircle push={0.8} /></div>
                        <div><PushBtnCircle push={0.8} /></div>
                    </div>
                    <div><PushBtnCircle push={0.8} /></div>
                </div>

                <div className={ SectionMiddle3CSS.section3_2Row3_RotarySpdt5To6_10To11 }>  

                    <div className={ SectionMiddle3CSS.section3_2Row3_RotarySpdt1To2_7To8Container }>
                        <div className={ SectionMiddle3CSS.section3_2Row3_RotarySpdt1To2_7To8 }>                 
                            <div><RotarySpdt rotaryStatus={ props.spdtStatus.rotaryStatus }/></div>
                            <div className={ SectionMiddle3CSS.section3_2Row3_RotarySpdt6_11 }><RotarySpdt rotaryStatus={ props.spdtStatus.rotaryStatus }/></div>
                        </div>

                        <div className={ SectionMiddle3CSS.section3_2Row3_RotarySpdt1To2_7To8 }>  
                            <div><RotarySpdt rotaryStatus={ props.spdtStatus.rotaryStatus }/></div>
                            <div className={ SectionMiddle3CSS.section3_2Row3_RotarySpdt6_11 }><RotarySpdt rotaryStatus={ props.spdtStatus.rotaryStatus }/></div>
                        </div>
                    </div>
                        <div  className={ SectionMiddle3CSS.section3_2Row3_RotarySpdt12 }><RotarySpdt rotaryStatus={ props.spdtStatus.rotaryStatus }/></div>
                </div>
            </section>
        </div>
    );
}
let Section3_3 = (props) => {
    return(
        <div className={ SectionMiddle3CSS.section3_3 }>
            <section className={ SectionMiddle3CSS.section3_3Row1 }>
                <RotarySpdt rotaryStatus={ props.spdtStatus.rotaryStatus }/>
                <div className={ SectionMiddle3CSS.section3_3Row1VerticalSpdt2 }><SPDTVertical spdtStatus={props.spdtStatus.test }/></div>
                <RotarySpdt rotaryStatus={ props.spdtStatus.rotaryStatus }/>
            </section>
            <section className={ SectionMiddle3CSS.section3_3Row2 }>
                <div className={ SectionMiddle3CSS.section3_1Row3_Spdt4 }><SPDTVertical spdtStatus={props.spdtStatus.test }/></div>
                <div className={ SectionMiddle3CSS.section3_1Row3_Spdt4 }><SPDTVertical spdtStatus={props.spdtStatus.test }/></div>
                <div className={ SectionMiddle3CSS.section3_1Row3_Spdt4 }><SPDTVertical spdtStatus={props.spdtStatus.test }/></div>
            </section>
            <section className={ SectionMiddle3CSS.section3_3Row3 }>
                <div className={ SectionMiddle3CSS.section3_1Row3_Spdt4 }><SPDTVertical spdtStatus={props.spdtStatus.test }/></div>
                <div className={ SectionMiddle3CSS.section3_1Row3_Spdt4 }><SPDTVertical spdtStatus={props.spdtStatus.test }/></div>
                <div className={ SectionMiddle3CSS.section3_1Row3_Spdt4 }><SPDTVertical spdtStatus={props.spdtStatus.test }/></div>
            </section>
        </div>
    );
}
let Section3_4 = (props) => {    
    return(
        <div className={ SectionMiddle3CSS.section3_4 }>
            <section className={ SectionMiddle3CSS.section3_4Row1 }>
                <RotarySpdt rotaryStatus={ props.spdtStatus.rotaryStatus }/>
                <div className={ SectionMiddle3CSS.section3_4Row1Led2To3_LedSegment4 }>
                    <div className={ SectionMiddle3CSS.section3_4Row1Led2To3Container }>
                        <GreenLED/>
                        <GreenLED/>
                    </div>
                    <div className={ SectionMiddle3CSS.section3_4Row1LedSegment4 }>
                        <LEDSegmentDigit8
                            ledStatusStr={ '0.0.0.0.0.0.0.0' }
                        />
                    </div> 
                </div> 
            </section>
            <section className={ SectionMiddle3CSS.section3_4Row2 }>
                <RotarySpdt rotaryStatus={ props.spdtStatus.rotaryStatus }/>
                <section className={ SectionMiddle3CSS.section3_4Row2VerticalSpdt2To4 }>
                    <div className={ SectionMiddle3CSS.section3_3Row1VerticalSpdt2 }><SPDTVertical spdtStatus={props.spdtStatus.test }/></div>
                    <div className={ SectionMiddle3CSS.section3_3Row1VerticalSpdt2 }><SPDTVertical spdtStatus={props.spdtStatus.test }/></div>
                    <div className={ SectionMiddle3CSS.section3_3Row1VerticalSpdt2 }><SPDTVertical spdtStatus={props.spdtStatus.test }/></div>
                </section>
            </section>
            <section className={ SectionMiddle3CSS.section3_4Row3 }>
               <RotarySpdt rotaryStatus={ props.spdtStatus.rotaryStatus }/>
               <section className={ SectionMiddle3CSS.section3_4Row3VerticalSpdt2To3 }>
                    <div className={ SectionMiddle3CSS.section3_3Row1VerticalSpdt2 }><SPDTVertical spdtStatus={props.spdtStatus.test }/></div>
                    <div className={ SectionMiddle3CSS.section3_3Row1VerticalSpdt2 }><SPDTVertical spdtStatus={props.spdtStatus.test }/></div>
                </section>
            </section>
        </div>
    );
}
let Section3_5 = (props) => {
    return(
        <div className={ SectionMiddle3CSS.section3_5 }>
            <section className={ SectionMiddle3CSS.section3_5Row1 }>
                <GreenLED/>
                <GreenLED/>
                <GreenLED/>
                <div ><SPDTVertical spdtStatus={props.spdtStatus.test }/></div>
            </section> 

            <section className={ SectionMiddle3CSS.section3_5Row2 }>
                <div>
                    <LEDSegmentDigit8
                        ledStatusStr={ '0.0.0.0.0.0.0.0' }
                    />
                </div>
                <div>
                    <GreenLED/>
                </div>
            </section>
            <section className={ SectionMiddle3CSS.section3_5Row3 }>
                <div>
                    <LEDSegmentDigit8
                        ledStatusStr={ '0.0.0.0.0.0.0.0' }
                    />
                </div>
                <div>
                    <GreenLED/>
                </div>
            </section>
            <section className={ SectionMiddle3CSS.section3_5Row4 }>
                <div className={ SectionMiddle3CSS.section3_5Row4RotaryEncorder1To2 }>
                    <div><RotaryEncorder direction= { '360' }/></div>
                    <div><RotaryEncorder direction= { '360' }/></div>
                </div>
                <div className={ SectionMiddle3CSS.section3_5Row4VerticalSpdt3 }><SPDTVertical spdtStatus={props.spdtStatus.test }/></div>         
            </section>
        </div>
    );
}