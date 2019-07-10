
import React, {useState, useEffect } from 'react';
import { render } from 'react-dom';
import io from 'socket.io-client';
import axios from 'axios';

/* let fsDataApi = {};
setInterval(getFSData, 500);im
function getFSData() {

} */
// =========================================================================================
function MainApp() {
  let [restAPIUrl, setRestAPIUrl] = useState('');
  let [fsApi, setFsApi] = useState();
  //let listen = io.connect('http://localhost:3001/');
/*   
  function test(fsDataApi) {
    console.log(fsDataApi);
  } */
  
  
  /* 
  
  
  render() {
    return (<div />);
  }
  
}
render(<App />, document.getElementById('root'));
*/
useEffect(() => {
 // setRestAPIUrl('http://localhost:3001/'); 
  
  
  
  axios.get('http://localhost:3001/FSData').
  then(response => {
    console.log(response.data);
    //fsDataApi['fsData'] = response.data;
    //console.log(fsDataApi.fsData.test);
    setFsApi(response.data);
  }).
  catch(error => {
    console.log(error.response);
  });
  
    
    /*     listen.on('connection', function(){
    });   */   
    // });
/*    listen.on('fsAPIData', res => {
  //Listen on respponse from the chatserver
    console.log(res.data);
    //setFsApi(res);
  }); */
  console.log(fsApi);
  
});
  
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
    <div id="sektionLeft2_1">
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