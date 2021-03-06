import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Notification } from './Notification'


export const NotificationModal = () => {
    let history = useHistory()
    let { post } = useParams()
    if(!post) return null
    let back = (e:any) => {
        e.stopPropagation();
        history.goBack();
    };


    return(
        <div onClick={back}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                background: "rgba(0, 0, 0, 0.3)"
            }}
        >
            <div className="modal"
                style={{
                    position: "fixed",
                    top: 80,
                    left: 0,
                    right: 0,
                    minWidth: 240,
                    maxWidth: 480,
                    maxHeight: 270,
                    overflow: "auto",
                    width: "50%",
                    margin: "auto",
                    padding: 15,
                    background: "rgba(255, 255, 255, 1)"
                }}
                onClick={(e)=>e.stopPropagation()}
            >
                <Notification post={post}/>
            </div>
        </div>
    )
}