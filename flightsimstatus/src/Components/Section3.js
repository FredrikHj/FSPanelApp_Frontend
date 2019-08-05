import React, { useState  } from 'react';
import { BasicCSS } from '../CSS/GenerallCSS.js'
import { SectionMiddle3CSS } from '../CSS/Sections/SectionMiddle3CSS.js';
import { GreenLED, RedLED, SPDTVertical, SPDTHorizontal, LEDSegmentDigit4, LEDSegmentDigit8, RotarySpdt, RotaryEncorder, PushBtnCircle } from './ComponentsParts.js';

function SectionMiddle3(props){   
    return(
        <> 
            <p className={ BasicCSS.sectionHeadline }>Mitten sektion 3</p>        
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
                <LEDSegmentDigit8
                    ledStatusStr={ '0.0.0.0.0.0.0.0' }
                />
                <section className={ SectionMiddle3CSS.section3_2Row1Middle }>
                    <GreenLED/>
                    <GreenLED/>
                </section>
                <LEDSegmentDigit8
                    ledStatusStr={ '0.0.0.0.0.0.0.0' }
                />
            </section>
            <section className={ SectionMiddle3CSS.section3_2Row2 }>
                <section className={ SectionMiddle3CSS.section3_2Row22xledSpdf }>
                    <div className={ SectionMiddle3CSS.section3_2Row2Led1 }>
                        <GreenLED/>       
                    </div>
                    <div className={ SectionMiddle3CSS.section3_2Row2Spdf2 }>
                        <SPDTVertical spdtStatus={props.spdtStatus.test }/>
                    </div>
                    <div className={ SectionMiddle3CSS.section3_2Row2Led3 }>
                        <GreenLED/>       
                    </div>
                </section>
                <section className={ SectionMiddle3CSS.section3_2Row2RotaryEncorder }>
                    <RotaryEncorder direction= { '-360' }/>
                    <RotaryEncorder direction= { '360' }/>
                </section>
                <div className={ SectionMiddle3CSS.section3_2Row2LeftRotarySpdt }> 
                    <RotarySpdt rotaryStatus={ props.spdtStatus.rotaryStatus }/>
                </div>
            </section>
        </div>
    );
}
let Section3_3 = (props) => {
    return(
        <div className={ SectionMiddle3CSS.section3_3 }>
            <section className={ SectionMiddle3CSS.section3_3Row1 }>
                <LEDSegmentDigit8
                    ledStatusStr={ '0.0.0.0.0.0.0.0' }
                />
                <LEDSegmentDigit8
                    ledStatusStr={ '0.0.0.0.0.0.0.0' }
                />
            </section>
            <section className={ SectionMiddle3CSS.section3_3Row2 }>
                <div className={ SectionMiddle3CSS.section3_3Row2RotarySpdt1 }>
                    <RotarySpdt rotaryStatus={ props.spdtStatus.rotaryStatus }/>
                </div>
                <div className={ SectionMiddle3CSS.section3_3Row22RotaryEncorder2 }>
                    <RotaryEncorder direction= { '-360' }/>
                    <RotaryEncorder direction= { '360' }/>
                </div>
                <div className={ SectionMiddle3CSS.section3_3Row2Spdt3 }>
                    <SPDTVertical spdtStatus={props.spdtStatus.test }/>
                </div>
            </section>
        </div>
    );
}
let Section3_4 = (props) => {    
    return(
        <div className={ SectionMiddle3CSS.section3_4 }>
            <section className={ SectionMiddle3CSS.section3_4LedSpdf }>
                <section className={ SectionMiddle3CSS.section3_4TopRowRotarySpdf }>
                    <RotarySpdt rotaryStatus={ props.spdtStatus.rotaryStatus }/>
                </section>
                <section className={ SectionMiddle3CSS.section3_4Spdfx2Container }>
                    <div className={ SectionMiddle3CSS.section3_4Spdfx2 }><SPDTVertical spdtStatus={props.spdtStatus.test }/></div>
                    <div className={ SectionMiddle3CSS.section3_4Spdfx2 }><SPDTVertical spdtStatus={props.spdtStatus.test }/></div>
                </section>
            </section>
            <section className={ SectionMiddle3CSS.section3_4LedSpdf }>
                <section className={ SectionMiddle3CSS.section3_4TopRowLed }>
                    <GreenLED/>
                    <GreenLED/>
                </section>
                <div className={ SectionMiddle3CSS.section3_4Spdf }><SPDTVertical spdtStatus={props.spdtStatus.test }/></div>
            </section>
            <section className={ SectionMiddle3CSS.section3_4LedSpdf }>
                <section className={ SectionMiddle3CSS.section3_4TopRowLed }>
                    <GreenLED/>
                    <GreenLED/>
                </section>
                <div className={ SectionMiddle3CSS.section3_4Spdf }><SPDTVertical spdtStatus={props.spdtStatus.test }/></div>
            </section>
            <section className={ SectionMiddle3CSS.section3_4LedSpdf }>
                <section className={ SectionMiddle3CSS.section3_4TopRowLed }>
                    <GreenLED/>
                    <GreenLED/>
                </section>
                <div className={ SectionMiddle3CSS.section3_4Spdf }><SPDTVertical spdtStatus={props.spdtStatus.test }/></div>
            </section>
            <section className={ SectionMiddle3CSS.section3_4LedSpdf }>
                <div className={ SectionMiddle3CSS.section3_4LastColLed }><GreenLED/></div>
                <div className={ SectionMiddle3CSS.section3_4LastSpdf }><SPDTVertical spdtStatus={props.spdtStatus.test }/></div>
            </section>
        </div>
    );
}
let Section3_5 = (props) => {
    return(
        <div className={ SectionMiddle3CSS.section3_5 }>
            <section className={ SectionMiddle3CSS.section3_6InnerFrame }>
                <div className={ SectionMiddle3CSS.section3_6LedSpdt }>
                    <div><GreenLED/></div>
                    <div><SPDTVertical spdtStatus={props.spdtStatus }/></div>
                </div>
                <div className={ SectionMiddle3CSS.section3_6LedSpdt }>
                    <div><GreenLED/></div>
                    <div><SPDTVertical spdtStatus={props.spdtStatus }/></div>
                </div>
                <div className={ SectionMiddle3CSS.section3_6LedSpdt }>
                    <div><GreenLED/></div>
                    <div><SPDTVertical spdtStatus={props.spdtStatus }/></div>
                </div>
                <div className={ SectionMiddle3CSS.section3_6LedSpdt }>
                    <div><GreenLED/></div>
                    <div><SPDTVertical spdtStatus={props.spdtStatus }/></div>
                </div>
                <div className={ SectionMiddle3CSS.section3_6LedSpdt }>
                    <div><GreenLED/></div>
                    <div><SPDTVertical spdtStatus={props.spdtStatus }/></div>
                </div>
                <div className={ SectionMiddle3CSS.section3_6LedSpdt }>
                    <div><GreenLED/></div>
                    <div><SPDTVertical spdtStatus={props.spdtStatus }/></div>
                </div>
            </section>
        </div>
    );
}