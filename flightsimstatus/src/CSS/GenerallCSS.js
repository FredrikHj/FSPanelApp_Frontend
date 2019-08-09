import { css } from 'glamor';

// ======================== Common CSS roulse =========================
export const SectionCommonRoules = {
    colorGrey: 'grey',
    border3B: '3px solid black',
    border2B: '2px solid black',
    border1B: '1px solid black',
    border1R: '1px solid red',
}
// ===================================================================
export const BasicCSS = {
    outerFrame: css({
        'width': '3000px',
    }),
    header: css({
        'width': '100%',
        'height': '150px',
        'display': 'flex',
        'flexDirection': 'row',
        'justifyContent': 'space-between',
        'backgroundColor': 'grey',
    }),
    mainHeadLine: css({
        'fontSize': '2em',
        'textAlign': 'center',
        'marginTop': '5px',
        'marginBottom': '10px',
        'letterSpacing': '20px',
        'fontWeight': 'bold',
    }),
};
export const SectionsCSS = {
    sectionHeadline: css({
        'fontSize': '1.5em',
        'marginTop': '15px',
        'marginBottom': '30px',
        'letterSpacing': '10px',
        'fontWeight': 'bold',
    }),
    sectionContainer1: css({
        'marginTop': '0px',
    }),
    sectionContainer2: css({
        'marginTop': '0px',
    }),
    sectionContainer3: css({
        'marginTop': '0px',
    }),
    sectionContainer4: css({
        'marginTop': '0px',
    }),
    sectionContainer5: css({
        'marginTop': '0px',
    }),
    sectionActiveFSParts: css({
        'fontSize': '1.5em',
        'marginLeft': '20px',
        'marginTop': '15px',
        'marginBottom': '30px',
        'letterSpacing': '10px',
        'fontWeight': 'bold',

    }),
};

