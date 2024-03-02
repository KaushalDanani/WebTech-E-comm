import React, { useState, useEffect } from 'react';
import './CartItem.css';
import { Link } from 'react-router-dom';

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
        <div  className='CartCard'>
            <input type='button' id='CartRem' onClick={() => { props.functionality(props._id) }}></input>
            <div>
                <img src={props.images[0].img} alt="WHYYYYY" className='itemImg' />
            </div>
            <Link to={`/product/${props._id.$oid}`} className='CartItemInfo' id={props._id}>
                <div><h1>{props.name}</h1></div>
                <div><h3>{props.brand}</h3></div>
                <div className='pricing'><b>Amount : {props.amount}/-</b> <span id='prc'>{props.price}</span> ({props.discount}% off)</div>
                <div>Rating : {props.averageStar}/5</div>
                <div>{props.description}</div>
            </Link>
        </div>
    )
}