import React, { useState, useEffect } from 'react';
import './CartItem.css';

export default function CartItem(props) {
    return (
        <div className='CartCard'>
            <div>
            <img src='https://media.istockphoto.com/id/1219165217/vector/baseball-cap-isolated-on-white.jpg?s=612x612&w=0&k=20&c=0nvzCHmg2Hty6ANg-klFEmL4vAK_VhxICEvVdtisLhY=' alt="WHYYYYY" className='itemImg'/>
            </div>
            <div className='CartItemInfo'>
                <div><h3>{props.name}</h3></div>
                <div><h5>{props.brand}</h5></div>
                <div>Price : {props.price}</div>
                <div>Rating : {props.averageStar}/5</div>
            </div>
        </div>
    )
}














// import React from 'react'
// import './CartItem.css'

// export default function CartItem(props) {

//     function createCarousal() {
//         for (let i = 0; i < props.images.length; i++) {
//             const carouselItemDiv = document.createElement('div');
//             const carouselItem = document.createElement('img');
//             carouselItem.src = `data:Image/jpeg;base64,${props.images[i]}`;
//             carouselItem.alt = 'img error!!!';
//             carouselItemDiv.classList.add('carousel-slide');
//             carouselItemDiv.appendChild(carouselItem);
//             document.getElementById('carousel').appendChild(carouselItemDiv);
//         }
//     }

//     let slideIndex = 0;
//     const slides = document.querySelectorAll('.carousel-slide');

//     function moveSlide(direction) {
//         slideIndex += direction;
//         if (slideIndex < 0) {
//             slideIndex = slides.length - 1;
//         } else if (slideIndex >= slides.length) {
//             slideIndex = 0;
//         }
//         const offset = -slideIndex * 100;
//         document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
//     }


//     return (
//         <div className='CartCard'>
//             <div class="carousel-container">
//                 <div id="carousel" onLoad={createCarousal()}></div>
//                 <button class="prev-btn" onclick="moveSlide(-1)">❮</button>
//                 <button class="next-btn" onclick="moveSlide(1)">❯</button>
//             </div>
//             <div className='CartItemInfo'>
//                 <div><h3>{props.name}</h3></div>
//                 <div><h5>{props.brand}</h5></div>
//                 <div>Price : {props.price}</div>
//                 <div>Rating : {props.averageStar}/5</div>
//             </div>
//         </div>
//     )
// }






    // const [slideIndex, setSlideIndex] = useState(0);

    // useEffect(() => {
    //     createCarousel();
    // }, [props.images]);

    // function createCarousel() {
    //     const carouselContainer = document.getElementById(props.name);
    //     carouselContainer.innerHTML = ''; // Clear existing carousel items
    //     props.images.forEach((imageData) => {
    //         console.log("Mapping Element imag : " + imageData);
    //         const carouselItemDiv = document.createElement('div');
    //         const carouselItem = document.createElement('img');
    //         // carouselItem.src = `data:Image/jpeg;base64,${imageData}`;
    //         carouselItem.src = imageData;
    //         carouselItem.alt = 'img error!!!';
    //         carouselItemDiv.classList.add('carousel-slide');
    //         carouselItemDiv.appendChild(carouselItem);
    //         carouselContainer.appendChild(carouselItemDiv);
    //     });
    // }
    {/* <button className="prev-btn" onClick={() => moveSlide(-1)}>❮</button>
                <button className="next-btn" onClick={() => moveSlide(1)}>❯</button> */}
    // function moveSlide(direction) {
    //     const newSlideIndex = (slideIndex + direction + props.images.length) % props.images.length;
    //     setSlideIndex(newSlideIndex);
    //     const offset = -newSlideIndex * 100;
    //     document.querySelector(`#${props.name}`).style.transform = `translateX(${offset}%)`;
    // }
