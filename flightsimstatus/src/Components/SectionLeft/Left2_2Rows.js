import React, { useState  } from 'react';
import { SectionLeft1_2CSS } from '../../CSS/Sections/SectionLeft1CSS.js';
import { SPDTVertical } from '../ComponentsParts.js';

export let Left2_2Row1 = (props) => {
    let fsDataApi = props.fsDataApi;
    console.log(fsDataApi);
    
    return(
        <div className={ SectionLeft1_2CSS.sectionLeft2_2Row1 }>
            <div><SPDTVertical commandName={ 'Name' } spdtStatus={fsDataApi.fsDataValuesApi.test } /></div>
            <div><SPDTVertical commandName={ 'Name' } spdtStatus={fsDataApi.fsDataValuesApi.test } /></div>
            <div><SPDTVertical commandName={ 'Name' } spdtStatus={fsDataApi.fsDataValuesApi.test } /></div>
            <div><SPDTVertical commandName={ 'Name' } spdtStatus={fsDataApi.fsDataValuesApi.test } /></div>
            <div><SPDTVertical commandName={ 'Name' } spdtStatus={fsDataApi.fsDataValuesApi.test } /></div>
            <div><SPDTVertical commandName={ 'Name' } spdtStatus={fsDataApi.fsDataValuesApi.test } /></div>
        </div>
    );
}

export let Left2_2Row2 = (props) => {
    let fsDataApi = props.fsDataApi;
    return(
        <div className={ SectionLeft1_2CSS.sectionLeft2_2Row2 }>
            <div><SPDTVertical commandName={ 'Name' } spdtStatus={fsDataApi.fsDataValuesApi.test } /></div>
            <div><SPDTVertical commandName={ 'Name' } spdtStatus={fsDataApi.fsDataValuesApi.test } /></div>
            <div className={ SectionLeft1_2CSS.sectionLeft2_2Row2Spdt3 }><SPDTVertical commandName={ 'Name' } spdtStatus={fsDataApi.fsDataValuesApi.test } /></div>
            <div><SPDTVertical commandName={ 'Name' } spdtStatus={fsDataApi.fsDataValuesApi.test } /></div>
            <div><SPDTVertical commandName={ 'Name' } spdtStatus={fsDataApi.fsDataValuesApi.test } /></div>
            <div><SPDTVertical commandName={ 'Name' } spdtStatus={fsDataApi.fsDataValuesApi.test } /></div>
        </div>
    );
}