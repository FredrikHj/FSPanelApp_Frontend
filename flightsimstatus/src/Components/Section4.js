import React, { useState  } from 'react';
import { SectionsPartsBasicCSS, SectionsHeadContainersCSS, SectionsHeadpartsCSS, SectionsSpecialRoulesCSS } from '../CSS/SectionsCSS.js';
import { GreenLED, RedLED, SPDTVertical, LEDSegmentDigit4, LEDSegmentDigit8 } from './ComponentsParts.js';

function SectionTop4(props){
    return(
      <> 
        <p className={ SectionsPartsBasicCSS.sectionHeadline }>Övre sektion 4</p>        
        <div className={ SectionsHeadContainersCSS.sectionTop4 }>
            <Section4_1/>
            <Section4_2/>
            <Section4_3/>
            <Section4_4/>
            <Section4_5/>
            <Section4_6
                spdtStatus={ props.thisState.fsApi.test }
            />
        </div>
      </>
    );
  }
  export default SectionTop4;

  let Section4_1 = (props) => {
    return(
        <div className={ SectionsHeadpartsCSS.section4_1 }> 
            {/* ENG status  */}
            <section className={ SectionsHeadContainersCSS.LEDEng4_1Containers }>
                <div className={ SectionsSpecialRoulesCSS.LEDEngOnHorizon }>
                    <GreenLED test={ '1' }/>
                    <GreenLED test={ '2' }/>
                </div>
                <div className={ SectionsSpecialRoulesCSS.LEDEngOffHVertical }>
                    <RedLED test={ '1' }/>
                    <RedLED test={ '2' }/>
                </div>
            </section>

            {/* Gear Up / Dn */}
            <section className={ SectionsHeadContainersCSS.gearUp_DnContainers }>
                <div className={ SectionsSpecialRoulesCSS.LEDEngOffHVertical}>
                    <RedLED test={ '1' }/>
                    <GreenLED test={ '2' }/>
                </div>
                <div className={ SectionsSpecialRoulesCSS.gearMainWheelUpRow1 }>
                    <RedLED test={ '1' }/>
                    <RedLED test={ '2' }/>
                </div>
                <div className={ SectionsSpecialRoulesCSS.gearMainWheelDnRow2 }>
                    <GreenLED test={ '1' }/>
                    <GreenLED test={ '2' }/>
                </div>
            </section>
            {/* Flaps / Speed Brake  Position */}
            <section className={ SectionsSpecialRoulesCSS.flapsSpeedbrake_Poss }>
            <LEDSegmentDigit4
                ledStatusStr={ '0.0.0.0' }
            />
            <LEDSegmentDigit4
                ledStatusStr={ '0.0.0.0' }
            />
            </section>
        </div>
    );
  }
  let Section4_2 = (props) => {
    return(
        <div className={ SectionsHeadpartsCSS.section4_2 }>
            <section className={ SectionsHeadContainersCSS.section4_2Row1 }>
                <LEDSegmentDigit8
                    ledStatusStr={ '0.0.0.0.0.0.0.0' }
                />
                <section className={ SectionsHeadContainersCSS.section4_2Row1Middle }>
                    <GreenLED/>
                    <GreenLED/>
                </section>
                <LEDSegmentDigit8
                    ledStatusStr={ '0.0.0.0.0.0.0.0' }
                />
            </section>

        </div>
    );
}
let Section4_3 = (props) => {
    return(
        <div className={ SectionsHeadpartsCSS.section4_3 }>
            <section className={ SectionsHeadContainersCSS.section4_3Row1 }>
                <LEDSegmentDigit8
                    ledStatusStr={ '0.0.0.0.0.0.0.0' }
                />
                <LEDSegmentDigit8
                    ledStatusStr={ '0.0.0.0.0.0.0.0' }
                />
            </section>
        </div>
    );
}
let Section4_4 = (props) => {
    return(
        <div className={ SectionsHeadpartsCSS.section4_4 }>
            efwsdvdsa
        </div>
    );
}
let Section4_5 = (props) => {
    return(
        <div className={ SectionsHeadpartsCSS.section4_5 }>
            <section className={ SectionsHeadContainersCSS.section4_6InnerFrame }>
                <div className={ SectionsHeadContainersCSS.section4_6LedSpdt }>
                    <div><GreenLED/></div>
                    <div><SPDTVertical spdtStatus={props.spdtStatus }/></div>
                </div>
                <div className={ SectionsHeadContainersCSS.section4_6LedSpdt }>
                    <div><GreenLED/></div>
                    <div><SPDTVertical spdtStatus={props.spdtStatus }/></div>
                </div>
                <div className={ SectionsHeadContainersCSS.section4_6LedSpdt }>
                    <div><GreenLED/></div>
                    <div><SPDTVertical spdtStatus={props.spdtStatus }/></div>
                </div>
                <div className={ SectionsHeadContainersCSS.section4_6LedSpdt }>
                    <div><GreenLED/></div>
                    <div><SPDTVertical spdtStatus={props.spdtStatus }/></div>
                </div>
                <div className={ SectionsHeadContainersCSS.section4_6LedSpdt }>
                    <div><GreenLED/></div>
                    <div><SPDTVertical spdtStatus={props.spdtStatus }/></div>
                </div>
                <div className={ SectionsHeadContainersCSS.section4_6LedSpdt }>
                    <div><GreenLED/></div>
                    <div><SPDTVertical spdtStatus={props.spdtStatus }/></div>
                </div>
            </section>
        </div>
    );
}
let Section4_6 = (props) => {
    return(
        <div className={ SectionsHeadpartsCSS.section4_6 }>
            <section className={ SectionsHeadContainersCSS.section4_6InnerFrame }>
                <div className={ SectionsHeadContainersCSS.section4_6LedSpdt }>
                    <div><GreenLED/></div>
                    <div><SPDTVertical spdtStatus={props.spdtStatus }/></div>
                </div>
                <div className={ SectionsHeadContainersCSS.section4_6LedSpdt }>
                    <div><GreenLED/></div>
                    <div><SPDTVertical spdtStatus={props.spdtStatus }/></div>
                </div>
                <div className={ SectionsHeadContainersCSS.section4_6LedSpdt }>
                    <div><GreenLED/></div>
                    <div><SPDTVertical spdtStatus={props.spdtStatus }/></div>
                </div>
                <div className={ SectionsHeadContainersCSS.section4_6LedSpdt }>
                    <div><GreenLED/></div>
                    <div><SPDTVertical spdtStatus={props.spdtStatus }/></div>
                </div>
                <div className={ SectionsHeadContainersCSS.section4_6LedSpdt }>
                    <div><GreenLED/></div>
                    <div><SPDTVertical spdtStatus={props.spdtStatus }/></div>
                </div>
                <div className={ SectionsHeadContainersCSS.section4_6LedSpdt }>
                    <div><GreenLED/></div>
                    <div><SPDTVertical spdtStatus={props.spdtStatus }/></div>
                </div>
            </section>
        </div>
    );
}