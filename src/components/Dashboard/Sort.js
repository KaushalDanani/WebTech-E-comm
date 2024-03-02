import React, { useState } from 'react'
import "./Sort.css"

function Sort(props) {

    const [sortBy,setSortBy] = useState("");
    const [sortOrder,setSortOrder] = useState("");

    function sortHandler(by,order) {
        setSortBy(by);
        setSortOrder(order);

        props.sortProducts(by,order);
    }

    return (
        <>
            <div className='SortDiv'>

                <div className='SortCat'>
                    <select id="by" className='SortTitleDiv'
                    onChange={(event) => sortHandler(event.target.value,sortOrder)}>
                        <option value={""}>&lt;--Sort By--&gt;</option>
                        <option>Price</option>
                        <option>Quality</option>
                        <option>Discount</option>
                        <option>Sales</option>
                        {/* <option>Size</option> */}
                    </select>
                    <select className='SortContentsDiv'
                    onChange={(event) => sortHandler(sortBy,event.target.value)}>
                        <option value={""}>&lt;--Sort order--&gt;</option>
                        <option>Ascending</option>
                        <option>Descending</option>
                    </select>
                </div>


            </div>
        </>
    )
}

export default Sort