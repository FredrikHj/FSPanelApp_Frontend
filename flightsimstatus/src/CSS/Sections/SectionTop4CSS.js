import { css } from 'glamor';
import { SectionCommonRoules } from '../GenerallCSS.js';

// ======================== Section Top4 =========================
export const SectionTop4CSS = {
    sectionTop4: css({
        'width': '100%',
        'height': '180px',
        'display': 'flex',
        'flexDirection': 'row',
    }),
    section4_1: css({
        'display': 'flex',
        'flexDirection': 'row',   
        'position': 'relative',
        'bottom': '0',
        'width': '27%',
        'backgroundColor': SectionCommonRoules.colorGrey,
        'borderRight': SectionCommonRoules.border3,
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
        'width': '200px',
        'top': '-100px',
        'left': '50px',
    }),
    section4_1LEDEngOnHorizontal: css({
        'width': '80px',
        'display': 'flex',
        'flexDirection': 'row',
        'justifyContent': 'space-between',
    }),
    section4_1LEDEngOffVertical: css({
        'marginTop': '10px',
        'width': '10%',
        'height': '50%',
        'display': 'flex',
        'marginTop': '-60px',
        'marginLeft': '30px',
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
        'marginLeft': '20px',
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
        'marginLeft': '-20px',
        'flexDirection': 'column',
        'justifyContent': 'space-between',
    }),
    // ===========================================================
    section4_2: css({
        'width': '30%',
        'backgroundColor': SectionCommonRoules.colorGrey,
        'borderRight': SectionCommonRoules.border3,
    }),
    section4_2Row1: css({
        'display': 'flex',
        'flexDirection': 'row',
        'justifyContent': 'space-around',
        'width': '330px',
        'marginTop': '20px',
        'marginLeft': '20px',
    }),
    section4_2Row1Middle: css({
        'display': 'flex',
        'flexDirection': 'row',
        'justifyContent': 'space-around',
        'width': '60px',
        'marginTop': '-10px',
        'marginLeft': '-5px',
    }),
    section4_2Row2: css({
        'marginLeft': '10px',
        'display': 'flex',
        'flexDirection': 'row',
        'justifyContent': 'space-between',
        'alignItems': 'Center',
        //'width': '90%',
    }),
    section4_2Row22xledSpdf: css({
        'display': 'flex',
        'flexDirection': 'row',
        'justifyContent': 'space-between',
        'alignItems': 'Center',
    }),
    section4_2Row2Spdf: css({
        'marginLeft': '50%',
    }),
    section4_2Row2RotaryEncorder: css({
        'display': 'flex',
        'flexDirection': 'row',
        'justifyContent': 'space-between',
    }),
    section4_2Row2LeftRotarySpdt: css({
        'marginTop': '40px',
    }),
    // ===========================================================
    section4_3: css({
        'width': '20%',
        'backgroundColor': SectionCommonRoules.colorGrey,
        'borderRight': SectionCommonRoules.border3,
    }),
    section4_3Row1: css({
        'display': 'flex',
        'flexDirection': 'row',
        'justifyContent': 'space-around',
        'width': '250px',
        'marginTop': '20px',
    }),
    section4_3Row2: css({
        'display': 'flex',
        'flexDirection': 'row',
        'justifyContent': 'space-around',
    }),
    // ===========================================================
    section4_4: css({
        'display': 'flex',
        'flexDirection': 'row',
        'width': '20%',
        'paddingLeft': '20px',
        'backgroundColor': SectionCommonRoules.colorGrey,
        'borderRight': SectionCommonRoules.border3,
    }),
    section4_4LedSpdf: css({
        'display': 'flex',
        'flexDirection': 'column',
        'justifyContent': 'space-between',
        'width': '80px',
        'marginTop': '10px',
        'marginLeft': '20px',
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
        'marginRight': '30px',
        'width': '10px',
    }),
    section4_4Spdf: css({
        'marginLeft': '50%',
    }),
    section4_4LastColLed: css({
        'marginTop': '-10px',
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
        'marginTop': '-10px',
        'marginLeft': '-5px',
    }),
    // ===========================================================
    section4_5: css({
        'width': '15%',
        'backgroundColor': SectionCommonRoules.colorGrey,
        'borderRight': SectionCommonRoules.border3,
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
        'flexDirection': 'column',
        'justifyContent': 'space-betwween',
        'width': '50px',
    }),
}
