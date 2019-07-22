import React, { useState  } from 'react';
import { BasicCSS } from '../CSS/GenerallCSS.js';
import { SectionTop5CSS } from '../CSS/Sections/SectionTop5CSS.js';
import { GreenLED, LEDSegmentDigit4, LEDSegmentDigit8, LEDDisplay20x4 } from './ComponentsParts.js';

function SectionTop5(props){
    return(
      <> 
        <p className={ BasicCSS.sectionHeadline }>Övre sektion 5</p>        
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
                <section className={ SectionTop5CSS.section5_1LEDContainer__rowdTop }>
                    <GreenLED test={ '1' }/>
                    <GreenLED test={ '2' }/>
                    <GreenLED test={ '3' }/>
                    <GreenLED test={ '4' }/>              
                    <GreenLED test={ '5' }/>
                    <GreenLED test={ '6' }/>
                </section>
                <section className={ SectionTop5CSS.section5_1LEDContainer__rowdMiddle }>
                    <GreenLED test={ '1' }/>
                    <GreenLED test={ '2' }/>
                    <GreenLED test={ '3' }/>
                    <GreenLED test={ '4' }/>              
                    <GreenLED test={ '5' }/>
                    <GreenLED test={ '6' }/>
                    <GreenLED test={ '7' }/>
                    <GreenLED test={ '8' }/>
                    <GreenLED test={ '9' }/>
                </section>
                <section className={ SectionTop5CSS.section5_1LEDContainer__rowdBottom }>
                    <GreenLED test={ '1' }/>
                    <GreenLED test={ '2' }/>
                    <GreenLED test={ '3' }/>
                    <GreenLED test={ '4' }/>              
                    <GreenLED test={ '5' }/>
                    <GreenLED test={ '6' }/>
                    <GreenLED test={ '7' }/>
                    <GreenLED test={ '8' }/>
                    <GreenLED test={ '9' }/>
                    <GreenLED test={ '10' }/>
                    <GreenLED test={ '11' }/>
                </section>
            </section>
        </div>
    );
}

let Section5_2 = (props) => {
    return(
        <div className={ SectionTop5CSS.section5_2 }>
            <LEDDisplay20x4
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
                    <GreenLED test={ '1' }/>
                </div>
                <div className={ SectionTop5CSS.section5_3Row1Led2 }>
                    <GreenLED test={ '2' }/>
                </div>
                <div className={ SectionTop5CSS.section5_3Row1Led3 }>
                    <GreenLED test={ '3' }/>
                </div>
             
            </section>
            <section className={ SectionTop5CSS.section5_3Row2 }>
                <div className={ SectionTop5CSS.section5_3Row2LedSeg8Dig }>
                    <LEDSegmentDigit8
                        ledStatusStr={ '0.0.0.0.0.0.0.0' }
                />  
                </div>
                <div className={ SectionTop5CSS.section5_3Row2LedSeg4Dig }>
                    <LEDSegmentDigit4
                        ledStatusStr={ '0.0.0.0' }
                    />
                </div>
            </section>
            <section className={ SectionTop5CSS.section5_3Row3 }>
                <GreenLED test={ '3' }/>
            </section>
            <section className={ SectionTop5CSS.section5_3Row4 }>
                <div><GreenLED test={ '1' }/></div>
                <div><GreenLED test={ '2' }/></div>
                <div className={ SectionTop5CSS.section5_3Row4Led3_4 }><GreenLED test={ '3' }/></div>
                <div className={ SectionTop5CSS.section5_3Row4Led3_4 }><GreenLED test={ '4' }/></div>
                <div className={ SectionTop5CSS.section5_3Row4Led5 }><GreenLED test={ '5' }/></div>
                <div><GreenLED test={ '6' }/></div>
                <div><GreenLED test={ '7' }/></div>
                <div><GreenLED test={ '8' }/></div>
            </section>
        </div>
    );
}
let Section5_4 = (props) => {
    return(
        <div className={ SectionTop5CSS.section5_4 }>
            <section className={ SectionTop5CSS.section5_4Row1 }>
                <LEDSegmentDigit4
                    ledStatusStr={ '0.0.0.0' }
                />  
                <LEDSegmentDigit8
                    ledStatusStr={ '0.0.0.0.0.0.0.0' }
                />  
                <LEDSegmentDigit4
                    ledStatusStr={ '0.0.0.0' }
                />
            </section>
            <section className={ SectionTop5CSS.section5_4Row2 }>
                <div><GreenLED test={ '1' }/></div>
                <div className={ SectionTop5CSS.section5_4Row4Led2_4_7To11 }><GreenLED test={ '2' }/></div>
                <div><GreenLED test={ '3' }/></div>
                <div className={ SectionTop5CSS.section5_4Row4Led2_4_7To11 }><GreenLED test={ '4' }/></div>
                <div><GreenLED test={ '5' }/></div>
                <div><GreenLED test={ '6' }/></div>
                <div><GreenLED test={ '7' }/></div>
                <div className={ SectionTop5CSS.section5_4Row4Led2_4_7To11 }><GreenLED test={ '8' }/></div>
                <div className={ SectionTop5CSS.section5_4Row4Led2_4_7To11 }><GreenLED test={ '9' }/></div>
                <div className={ SectionTop5CSS.section5_4Row4Led2_4_7To11 }><GreenLED test={ '10' }/></div>
                <div className={ SectionTop5CSS.section5_4Row4Led2_4_7To11 }><GreenLED test={ '11' }/></div>
            </section>
        </div>
    );
}
let Section5_5 = (props) => {
    return(
        <div className={ SectionTop5CSS.section5_5 }>
            <div>
                <LEDDisplay20x4
                    strRow1={ '11111111111111111111' }
                    strRow2={ '11111111111111111111' }
                    strRow3={ '11111111111111111111' }
                    strRow4={ '11111111111111111111' }
                />
            </div>
            <div>
                <LEDDisplay20x4
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
                <section className={ SectionTop5CSS.section5_6LEDContainer__rowdTop }>
                    <GreenLED test={ '1' }/>
                    <GreenLED test={ '2' }/>
                    <GreenLED test={ '3' }/>
                    <GreenLED test={ '4' }/>              
                    <GreenLED test={ '5' }/>
                    <GreenLED test={ '6' }/>
                </section>
                <section className={ SectionTop5CSS.section5_6LEDContainer__rowdMiddle }>
                    <GreenLED test={ '1' }/>
                    <GreenLED test={ '2' }/>
                    <GreenLED test={ '3' }/>
                    <GreenLED test={ '4' }/>              
                    <GreenLED test={ '5' }/>
                    <GreenLED test={ '6' }/>
                    <GreenLED test={ '7' }/>
                    <GreenLED test={ '8' }/>
                    <GreenLED test={ '9' }/>
                </section>
                <section className={ SectionTop5CSS.section5_6LEDContainer__rowdBottom }>
                    <GreenLED test={ '1' }/>
                    <GreenLED test={ '2' }/>
                    <GreenLED test={ '3' }/>
                    <GreenLED test={ '4' }/>              
                    <GreenLED test={ '5' }/>
                    <GreenLED test={ '6' }/>
                    <GreenLED test={ '7' }/>
                    <GreenLED test={ '8' }/>
                    <GreenLED test={ '9' }/>
                    <GreenLED test={ '10' }/>
                    <GreenLED test={ '11' }/>
                </section>
            </section>
        </div>
    );
}