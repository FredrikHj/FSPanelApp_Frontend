
import React, {useState, useEffect } from 'react';
import { render } from 'react-dom';
import io from 'socket.io-client';
//import axios from 'axios';


// =========================================================================================
function MainApp() {
  let [restAPIUrl, setRestAPIUrl] = useState('');
  let [fsApi, setFsApi] = useState({});



/* 


  render() {
    return (<div />);
  }

}
render(<App />, document.getElementById('root'));
 */
  useEffect(() => {
    setRestAPIUrl('http://localhost:3001/FSData');
    loadData();
    setInterval(loadData, 500);
    
    //let listen = io.connect(url);

    // Listen on respponse from the chatserver
/*     listen.on('fsAPIData', res => {
      console.log(res);
      setFsApi(res)
    });   */
    console.log('vd<s');
    
/*     listen.on('connection', function(){

      
    });     */   
  });
  async function loadData(){
    try {
      const res = await fetch(restAPIUrl);
      const blocks = await res.json();
      setFsApi(blocks);
      console.log(blocks)
    }
    catch (e) {
      console.log(e);
    }
  }
  function getFSData() {

  }

 
let twoPossSwitch = () => {
/*   let getSwitchName = element.querySelector('.mds-switch__SwitchName');
  let getSwitchState = element.querySelector('.mds-switch__SwitchState');
  let getMain = document.querySelector('.mainContent');

  getSwitchState.textContent = 'OFF';
  let switchStateOff = true;
  element.addEventListener('click', function () {
    if (switchStateOff === true) {
      getSwitchState.textContent = 'ON';
      getMain.setAttribute('class', 'mainContent mainContent--disabled');
      switchStateOff = false;
    }
    else if (switchStateOff === false) {
      getSwitchState.textContent = 'OFF';
      getMain.setAttribute('class', 'mainContent');
      switchStateOff = true;
    }
  }); */
}

return (
    <>
    <div id="sektionLeft2_1" style={(fsApi.component1 === '1') ? {color: 'red'} : {color: 'green'}} >
      2:2

    </div>
    <div id="sektionLeft2_2">
      2:1
    </div>

    <section id="sektionContainer"> 
      <p className="section1Label">Vänster sektion 1 - Nivå 1</p>
      <div id="sektionLeft1">

        <div id="vs1_1_p1" className="spdt switch2PossVertical">
          <p className="spdtLabelTop">on</p>

          <div className="mds-switch">
            <input type="checkbox" className="mds-switch__chhide"/>
            <label className="mds-switch__slider"></label>
            <p className="mds-switch__SwitchState"></p>
          </div>

          <p className="spdtLabelBottom">off</p>
        </div>
      </div>
    </section>
    
  </>
  );
}

export default MainApp;
