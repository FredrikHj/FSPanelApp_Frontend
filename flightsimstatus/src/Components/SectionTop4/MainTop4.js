import React, { useState  } from 'react';
import { SectionsCSS } from '../../CSS/GenerallCSS.js'
import { SectionTop4CSS } from '../../CSS/Sections/SectionTop4CSS.js';
import { GreenLED, RedLED, SPDTVertical, LEDSegmentDigit4, LEDSegmentDigit8, RotarySpdt, RotaryEncorder } from '../ComponentsParts.js';
import { Top4Panel2Row1, Top4Panel2Row2, Top4Panel2Row3 } from './Top4Panel2Rows.js';
function Top4(props){
    let fsDataApi = props.importedFsDataApi.fsDataValuesApi;
    return(
        <> 
            <p className={ SectionsCSS.sectionHeadline }>Övre sektion 4</p>        
            <div className={ SectionTop4CSS.sectionTop4 }>
                <Top4_1 spdtStatus={ fsDataApi }/>
                <Top4_2 spdtStatus={ fsDataApi }/>
                <Top4_3 spdtStatus={ fsDataApi }/>
                <Top4_4 spdtStatus={ fsDataApi }/>
                <Top4_5 spdtStatus={ fsDataApi }/>
                <Top4_6 spdtStatus={ fsDataApi }/>
            </div>
        </>
    );
  }
  export default Top4;

  let Top4_1 = (props) => {
    return(
        <div className={ SectionTop4CSS.section4_1 }> 
            <section className={ SectionTop4CSS.section4_1ComponentsContainer }>
                {/* ENG status  */}
                <section className={ SectionTop4CSS.section4_1LEDEng4_1Containers }>
                    <div className={ SectionTop4CSS.section4_1LEDEngOnHorizontal }>
                        <GreenLED commandName={ 'Name' }/>
                        <GreenLED commandName={ 'Name' }/>
                    </div>
                    <div className={ SectionTop4CSS.section4_1LEDEngOffVertical }>
                        <RedLED commandName={ 'Name' }/>
                        <RedLED commandName={ 'Name' }/>
                    </div>
                </section>
                {/* Gear Up / Dn */}
                
                <section className={ SectionTop4CSS.section4_1GearUp_DnContainers }>
                    <div className={ SectionTop4CSS.section4_1GearNoseWheelUp_Dn }>
                        <RedLED commandName={ 'Name' }/>
                        <GreenLED commandName={ 'Name' }/>
                    </div>
                    <div className={ SectionTop4CSS.section4_1GearMainWheelUpRow1 }>
                        <RedLED commandName={ 'Name' }/>
                        <RedLED commandName={ 'Name' }/>
                    </div>
                    <div className={ SectionTop4CSS.section4_1GearMainWheelDnRow2 }>
                        <GreenLED commandName={ 'Name' }/>
                        <GreenLED commandName={ 'Name' }/>
                    </div>
                </section>

                {/* Flaps / Speed Brake  Position */}
                <section className={ SectionTop4CSS.section4_1FlapsSpeedbrake_PossContainer }>
                    <LEDSegmentDigit4
                        segmentName={ 'Name' }
                        segmentsValue={ '0.0.0.0' }
                    />
                    <LEDSegmentDigit4
                        segmentName={ 'Name' }
                        segmentsValue={ '0.0.0.0' }
                    />
                </section>
            </section>
        </div>
    );
  }
  let Top4_2 = (props) => {
    let fsDataApi = props.spdtStatus;
    return(
        <div className={ SectionTop4CSS.section4_2 }>
           <Top4Panel2Row1
                fsDataApi={ fsDataApi }
            />
            <Top4Panel2Row2
                fsDataApi={ fsDataApi }
            />
        </div>
    );
}
let Top4_3 = (props) => {
    return(
        <div className={ SectionTop4CSS.section4_3 }>
            <section className={ SectionTop4CSS.section4_3Row1 }>
                <LEDSegmentDigit8
                    segmentName={ 'Name' }
                    segmentsValue={ '0.0.0.0.0.0.0.0' }
                />
                <LEDSegmentDigit8
                    segmentName={ 'Name' }
                    segmentsValue={ '0.0.0.0.0.0.0.0' }
                />
            </section>
            <section className={ SectionTop4CSS.section4_3Row2 }>
                <div className={ SectionTop4CSS.section4_3Row2RotarySpdt1 }>
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
                        rotaryStatus={ props.rotaryStatus }
                    />
                </div>
                <div className={ SectionTop4CSS.section4_3Row22RotaryEncorder2 }>
                    <RotaryEncorder
                        commandName={ 'Name' }
                        direction= { '-360' }/>
                    <RotaryEncorder
                        commandName={ 'Name' }
                        direction= { '360' }/>
                </div>
                <div className={ SectionTop4CSS.section4_3Row2Spdt3 }>
                    <SPDTVertical commandName={ 'Name' } spdtStatus={props.test } />
                </div>
            </section>
        </div>
    );
}
let Top4_4 = (props) => {  
    return(
        <div className={ SectionTop4CSS.section4_4 }>
            <section className={ SectionTop4CSS.section4_4LedSpdf }>
                <section className={ SectionTop4CSS.section4_4TopRowRotarySpdf }>
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
                        rotaryStatus={ props.rotaryStatus }
                    />
                </section>
                <section className={ SectionTop4CSS.section4_4Spdfx2Container }>
                    <div className={ SectionTop4CSS.section4_4Spdfx2 }><SPDTVertical commandName={ 'Name' } spdtStatus={props.test } /></div>
                    <div className={ SectionTop4CSS.section4_4Spdfx2 }><SPDTVertical commandName={ 'Name' } spdtStatus={props.test } /></div>
                </section>
            </section>
            <section className={ SectionTop4CSS.section4_4LedSpdfContainer }>
                <section className={ SectionTop4CSS.section4_4LedSpdf }>
                    <section className={ SectionTop4CSS.section4_4TopRowLed }>
                        <GreenLED commandName={ 'Name' }/>
                        <GreenLED commandName={ 'Name' }/>
                    </section>
                    <div className={ SectionTop4CSS.section4_4Spdf }><SPDTVertical commandName={ 'Name' } spdtStatus={props.test } /></div>
                </section>
                <section className={ SectionTop4CSS.section4_4LedSpdf }>
                    <section className={ SectionTop4CSS.section4_4TopRowLed }>
                        <GreenLED commandName={ 'Name' }/>
                        <GreenLED commandName={ 'Name' }/>
                    </section>
                    <div className={ SectionTop4CSS.section4_4Spdf }><SPDTVertical commandName={ 'Name' } spdtStatus={props.test } /></div>
                </section>
                <section className={ SectionTop4CSS.section4_4LedSpdf }>
                    <section className={ SectionTop4CSS.section4_4TopRowLed }>
                        <GreenLED commandName={ 'Name' }/>
                        <GreenLED commandName={ 'Name' }/>
                    </section>
                    <div className={ SectionTop4CSS.section4_4Spdf }><SPDTVertical commandName={ 'Name' } spdtStatus={props.test } /></div>
                </section>
                <section className={ SectionTop4CSS.section4_4LedSpdf }>
                    <div className={ SectionTop4CSS.section4_4LastColLed }><GreenLED commandName={ 'Name' }/></div>
                    <div className={ SectionTop4CSS.section4_4LastSpdf }><SPDTVertical commandName={ 'Name' } spdtStatus={props.test } /></div>
                </section>
            </section>
        </div>
    );
}
let Top4_5 = (props) => {
    return(
        <div className={ SectionTop4CSS.section4_5 }>
            <section className={ SectionTop4CSS.section4_6InnerFrame }>
                <div className={ SectionTop4CSS.section4_6LedSpdt }>
                    <div><GreenLED commandName={ 'Name' } commandName={ 'Name' }/></div>
                    <div><SPDTVertical commandName={ 'Name' } pdtStatus={props.spdtStatus }/></div>
                </div>
                <div className={ SectionTop4CSS.section4_6LedSpdt }>
                    <div><GreenLED commandName={ 'Name' }/></div>
                    <div><SPDTVertical commandName={ 'Name' } spdtStatus={props.spdtStatus }/></div>
                </div>
                <div className={ SectionTop4CSS.section4_6LedSpdt }>
                    <div><GreenLED commandName={ 'Name' }/></div>
                    <div><SPDTVertical commandName={ 'Name' } spdtStatus={props.spdtStatus }/></div>
                </div>
                <div className={ SectionTop4CSS.section4_6LedSpdt }>
                    <div><GreenLED commandName={ 'Name' }/></div>
                    <div><SPDTVertical commandName={ 'Name' } spdtStatus={props.spdtStatus }/></div>
                </div>
                <div className={ SectionTop4CSS.section4_6LedSpdt }>
                    <div><GreenLED commandName={ 'Name' }/></div>
                    <div><SPDTVertical commandName={ 'Name' } spdtStatus={props.spdtStatus }/></div>
                </div>
                <div className={ SectionTop4CSS.section4_6LedSpdt }>
                    <div><GreenLED commandName={ 'Name' }/></div>
                    <div><SPDTVertical commandName={ 'Name' } spdtStatus={props.spdtStatus }/></div>
                </div>
            </section>
        </div>
    );
}
let Top4_6 = (props) => {
    return(
        <div className={ SectionTop4CSS.section4_6 }>
            <section className={ SectionTop4CSS.section4_6InnerFrame }>
                <div className={ SectionTop4CSS.section4_6LedSpdt }>
                    <div><GreenLED commandName={ 'Name' }/></div>
                    <div><SPDTVertical commandName={ 'Name' } spdtStatus={props.test } /></div>
                </div>
                <div className={ SectionTop4CSS.section4_6LedSpdt }>
                    <div><GreenLED commandName={ 'Name' }/></div>
                    <div><SPDTVertical commandName={ 'Name' } spdtStatus={props.test } /></div>
                </div>
                <div className={ SectionTop4CSS.section4_6LedSpdt }>
                    <div><GreenLED commandName={ 'Name' }/></div>
                    <div><SPDTVertical commandName={ 'Name' } spdtStatus={props.test } /></div>
                </div>
                <div className={ SectionTop4CSS.section4_6LedSpdt }>
                    <div><GreenLED commandName={ 'Name' }/></div>
                    <div><SPDTVertical commandName={ 'Name' } spdtStatus={props.test } /></div>
                </div>
                <div className={ SectionTop4CSS.section4_6LedSpdt }>
                    <div><GreenLED commandName={ 'Name' }/></div>
                    <div><SPDTVertical commandName={ 'Name' } spdtStatus={props.test } /></div>
                </div>
                <div className={ SectionTop4CSS.section4_6LedSpdt }>
                    <div><GreenLED commandName={ 'Name' }/></div>
                    <div><SPDTVertical commandName={ 'Name' } spdtStatus={props.test } /></div>
                </div>
            </section>
        </div>
    );
}