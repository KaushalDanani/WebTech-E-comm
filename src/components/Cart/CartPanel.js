import React from 'react'
import CartItem from './CartItem'
import { useEffect } from 'react';

export default function CartPanel() {

        const DemoCart = [
        {
            name: "Sports Cap",
            brand: "Nike",
            images: ["", ""],
            description: "Sports cap for professional use.",
            category: ["Caps", "Wearables", "Sports"],
            price: 319,
            averageStar: 4.5,
            remarks: {
                color: "White"
            },
            _id: 'thisisprodid'
        },
        {
            name: "Summer Cap",
            brand: "Nike India",
            images: ["", ""],
            description: "Summer cap for Personal use.",
            category: ["Caps", "Wearables", "Sports"],
            price: 289,
            averageStar: 5.0,
            remarks: {
                color: "Yellow"
            },
            _id: 'yetanotherid'
        }
    ]

    function removeItem(ItemId){
        console.log("Trying to delete");
        console.log(ItemId);
        for(let i = 0; i < DemoCart.length; i++){
            if(DemoCart[i]._id === ItemId){
                DemoCart.splice(i,1);
                break;
            }
        }
        console.log(DemoCart);
    }

    function findTotal(){
        let tot = 0;
        for(let i = 0; i < DemoCart.length; i++){
            tot += DemoCart[i].price;
        }
        return tot;
    }

    function cartItemsGenerator(props) {
        return (
            <CartItem
                name={props.name}
                brand={props.brand}
                price={props.price}
                averageStar={props.averageStar}
                images={props.images}
                description={props.description}
                remarks={props.remarks}
                functionality={removeItem}
                _id={props._id}
            />
        )
    }
    return (
        <div className='CartIitmsPanel'>
            {/* {useEffect(()=>{
            },[DemoCart])} */}
            {DemoCart.map(cartItemsGenerator)}
            <div id='bill'>Your Total bill is : <span id='totalLabel'>{`${findTotal()}/-`}</span></div>
        </div>
    )
}
