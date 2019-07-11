import React, { useState  } from 'react';

function SectionTop5(props){
    return(
      <section className="sectionContainer"> 
        <p className="sectionHeadline">Övre sektion 5</p>        
        <div className="sectionTop5">
            <Section5_1/>
            <Section5_2/>
            <Section5_3/>
            <Section5_4/>
            <Section5_5/>
            <Section5_6/>
        </div>
      </section>
    );
  }
  export default SectionTop5;

  let Section5_1 = () => {
    return(
        <div className="section5_1"> 

        </div>
    );
  }
  let Section5_2 = () => {
    return(
        <div className="section5_2">
            efwsdvdsa
        </div>
    );
}
let Section5_3 = () => {
    return(
        <div className="section5_3">
            efwsdvdsa
        </div>
    );
}
let Section5_4 = () => {
    return(
        <div className="section5_4">
            efwsdvdsa
        </div>
    );
}
let Section5_5 = () => {
    return(
        <div className="section5_5">
            efwsdvdsa
        </div>
    );
}
let Section5_6 = () => {
    return(
        <div className="section5_6">
            <div></div>
            <div></div>
            efwsdvdsa
        </div>
    );
}