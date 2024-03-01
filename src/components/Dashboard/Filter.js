import React, { useEffect, useState } from 'react'
import "./Filter.css"

function Filter(props) {

  const [productData, setProductData] = useState([]);

  return (
    <div className='Filter'>
      <div className='FilterTitle'>
        Filter Your needs!
      </div>
      <div className='FilterCat'>
        <div className='FilterCatTitle'>Price</div>
        <div className='FilterOptionsDiv'>
          <div className='FilterOption'>
            <input id="0-1k" type='checkbox' className='FilterContent' />
            <label for="0-1k">Below 1,000</label>
          </div>
          <div className='FilterOption'>
            <input id="1-5k" type='checkbox' className='FilterContent' />
            <label for="1-5k">1,000 - 5,000</label>
          </div>
          <div className='FilterOption'>
            <input id="5-10k" type='checkbox' className='FilterContent' />
            <label for="5-10k">5,000 - 10,000</label>
          </div>
          <div className='FilterOption'>
            <input id="10-100k" type='checkbox' className='FilterContent' />
            <label for="10-100k">Above 10,000</label>
          </div>
        </div>
      </div>
      <div className='FilterCat'>
        <div className='FilterCatTitle'>Quality</div>
        <div className='FilterOptionsDiv'>
          <div className='FilterOption'>
            <input id="1s" type='checkbox' className='FilterContent' />
            <label for="1s">⭐</label>
          </div>
          <div className='FilterOption'>
            <input id="2s" type='checkbox' className='FilterContent' />
            <label for="2s">⭐⭐</label>
          </div>
          <div className='FilterOption'>
            <input id="3s" type='checkbox' className='FilterContent' />
            <label for="3s">⭐⭐⭐</label>
          </div>
          <div className='FilterOption'>
            <input id="4s" type='checkbox' className='FilterContent' />
            <label for="4s">⭐⭐⭐⭐</label>
          </div>
          <div className='FilterOption'>
            <input id="5s" type='checkbox' className='FilterContent' />
            <label for="5s">⭐⭐⭐⭐⭐</label>
          </div>
        </div>
      </div>
      <div className='FilterCat'>
        <div className='FilterCatTitle'>Discount</div>
        <div className='FilterOptionsDiv'>
          <div className='FilterOption'>
            <input id="1p" type='checkbox' className='FilterContent' />
            <label for="1p">below 20%</label>
          </div>
          <div className='FilterOption'>
            <input id="2p" type='checkbox' className='FilterContent' />
            <label for="2p">20%-50%</label>
          </div>
          <div className='FilterOption'>
            <input id="3p" type='checkbox' className='FilterContent' />
            <label for="3p">50-75%</label>
          </div>
          <div className='FilterOption'>
            <input id="4p" type='checkbox' className='FilterContent' />
            <label for="4p">Above 75%</label>
          </div>
        </div>
      </div>
      <div className='FilterCat'>
        <div className='FilterCatTitle'>Brands</div>
        <div className='FilterOptionsDiv'>

          {props.brands.map((brand, index) => (
            <div key={index}>

              <div className='FilterOption'>
                <input id={brand} type='checkbox' className='FilterContent' />
                <label for={brand}>{brand}</label>
              </div>

            </div>
          ))}
        </div>
      </div>
      <div className='FilterCat'>
        <div className='FilterCatTitle'>Categories</div>
        <div className='FilterOptionsDiv'>

          {props.categories.map((category, index) => (
            <div key={index}>

              <div className='FilterOption'>
                <input id={category} type='checkbox' className='FilterContent' />
                <label for={category}>{category}</label>
              </div>

            </div>
          ))}
        </div>
      </div>
      <div className='FilterCat'>
        <div className='FilterCatTitle'>Colors</div>
        <div className='FilterOptionsDiv'>

          {props.colors.map((color, index) => (
            <div key={index}>

              <div className='FilterOption'>
                <input id={color} type='checkbox' className='FilterContent' />
                <label for={color}>{color}</label>
              </div>

            </div>
          ))}
        </div>
      </div>
      <div className='FilterCat'>
        <div className='FilterCatTitle'>Sizes</div>
        <div className='FilterOptionsDiv'>

          {props.sizes.map((sizes, index) => (
            <div key={index}>

              <div className='FilterOption'>
                <input id={sizes} type='checkbox' className='FilterContent' />
                <label for={sizes}>{sizes}</label>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Filter