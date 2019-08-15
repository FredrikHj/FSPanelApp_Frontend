import React, { useState  } from 'react';
import { SectionsCSS } from '../../CSS/GenerallCSS.js';
import { SectionTop5CSS } from '../../CSS/Sections/SectionTop5CSS.js';
import { NoneLED, GreenLED, LEDSegmentDigit4, LEDSegmentDigit8, LEDDisplay20x4 } from '../ComponentsParts.js';

function SectionTop5(props){
    return(
      <> 
        <p className={ SectionsCSS.sectionHeadline }>Övre sektion 5</p>        
        <div className={ SectionTop5CSS.sectionTop5 }>
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
        <div className={ SectionTop5CSS.section5_1 } id="section5_1TopCorner"> 
            <section className={ SectionTop5CSS.section5_1__LEDContainer }>
                <section className={ SectionTop5CSS.section5CornerLEDContainer__rowd1To3 }>
                    <NoneLED/>
                    <NoneLED/>
                    <NoneLED/>
                    <NoneLED/>
                    <NoneLED/>
                    <GreenLED commandName={ 'Name' }/>
                    <GreenLED commandName={ 'Name' }/>
                    <GreenLED commandName={ 'Name' }/>
                    <GreenLED commandName={ 'Name' }/>              
                    <GreenLED commandName={ 'Name' }/>
                    <GreenLED commandName={ 'Name' }/>
                </section>
                <section className={ SectionTop5CSS.section5CornerLEDContainer__rowd1To3 }>
                    <NoneLED/>
                    <NoneLED/>
                    <GreenLED commandName={ 'Name' }/>
                    <GreenLED commandName={ 'Name' }/>
                    <GreenLED commandName={ 'Name' }/>
                    <GreenLED commandName={ 'Name' }/>
                    <GreenLED commandName={ 'Name' }/>
                    <GreenLED commandName={ 'Name' }/>
                    <GreenLED commandName={ 'Name' }/>
                    <GreenLED commandName={ 'Name' }/>
                    <GreenLED commandName={ 'Name' }/>
                </section>
                <section className={ SectionTop5CSS.section5CornerLEDContainer__rowd1To3 }>
                    <GreenLED commandName={ 'Name' }/>
                    <GreenLED commandName={ 'Name' }/>
                    <GreenLED commandName={ 'Name' }/>
                    <GreenLED commandName={ 'Name' }/>
                    <GreenLED commandName={ 'Name' }/>
                    <GreenLED commandName={ 'Name' }/>
                    <GreenLED commandName={ 'Name' }/>
                    <GreenLED commandName={ 'Name' }/>
                    <GreenLED commandName={ 'Name' }/>
                    <GreenLED commandName={ 'Name' }/>
                    <GreenLED commandName={ 'Name' }/>
                </section>
            </section>
        </div>
    );
}

let Section5_2 = (props) => {
    return(
        <div className={ SectionTop5CSS.section5_2 }>
            <LEDDisplay20x4
                segmentName={ 'Name' }
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
        <div className={ SectionTop5CSS.section5_3 }>
            <section className={ SectionTop5CSS.section5_3Row1 }>
                <div className={ SectionTop5CSS.section5_3Row1Led1 }>
                    <GreenLED commandName={ 'Name' }/>
                </div>
                <div className={ SectionTop5CSS.section5_3Row1Led2 }>
                    <GreenLED commandName={ 'Name' }/>
                </div>
                <div className={ SectionTop5CSS.section5_3Row1Led3 }>
                    <GreenLED commandName={ 'Name' }/>
                </div>
             
            </section>
            <section className={ SectionTop5CSS.section5_3Row2 }>
                <div className={ SectionTop5CSS.section5_3Row2LedSeg8Dig }>
                    <LEDSegmentDigit8
                        segmentName={ 'Name' }
                        segmentsValue={ '0.0.0.0.0.0.0.0' }
                />  
                </div>
                <div className={ SectionTop5CSS.section5_3Row2LedSeg4Dig }>
                    <LEDSegmentDigit4
                        segmentName={ 'Name' }
                        segmentsValue={ '0.0.0.0' }
                    />
                </div>
            </section>
            <section className={ SectionTop5CSS.section5_3Row3 }>
                <GreenLED commandName={ 'Name' }/>
            </section>
            <section className={ SectionTop5CSS.section5_3Row4 }>
                <div><GreenLED commandName={ 'Name' }/></div>
                <div><GreenLED commandName={ 'Name' }/></div>
                <div className={ SectionTop5CSS.section5_3Row4Led3_4 }><GreenLED commandName={ 'Name' }/></div>
                <div className={ SectionTop5CSS.section5_3Row4Led3_4 }><GreenLED commandName={ 'Name' }/></div>
                <div className={ SectionTop5CSS.section5_3Row4Led5 }><GreenLED commandName={ 'Name' }/></div>
                <div><GreenLED commandName={ 'Name' }/></div>
                <div><GreenLED commandName={ 'Name' }/></div>
                <div><GreenLED commandName={ 'Name' }/></div>
            </section>
        </div>
    );
}
let Section5_4 = (props) => {
    return(
        <div className={ SectionTop5CSS.section5_4 }>
            <section className={ SectionTop5CSS.section5_4Row1 }>
                <LEDSegmentDigit4
                    segmentName={ 'Name' }
                    segmentsValue={ '0.0.0.0' }
                />  
                <LEDSegmentDigit8
                    segmentName={ 'Name' }
                    segmentsValue={ '0.0.0.0.0.0.0.0' }
                />  
                <LEDSegmentDigit4
                    segmentName={ 'Name' }
                    segmentsValue={ '0.0.0.0' }
                />
            </section>
            <section className={ SectionTop5CSS.section5_4Row2 }>
                <div><GreenLED commandName={ 'Name' }/></div>
                <div className={ SectionTop5CSS.section5_4Row4Led2_4_7To11 }><GreenLED commandName={ 'Name' }/></div>
                <div><GreenLED commandName={ 'Name' }/></div>
                <div className={ SectionTop5CSS.section5_4Row4Led2_4_7To11 }><GreenLED commandName={ 'Name' }/></div>
                <div><GreenLED commandName={ 'Name' }/></div>
                <div><GreenLED commandName={ 'Name' }/></div>
                <div><GreenLED commandName={ 'Name' }/></div>
                <div className={ SectionTop5CSS.section5_4Row4Led2_4_7To11 }><GreenLED commandName={ 'Name' }/></div>
                <div className={ SectionTop5CSS.section5_4Row4Led2_4_7To11 }><GreenLED commandName={ 'Name' }/></div>
                <div className={ SectionTop5CSS.section5_4Row4Led2_4_7To11 }><GreenLED commandName={ 'Name' }/></div>
                <div className={ SectionTop5CSS.section5_4Row4Led2_4_7To11 }><GreenLED commandName={ 'Name' }/></div>
            </section>
        </div>
    );
}
let Section5_5 = (props) => {
    return(
        <div className={ SectionTop5CSS.section5_5 }>
            <div>
                <LEDDisplay20x4
                    segmentName={ 'Name' }
                    strRow1={ '11111111111111111111' }
                    strRow2={ '11111111111111111111' }
                    strRow3={ '11111111111111111111' }
                    strRow4={ '11111111111111111111' }
                />
            </div>
            <div>
                <LEDDisplay20x4
                    segmentName={ 'Name' }
                    strRow1={ '11111111111111111111' }
                    strRow2={ '11111111111111111111' }
                    strRow3={ '11111111111111111111' }
                    strRow4={ '11111111111111111111' }
                />
            </div>
        </div>
    );
}
let Section5_6 = (props) => {
    return(
        <div className={ SectionTop5CSS.section5_6 } id="section5_6TopCorner">
           <section className={ SectionTop5CSS.section5_6__LEDContainer }>
                <section className={ SectionTop5CSS.section5CornerLEDContainer__rowd1To3 }>
                    <GreenLED commandName={ 'Name' }/>
                    <GreenLED commandName={ 'Name' }/>
                    <GreenLED commandName={ 'Name' }/>
                    <GreenLED commandName={ 'Name' }/>              
                    <GreenLED commandName={ 'Name' }/>
                    <GreenLED commandName={ 'Name' }/>
                    <NoneLED/>
                    <NoneLED/>
                    <NoneLED/>
                    <NoneLED/>
                    <NoneLED/>
                </section>
                <section className={ SectionTop5CSS.section5CornerLEDContainer__rowd1To3 }>
                    <GreenLED commandName={ 'Name' }/>
                    <GreenLED commandName={ 'Name' }/>
                    <GreenLED commandName={ 'Name' }/>
                    <GreenLED commandName={ 'Name' }/>
                    <GreenLED commandName={ 'Name' }/>
                    <GreenLED commandName={ 'Name' }/>
                    <GreenLED commandName={ 'Name' }/>
                    <GreenLED commandName={ 'Name' }/>
                    <GreenLED commandName={ 'Name' }/>
                    <NoneLED/>
                    <NoneLED/>
                </section>
                <section className={ SectionTop5CSS.section5CornerLEDContainer__rowd1To3 }>
                    <GreenLED commandName={ 'Name' }/>
                    <GreenLED commandName={ 'Name' }/>
                    <GreenLED commandName={ 'Name' }/>
                    <GreenLED commandName={ 'Name' }/>
                    <GreenLED commandName={ 'Name' }/>
                    <GreenLED commandName={ 'Name' }/>
                    <GreenLED commandName={ 'Name' }/>
                    <GreenLED commandName={ 'Name' }/>
                    <GreenLED commandName={ 'Name' }/>
                    <GreenLED commandName={ 'Name' }/>
                    <GreenLED commandName={ 'Name' }/>
                </section>
            </section>
        </div>
    );
}