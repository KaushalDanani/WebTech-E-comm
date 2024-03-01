import React from 'react'
import CartItem from './CartItem'

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

    function findTotal(){
        let tot = 0;
        for(let x in DemoCart){
            tot += x.price
            console.log(x.price)
        }
        return tot;
    }

    const totalBill = findTotal();
    console.log("RETURNED")
    console.log(totalBill);
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
                _id={props._id}
            />
        )
    }
    return (
        <div className='CartIitmsPanel'>
            {DemoCart.map(cartItemsGenerator)}
            <div id='bill'>Your Total bill is : <span id='totalLabel'>{totalBill}</span></div>
        </div>
    )
}
