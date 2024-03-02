import React, { useState, useEffect } from 'react';
import './CartItem.css';

export default function CartItem(props) {
    function addRemarks() {
        const InfoDiv = document.querySelector(`#${props._id}`);
        for (const key in props.remarks) {
            if (props.remarks.hasOwnProperty(key)) {
                InfoDiv.appendChild(document.createElement('div').appendChild(document.createTextNode(`${key} : ${props.remarks[key]}`)));
            }
        }
    }


    return (
        <div className='CartCard'>
            <div>
            <img src='https://media.istockphoto.com/id/1219165217/vector/baseball-cap-isolated-on-white.jpg?s=612x612&w=0&k=20&c=0nvzCHmg2Hty6ANg-klFEmL4vAK_VhxICEvVdtisLhY=' alt="WHYYYYY" className='itemImg'/>
            </div>
            <div className='CartItemInfo' id={props._id}>
                <div><h1>{props.name}</h1></div>
                <div><h3>{props.brand}</h3></div>
                <div><h2>Price : {props.price}</h2></div>
                <div>Rating : {props.averageStar}/5</div>
                <div>{props.description}</div>
                <button id='CartRem' onClick={()=>{props.functionality(props._id)}}>Remove</button>
            </div>
        </div>
    )
}