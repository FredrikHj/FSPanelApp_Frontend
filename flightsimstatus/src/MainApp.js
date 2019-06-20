
import React, {useState, useEffect } from 'react';
import io from 'socket.io-client';
//import axios from 'axios';


// =========================================================================================
function MainApp() {
  let [url, setUrl] = useState('');
  useEffect(() => {
    setUrl('http://localhost:3001/');
    let listen = io.connect(url);
    console.log(url);
    // Listen on respponse from the chatserver
    /* listen.on('connection', function(){
    }); */
        listen.on('fsAPIData', res => {
          console.log(res);
        });    
  });
     

    
/*     axios.get(url, 'fsData/', {
      headers: 'application/json, text/plain',
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error.response);
    }); */
  return (
    <>
    <div id="sektionLeft2_2">
      2:2
    </div>
    <div onInvalidCapture="sektionLeft2_1">
      2:1
    </div>
    <div id="sektionLeft1">
      1
    </div>
  </>
  );
}

export default MainApp;
