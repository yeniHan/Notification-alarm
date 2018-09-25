
import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import "./NotificationList.css";

class NotificationList extends Component {
  constructor() {
    super();
    this.state = {
      endpoint: "http://localhost:3000",
      notifications: {
        1: null,
        2: null,
        3: null
      },
      current: 1,
    };

    const socket = socketIOClient(this.state.endpoint);
    socket.on('notification', (notification) => {
      let newNotification = JSON.parse(notification);
      let notifications = this.state.notifications;

      // ***Using an array to update notifications(using concat() and splice()) doesn't  work.**
       
      // notifications = notifications.concat(newNotification);
      // if(notifications.length === 4) {
      //   notifications.splice(0,1);
      //   console.log("Splice:", notifications);      
      // }
      // this.setState({
      //   ...this.state,
      //   notifications: notifications
      // });
      
      
      let current = this.state.current;
      if(current < 3){
        let strKey = current.toString();
        notifications[strKey] = newNotification;
        this.setState({
          ...this.state,
          notifications:notifications,
          current: current + 1
        })
      }else{
        for(let i = 1; i < 4; i ++){
          
          let key = i.toString();
          if(key !== "3"){
            let nextKey = (i + 1 ).toString();
            let nextValue = notifications[nextKey];
            notifications[key] = nextValue;
          }else{
            notifications[key] = newNotification;
          }
        } 
        this.setState({
          ...this.state,
          notifications:  notifications,
          current: 1
        })
      } 



    });

  }

  deleteNotification = (id) => {
    let notifications = this.state.notifications;
    console.log("delete");
    for(let key in notifications){
      let thiskey = key;
      let thisobj = Object.assign({}, notifications[key]);
      let thisid = thisobj.id;
      if(thisid === id ){
        key = thiskey;
        notifications[key] = null;
        
      }      
    }
    
    this.setState({
      ...this.state,
      notifications: notifications
    });
  
  }

    remove = () =>{
      this.setState({
        endpoint: "http://localhost:3000",
        notifications: {
          1: null,
          2: null,
          3: null
        },
        current: 1,
      })
      
    }

  componentDidMount() {
    // setInterval(this.remove, 10000);
  }

  render() {
    let nts_obj= this.state.notifications;
    let notifications= [];

    for( let key in nts_obj){
      let nt = nts_obj[key];
      if( nt !== null){
        notifications.push(nt);
      }
    }

    notifications.sort((a, b)=>{
      return b.timestamp - a.timestamp
    });

   
    const notificationList = notifications.map((nt, i) =>
      <div className="nt-box" key={nt.id} >
        <i className="close-bt fas fa-window-close" onClick={() => {this.deleteNotification(nt.id)}}></i>
        <div className="nt-info">
          <div>{nt.id}</div>        
          <div>{nt.date}</div>
          <div>{nt.title}</div>
          <div>{nt.content}</div>       
        </div> 
      </div>
    );

    return (
      <div id="nts-container">
        <h1 id="main-title">Notification Alarm</h1>
          <div id="nt-list">
            {notificationList}
          </div>
      </div>
    )
  }
}


export default NotificationList;
