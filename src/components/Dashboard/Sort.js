import React, { useState } from 'react'
import "./Sort.css"

function Sort() {

    const [isVisible, setVisible] = useState(false);

    function toggleSort() {
        setVisible(!isVisible);
    }

    return (
        <>
            <div className='SortDiv'>

                <div className='SortBtnDiv'>
                    <div className='SortBtn' onClick={toggleSort}>
                        <div className='SortText'>
                            <div className='SortName'>Sort by</div>

                        </div>
                        <div className='SortLogoDiv'>
                            <div className='SortLogo'>
                                <img src="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div style={isVisible ? { display: "grid" } : { display: "none" }} className='SortDetails'>

                    <div className='SortCat'>
                        <div className='SortTitle'>Price : </div>
                        <select className='SortContentsDiv'>
                            <option>&lt;--Not Selected--&gt;</option>
                            <option>High to Low</option>
                            <option>Low to High</option>
                        </select>
                    </div>
                    <div className='SortCat'>
                        <div className='SortTitle'>Quality : </div>
                        <select className='SortContentsDiv'>
                            <option>&lt;--Not Selected--&gt;</option>
                            <option>Best to Worst</option>
                            <option>Worst to Best</option>
                        </select>
                    </div>
                    <div className='SortCat'>
                        <div className='SortTitle'>Discount : </div>
                        <select className='SortContentsDiv'>
                            <option>&lt;--Not Selected--&gt;</option>

                            <option>More to Less</option>
                            <option>Less to More</option>
                        </select>
                    </div>
                    <div className='SortCat'>
                        <div className='SortTitle'>Sales : </div>
                        <select className='SortContentsDiv'>
                            <option>&lt;--Not Selected--&gt;</option>

                            <option>More to Less</option>
                            <option>Less to More</option>
                        </select>
                    </div>
                    <div className='SortCat'>
                        <div className='SortTitle'>Size : </div>
                        <select className='SortContentsDiv'>
                            <option>&lt;--Not Selected--&gt;</option>

                            <option>Small to Large</option>
                            <option>Large to Small</option>
                        </select>
                    </div>
                    <button className='SortDone'>
                        Done
                    </button>

                </div>

            </div>
        </>
    )
}

export default Sort