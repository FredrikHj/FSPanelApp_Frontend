import { css } from 'glamor';
import { relative } from 'path';

const sectionsCommonRoules = {
    colorGrey: 'grey',
    border3: '3px solid black',
    border2: '2px solid black',
    border1: '1px solid black',
}
export const SectionsPartsBasicCSS = {
    sectionHeadline: css({
        'width': '100%',
        'textAlign': 'center',
        'marginBottom': '0',
    }),
    sectionLeft1_2Container: css({
        'width': '15%',
    }),

}
export const SectionsHeadContainersCSS = {
    sectionTop5: css({
        'width': '100%',
        'height': '151px',
        'display': 'flex',
        'flexDirection': 'row',
    }),
    sectionTop4: css({
        'width': '100%',
        'height': '180px',
        'display': 'flex',
        'flexDirection': 'row',
    }),
    LEDEng4_1Containers: css({
        'position': 'relative',
        'top': '30%',
        'left': '10px',
    }),
    gearUp_DnContainers: css({
        'position': 'relative',
        'top': '0',
        'left': '120px',
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
        'display': 'flex',
        'flexDirection': 'row',
        'justifyContent': 'space-between',
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
export const SectionsHeadpartsCSS = {
  //  Övre Nivå 5 - 5:1 | Measure: 1667.905512x591.874016
    section5_1: css({
        'width': '32%',
        'height': '141px',
        'position': 'relative',
        'top': '10px',
        'bottom': '0',
        'backgroundColor': sectionsCommonRoules.colorGrey,
        'borderRight': sectionsCommonRoules.border3,
    }),
    /*  Övre Nivå 5 - 5:2 | Measure: 1131x633.070866 */
    section5_2: css({
        'width': '20%',
        'backgroundColor': sectionsCommonRoules.colorGrey,
        'borderRight': sectionsCommonRoules.border3,
    }),
        /*  Övre Nivå 5 - 5:3 | Measure: 1093x633.070866 */
    section5_3: css({
        'width': '15%',
        'backgroundColor': sectionsCommonRoules.colorGrey,
        'borderRight': sectionsCommonRoules.border3,
    }),
    /*  Övre Nivå 5 - 5:4 | Measure: 1093x633.070866 */
    section5_4: css({
        'width': '15%',
        'backgroundColor': sectionsCommonRoules.colorGrey,
        'borderRight': sectionsCommonRoules.border3,
    }),
        /*  Övre Nivå 5 - 5:5 | Measure: 1282x633.070866 */
    section5_5: css({
        'width': '30%',
        'backgroundColor': sectionsCommonRoules.colorGrey,
        'borderRight': sectionsCommonRoules.border3,
        }),
        /*  Övre Nivå 5 - 5:6 | Measure: 1667.905512x591x591.874016 */
    section5_6: css({
        'width': '32%',
        'height': '141px',
        'position': 'relative',
        'top': '10px',
        'bottom': '0',
        'backgroundColor': sectionsCommonRoules.colorGrey,
    }),
    // ==========================================================
    /*  Övre Nivå 4 - 4:1 | Measure: 1667.905512x591.874016 */

    section4_1: css({
        'position': 'relative',
        'bottom': '0',
        'width': '27%',
        'backgroundColor': sectionsCommonRoules.colorGrey,
        'borderRight': sectionsCommonRoules.border3,
    }),
    /*  Övre Nivå 4 - 4:2 | Measure: 1131x633.070866 */
    section4_2: css({
        'width': '30%',
        'backgroundColor': sectionsCommonRoules.colorGrey,
        'borderRight': sectionsCommonRoules.border3,
    }),
    /*  Övre Nivå 4 - 4:3 | Measure: 1093x633.070866 */
    section4_3: css({
        'width': '20%',
        'backgroundColor': sectionsCommonRoules.colorGrey,
        'borderRight': sectionsCommonRoules.border3,
    }),
    /*  Övre Nivå 4 - 4:4 | Measure: 1093x633.070866 */
    section4_4: css({
        'width': '15%',
        'backgroundColor': sectionsCommonRoules.colorGrey,
        'borderRight': sectionsCommonRoules.border3,
    }),
    /*  Övre Nivå 4 - 4:5 | Measure: 1282x633.070866 */
    section4_5: css({
        'width': '30%',
        'backgroundColor': sectionsCommonRoules.colorGrey,
        'borderRight': sectionsCommonRoules.border3,
    }),
    /*  Övre Nivå 4 - 4:6 | Measure: 1667.905512x591x591.874016 */
    section4_6: css({
        'bottom': '0',
        'width': '35%',
        'backgroundColor': sectionsCommonRoules.colorGrey,
    }),

    /*  Left 1 - 2:1 | Measure: 5.25x2.2 */
    sectionLeft2_1: css({
        'marginTop': '15px',
        'height': '83.149606px',
        'backgroundColor': sectionsCommonRoules.colorGrey,
        'borderBottom': sectionsCommonRoules.border3,
    }),
    /*  Left 1 - 2:2 | Measure: 5.25x3,5 */
    sectionLeft2_2: css({
        'height': '132.283465px',
        'backgroundColor': sectionsCommonRoules.colorGrey,
    }),
    /*  Left 1 - 1 | Measure = 5.25x1.925 */
    sectionLeft1: css({
        'marginTop': '15px',
        'height': '72.755906px',
        'backgroundColor': sectionsCommonRoules.colorGrey,
        'border': sectionsCommonRoules.border3,
    }),
}
export const SectionsSpecialRoulesCSS = {
    section5_1__LEDContainer: css({
        'position': 'relative',
        'left': '1px',
        'top': '10px',
    }),
    LEDContainer__rowdTop5_6: css({
        'width': '180px',
        'marginLeft': '11px',
        'display': 'flex',
        'flexDirection': 'row',
        'justifyContent': 'space-between',
    }),
    LEDContainer__rowdMiddle5_6: css({
        'width': '273px',
        'marginLeft': '11px',
        'display': 'flex',
        'flexDirection': 'row',
        'justifyContent': 'space-between',
    }),
    LEDContainer__rowdBottom5_6: css({
        'width': '335px',
        'marginLeft': '11px',
        'display': 'flex',
        'flexDirection': 'row',
        'justifyContent': 'space-between',
    }),
    section5_6__LEDContainer: css({
        'position': 'relative',
        'left': '-12px',
        'top': '10px',
    }),
    LEDContainer__rowdTop5_1: css({
        'width': '180px',
        'marginLeft': '165px',
        'display': 'flex',
        'flexDirection': 'row',
        'justifyContent': 'space-between',
    }),
    LEDContainer__rowdMiddle5_1: css({
        'width': '273px',
        'marginLeft': '73px',
        'display': 'flex',
        'flexDirection': 'row',
        'justifyContent': 'space-between',
    }),
    LEDContainer__rowdBottom5_1: css({
        'width': '335px',
        'marginLeft': '10px',
        'display': 'flex',
        'flexDirection': 'row',
        'justifyContent': 'space-between',
    }),
    LEDEngOnHorizon: css({
        'width': '25%',
        'display': 'flex',
        'flexDirection': 'row',
        'justifyContent': 'space-between',
    }),
    LEDEngOffHVertical: css({
        'marginTop': '10px',
        'width': '10%',
        'height': '50%',
        'display': 'flex',
        'marginTop': '-60px',
        'marginLeft': '30px',
        'flexDirection': 'column',
        'justifyContent': 'space-between',
    }),

    gearMainWheelUpRow1: css({
        'width': '25%',
        'display': 'flex',
        'flexDirection': 'row',
        'justifyContent': 'space-between',
    }),
    gearMainWheelDnRow2: css({
        'width': '25%',
        'display': 'flex',
        'flexDirection': 'row',
        'justifyContent': 'space-between',
    }),
    gearNoseWheelUp_Dn: css({
        'width': '10%',
        'height': '50%',
        'display': 'flex',
        'marginTop': '100px',
        'flexDirection': 'column',
        'justifyContent': 'space-between',
    }),
    flapsSpeedbrake_Poss: css({
        'marginTop': '10px',
        'width': '10%',
        'height': '50%',
        'display': 'flex',
        'marginTop': '-130px',
        'marginLeft': '225px',
        'flexDirection': 'column',
        'justifyContent': 'space-between',
    }),
}