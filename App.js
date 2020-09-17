import React from 'react';
//import ReactDOM from 'react-dom';
import ReactNotifications from 'react-notifications-component';
import Homepage from './Homepage';

function App() {
  return (
    <div style={{textAlign:"center", fontSize:22}}>
      <h2>Notification Site</h2>
      <ReactNotifications />
      <Homepage/>
    </div>
  );
}

export default App;

