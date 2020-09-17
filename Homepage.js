import React from 'react';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';

class myContent extends React.Component {
    render() {
        return (
            <div>
                <h4>Hi, Check out this amazing website!</h4>
                <a href="https://elgoog.im/">Click Me</a>
            </div>
        );
    }
}

function Homepage() {
    return (
      <div>
        <h3>You may have some notifications. Click these buttons:</h3>
        <button style={{fontSize:22}} onClick={handleInfo}>Information</button>
        <button style={{fontSize:22}} onClick={handleWarning}>Warnings</button>
      </div>
    )
  }

function handleInfo() {
    store.addNotification({
        title: 'New Notification!!',
        content: myContent,                   // can be an object or component
        type: 'info',                         // 'default', 'success', 'info', 'warning'
        container: 'top-right',                // where to position the notifications
        insert: 'bottom',
        dismiss: {
          duration: 60000,
          pauseOnHover: true,
          showIcon: true
        }
    });
}

function handleWarning() {
    store.addNotification({
        title: 'New Notification!!',
        message: 'Your subcription is ending soon. Renew',
        type: 'warning',                         // 'default', 'success', 'info', 'warning'
        container: 'top-right',                     // where to position the notifications
        insert: 'bottom',
        //animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
        //animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
        dismiss: {
          duration: 60000,
          pauseOnHover: true,
          showIcon: true
        }
    });
}

export default Homepage;