import { css } from 'glamor';
import { SectionCommonRoules } from '../GenerallCSS.js';

// ======================== Section Top4 =========================
export const SectionTop4CSS = {
    sectionTop4: css({
        'width': '100%',
        'height': '200px',
        'display': 'flex',
        'flexDirection': 'row',
    }),
    section4_1: css({
        'display': 'flex',
        'flexDirection': 'row',   
        'position': 'relative',
        'bottom': '0',
        'width': '15%',
        'backgroundColor': SectionCommonRoules.colorGrey,
        'borderRight': SectionCommonRoules.border3B,
    }),
    section4_1ComponentsContainer: css({
        'display': 'flex',
        'flexDirection': 'row', 
    }),
    section4_1LEDEng4_1Containers: css({
        'position': 'relative',
        'top': '30%',
        'left': '10px',
    }),
    section4_1GearUp_DnContainers: css({
        'position': 'relative',
        'width': '400px',
        'top': '-90px',
        'left': '30px',
    }),
    section4_1LEDEngOnHorizontal: css({
        'width': '120px',
        'display': 'flex',
        'flexDirection': 'row',
        'justifyContent': 'space-between',
    }),
    section4_1LEDEngOffVertical: css({
        'marginTop': '10px',
        'width': '10%',
        'height': '65%',
        'display': 'flex',
        'marginTop': '-80px',
        'marginLeft': '50px',
        'flexDirection': 'column',
        'justifyContent': 'space-between',
    }),
    section4_1GearNoseWheelUp_Dn: css({
        'display': 'flex',
        'flexDirection': 'column',
        'justifyContent': 'space-between',
        'marginTop': '100px',
        'width': '10%',
        'height': '50%',
        'marginLeft': '40px',
    }),
    section4_1GearMainWheelUpRow1: css({
        'width': '25%',
        'display': 'flex',
        'flexDirection': 'row',
        'justifyContent': 'space-between',
    }),
    section4_1GearMainWheelDnRow2: css({
        'width': '25%',
        'display': 'flex',
        'flexDirection': 'row',
        'justifyContent': 'space-between',
    }),
    section4_1FlapsSpeedbrake_PossContainer: css({
        'width': '10%',
        'height': '50%',
        'display': 'flex',
        'marginTop': '30px',
        'marginLeft': '-200px',
        'flexDirection': 'column',
        'justifyContent': 'space-between',
    }),
    // ===========================================================
    section4_2: css({
        'width': '20%',
        'backgroundColor': SectionCommonRoules.colorGrey,
        'borderRight': SectionCommonRoules.border3B,
    }),
    section4_2Row1: css({
        'display': 'flex',
        'flexDirection': 'row',
        'justifyContent': 'space-around',
        'width': '100%',
        'marginTop': '20px',
    }),
    section4_2Row1Middle: css({
        'display': 'flex',
        'flexDirection': 'row',
        'justifyContent': 'space-between',
        'width': '100px',
        'marginTop': '-10px',
        'marginLeft': '-5px',
    }),
    section4_2Row2: css({
        'marginTop': '10px',
        'marginLeft': '15px',
        'display': 'flex',
        'flexDirection': 'row',
        'justifyContent': 'space-between',
        'alignItems': 'Center',
        'width': '80%',
    }),
    section4_2Row22xledSpdf: css({
        'display': 'flex',
        'flexDirection': 'row',
        'justifyContent': 'space-between',
        'alignItems': 'Center',
        'width': '5%',
     
    }),
    section4_2Row2Led1: css({
        'marginRight': '15px',
    }),
    section4_2Row2Spdf2: css({
        'margin': '10px',

    }),
    section4_2Row2Led3: css({
        'marginLeft': '-35px',
    }),
    section4_2Row2RotaryEncorder: css({
        'width': '100px',
        'display': 'flex',
        'flexDirection': 'row',
        'justifyContent': 'space-between',
    }),
    section4_2Row2LeftRotarySpdt: css({
        'marginTop': '40px',
        'marginLeft': '50px',
    }),
    // ===========================================================
    section4_3: css({
        'width': '15%',
        'backgroundColor': SectionCommonRoules.colorGrey,
        'borderRight': SectionCommonRoules.border3B,
    }),
    section4_3Row1: css({
        'display': 'flex',
        'flexDirection': 'row',
        'justifyContent': 'space-between',
        'width': '250px',
        'marginTop': '20px',
        'marginLeft': 'calc(50% - 125px)',
    }),
    section4_3Row2: css({
        'display': 'flex',
        'flexDirection': 'row',
        'justifyContent': 'space-around',
        'width': '100%',
    }),
    section4_3Row2RotarySpdt1: css({
        'marginTop': '45px',
        'marginLeft': '50px',
    }),
    section4_3Row22RotaryEncorder2: css({
        'display': 'flex',
        'flexDirection': 'row',
        'justifyContent': 'space-between',
        'width': '100px',
        'marginLeft': '-10px',
    }),
    section4_3Row2Spdt3: css({
        'marginLeft': '50px',
    }),
    // ===========================================================
    section4_4: css({
        'display': 'flex',
        'flexDirection': 'row',
        'width': '22%',
        'paddingLeft': '20px',
        'backgroundColor': SectionCommonRoules.colorGrey,
        'borderRight': SectionCommonRoules.border3B,
    }),
    section4_4LedSpdf: css({
        'display': 'flex',
        'flexDirection': 'column',
        'justifyContent': 'space-between',
        'width': '80px',
        'marginTop': '10px',
        'marginLeft': '50px',
    }),
    section4_4TopRowRotarySpdf: css({
        'marginTop': '0',
        'marginLeft': '10%',
    }),
    section4_4Spdfx2Container: css({
        'display': 'flex',
        'flexDirection': 'row',   
        'marginRight': '100px',
        'width': '150px',
        'marginTop': '-15px',
    }),
    section4_4Spdfx2: css({ 
        'marginRight': '40px',
        'width': '10px',
    }),
    section4_4Spdf: css({
        'marginLeft': '50%',
    }),
    section4_4LastColLed: css({
        'marginTop': '10px',
        'marginLeft': '30%',
    }),
    section4_4LastSpdf: css({
        'marginLeft': '30%',
    }),
    section4_4TopRowLed: css({
        'display': 'flex',
        'flexDirection': 'row',
        'justifyContent': 'space-around',
        'width': '100px',
        'marginTop': '10px',
        'marginLeft': '-5px',
    }),
    // ===========================================================
    section4_5: css({
        'width': '12%',
        'backgroundColor': SectionCommonRoules.colorGrey,
        'borderRight': SectionCommonRoules.border3B,
    }),
    section4_6: css({
        'bottom': '0',
        'width': '15%',
        'backgroundColor': SectionCommonRoules.colorGrey,
    }),
    section4_6InnerFrame: css({
        'display': 'flex',
        'flexDirection': 'rox',
        'width': '300px',
        'marginLeft': '15px',
    }),
    section4_6LedSpdt: css({
        'display': 'flex',
        'marginTop': '20px',
        'flexDirection': 'column',
        'justifyContent': 'space-betwween',
        'width': '50px',
    }),
}
