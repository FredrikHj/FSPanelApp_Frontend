import React, { useState  } from 'react';
import { SectionsCSS } from '../../CSS/GenerallCSS.js'
import { SectionMiddle3CSS } from '../../CSS/Sections/SectionMiddle3CSS.js';
import { GreenLED, RedLED, SPDTVertical, SPDTHorizontal, LEDSegmentDigit4, LEDSegmentDigit8, RotarySpdt, RotaryEncorder, PushBtnCircle } from '../ComponentsParts.js';
import { Middle3Panel1Row1, Middle3Panel1Row2, Middle3Panel1Row3, Middle3Panel1Row4, Middle3Panel1Row5 } from './Middle3Panel1Rows.js';
import { Middle3Panel2Row1, Middle3Panel2Row2, Middle3Panel2Row3 } from './Middle3Panel2Rows.js';
import { Middle3Panel3Row1, Middle3Panel3Row2, Middle3Panel3Row3 } from './Middle3Panel3Rows.js';
import { Middle3Panel4Row1, Middle3Panel4Row2, Middle3Panel4Row3 } from './Middle3Panel4Rows.js';
import { Middle3Panel5Row1, Middle3Panel5Row2, Middle3Panel5Row3, Middle3Panel5Row4 } from './Middle3Panel5Rows.js';

function Middle3(props){   
    let fsDataApi = props.importedFsDataApi.fsDataValuesApi;
    console.log(fsDataApi);
    
    return(
        <> 
            <p className={ SectionsCSS.sectionHeadline }>Mitten sektion 3</p>        
            <div className={ SectionMiddle3CSS.section3 }>
                <Middle3Panel1 spdtStatus={ fsDataApi }/>
                <Middle3Panel2 spdtStatus={ fsDataApi }/>
                <Middle3Panel3 spdtStatus={ fsDataApi }/>
                <Middle3Panel4 spdtStatus={ fsDataApi }/>
                <Middle3Panel5 spdtStatus={ fsDataApi }/>
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
    let fsDataApi = props.spdtStatus;
    return(
        <div className={ SectionMiddle3CSS.section3_2 }>
            <Middle3Panel2Row1
                fsDataApi={ fsDataApi }
            />
            <Middle3Panel2Row2
                fsDataApi={ fsDataApi }
            />
            <Middle3Panel2Row3
                fsDataApi={ fsDataApi }
            />
        </div>
    );
}
// Panel3 ==============================================================
let Middle3Panel3 = (props) => {
    let fsDataApi = props.spdtStatus;
    return(
        <div className={ SectionMiddle3CSS.section3_3 }>
            <Middle3Panel3Row1
                fsDataApi={ fsDataApi }
            />
            <Middle3Panel3Row2
                fsDataApi={ fsDataApi }
            />
            <Middle3Panel3Row3
                fsDataApi={ fsDataApi }
            />
        </div>
    );
}
// Panel4 ==============================================================
let Middle3Panel4 = (props) => {    
    let fsDataApi = props.spdtStatus;
    return(
        <div className={ SectionMiddle3CSS.section3_4 }>
            <Middle3Panel4Row1
                fsDataApi={ fsDataApi }
            />
            <Middle3Panel4Row2
                fsDataApi={ fsDataApi }
            />
            <Middle3Panel4Row3
                fsDataApi={ fsDataApi }
            />
        </div>
    );
}
// Panel5 ==============================================================
let Middle3Panel5 = (props) => {
    let fsDataApi = props.spdtStatus;
    return(
        <div className={ SectionMiddle3CSS.section3_5 }>
            <Middle3Panel5Row1
                fsDataApi={ fsDataApi }
            />
            <Middle3Panel5Row2
                fsDataApi={ fsDataApi }
            />
            <Middle3Panel5Row3
                fsDataApi={ fsDataApi }
            />
            <Middle3Panel5Row4
                fsDataApi={ fsDataApi }
            />
        </div>
    );
}