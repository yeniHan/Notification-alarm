import React, { Component } from "react";

class  Notification extends Component{
    // let id, date, title, content, deleteNotification = {props};
    // return (
    //     <div class="notification">
    //         <i class="fas fa-window-close" id={id} onClick={(e)=>deleteNotification(e)}></i>
    //         <div class="nt-date">{date}</div>
    //         <div class="nt-title">{title}</div>
    //         <div class="nt-content">{content}</div>
    //     </div>
    // 
    // state = {
    //     id: this.props.id,
    //     content: props.content,
    //     title: props.title,
    //     date: this.props.date
    // }

    // let data = {props}
    render() {
        let data = this.props.data;
        return(
        <div>
            <p>{data.content}</p>
            <p>This is Notification Component!!</p>
        </div> 
        )
    }
    

}

export default Notification;