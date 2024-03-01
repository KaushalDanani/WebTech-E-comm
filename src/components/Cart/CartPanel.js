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
                colors: ["Blue", "Black", "White"]
            }
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
                colors: ["Blue", "Black", "White", "Yellow"]
            }
        }
    ]

    console.log("RETURNED")
    console.log(DemoCart);
    function cartItemsGenerator(props) {
        return (
            <CartItem
                name={props.name}
                brand={props.brand}
                price={props.price}
                averageStar={props.averageStar}
                images={props.images}
            />
        )
    }
    return (
        <div className='CartIitmsPanel'>
            {DemoCart.map(cartItemsGenerator)}
        </div>
    )
}
