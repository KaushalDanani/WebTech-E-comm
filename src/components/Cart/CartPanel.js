import React, { useState } from 'react'
import CartItem from './CartItem'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import productArr from './products.json';

export default function CartPanel() {

    console.log(productArr);
    const cartArray = JSON.parse(localStorage.getItem('cart'));
    const [products, setProducts] = useState(productArr);

    function removeItem(ItemId) {
        console.log("Trying to delete");
        console.log(ItemId);
        for (let i = 0; i < products.length; i++) {
            if (products[i]._id === ItemId) {
                products.splice(i, 1);
                break;
            }
        }
        setProducts([...products]);
        console.log(products);
    }

    function findTotal() {
        let tot = 0;
        for (let i = 0; i < products.length; i++) {
            tot += products[i].price;
        }
        return tot.toFixed(2);
    }

    function findTotalToPay() {
        let tot = 0;
        for (let i = 0; i < products.length; i++) {
            let p = products[i].price;
            let d = products[i].discount * 0.01;
            console.log(p, d);
            p = p - (p * d);
            console.log(p, d);
            tot += p;
        }
        return tot.toFixed(2);
    }
    function findSavings() {
        let savings = 0;
        for (let i = 0; i < products.length; i++) {
            let p = products[i].price;
            let d = products[i].discount * 0.01;
            console.log(p, d);
            p = (p * d);
            console.log(p, d);
            savings += p;
        }
        return savings.toFixed(2);
    }

    return (
        <div className='CartIitmsPanel'>
            {
                products.map((product) => {
                    return (
                        <CartItem
                            name={product.name}
                            brand={product.brand}
                            price={product.price}
                            discount={product.discount}
                            amount={(product.price - (product.price * product.discount * 0.01)).toFixed(2)}
                            averageStar={product.averageStar}
                            images={product.images}
                            description={product.description}
                            remarks={product.remarks}
                            functionality={removeItem}
                            _id={product._id}
                        />
                    );
                })
            }
            <div id='bill'>
                <div>Total : <span id='totalLabel'>{`${findTotal()}/-`}</span></div>
                <div id='discountDetails'>You Saved : <span id="totalLabel">{`${findSavings()}/-`}</span></div>
                <div>Your bill is : <b><span id='totalLabel'>{`${findTotalToPay()}/-`}</span></b></div>
                <div id='buttonPosition'>
                    <button id='proceedButton'>Proceed</button>
                    <Link to={'/'}><button id='cancelButton'>Cancel</button></Link>
                </div>
            </div>
        </div>
    )
}
