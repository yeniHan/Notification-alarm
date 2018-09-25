import React from "react";
import "./Notification.css";

const  Notification = (props) => {
    let deleteNotification = props.deleteNotification;    
    let id = props.id;
    
    return (
        <div key={props.key} className="nt-box">
            <i class="close-bt fas fa-window-close" id={id} onClick={(e)=>deleteNotification(e)}></i>
            <div className="nt-info">
                <div>{props.id}</div>
                <div>{props.date}</div>
                <div>{props.title}</div>
                <div>{props.content}</div>
            </div>
        </div>
    )
    

}

export default Notification;