import React, { useEffect, useState } from 'react'
import "./Filter.css"

function Filter(props) {

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedQuality, setSelectedQuality] = useState([]);
  const [selectedDiscount, setSelectedDiscount] = useState([]);

  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
      props.filterCategory(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
      props.filterCategory([...selectedCategories, category]);
    }
  };
  const toggleBrand = (category) => {
    if (selectedBrands.includes(category)) {
      setSelectedBrands(selectedBrands.filter(c => c !== category));
      props.filterBrand(selectedBrands.filter(c => c !== category));
    } else {
      setSelectedBrands([...selectedBrands, category]);
      props.filterBrand([...selectedBrands, category]);
    }
  };
  const toggleColor = (category) => {
    if (selectedColors.includes(category)) {
      setSelectedColors(selectedColors.filter(c => c !== category));
      props.filterColor(selectedColors.filter(c => c !== category));
    } else {
      setSelectedColors([...selectedColors, category]);
      props.filterColor([...selectedColors, category]);
    }
  };
  const toggleSize = (category) => {
    if (selectedSizes.includes(category)) {
      setSelectedSizes(selectedSizes.filter(c => c !== category));
      props.filterSize(selectedSizes.filter(c => c !== category));
    } else {
      setSelectedSizes([...selectedSizes, category]);
      props.filterSize([...selectedSizes, category]);
    }
  };
  const togglePrice = (category) => {
    if (selectedPrices.includes(category)) {
      setSelectedPrices(selectedPrices.filter(c => c !== category));
      props.filterPrice(selectedPrices.filter(c => c !== category));
    } else {
      setSelectedPrices([...selectedPrices, category]);
      props.filterPrice([...selectedPrices, category]);
    }
  };
  const toggleQuality = (category) => {
    if (selectedQuality.includes(category)) {
      setSelectedQuality(selectedQuality.filter(c => c !== category));
      props.filterQuality(selectedQuality.filter(c => c !== category));
    } else {
      setSelectedQuality([...selectedQuality, category]);
      props.filterQuality([...selectedQuality, category]);
    }
  };
  const toggleDiscount = (category) => {
    if (selectedDiscount.includes(category)) {
      setSelectedDiscount(selectedDiscount.filter(c => c !== category));
      props.filterDiscount(selectedDiscount.filter(c => c !== category));

    } else {
      setSelectedDiscount([...selectedDiscount, category]);
      props.filterDiscount([...selectedDiscount, category]);
    }


  };

  return (
    <div className='Filter'>
      <div className='FilterTitle'>
        Filter Your needs!
      </div>
      <div className='FilterCat'>
        <div className='FilterCatTitle'>Price</div>
        <div className='FilterOptionsDiv'>
          <div className='FilterOption'>
            <input id="0-1k" type='checkbox' className='FilterContent' 
            checked={selectedPrices.includes("Below 1000")}
                 onChange={() => togglePrice("Below 1000")}/>
            <label for="0-1k">Below 1,000</label>
          </div>
          <div className='FilterOption'>
            <input id="1-5k" type='checkbox' className='FilterContent' 
            checked={selectedPrices.includes("1000 5000")}
                 onChange={() => togglePrice("1000 5000")}/>
            <label for="1-5k">1,000 - 5,000</label>
          </div>
          <div className='FilterOption'>
            <input id="5-10k" type='checkbox' className='FilterContent' 
            checked={selectedPrices.includes("5000 10000")}
                 onChange={() => togglePrice("5000 10000")}/>
            <label for="5-10k">5,000 - 10,000</label>
          </div>
          <div className='FilterOption'>
            <input id="10-100k" type='checkbox' className='FilterContent' 
            checked={selectedPrices.includes("Above 10000")}
                 onChange={() => togglePrice("Above 10000")}/>
            <label for="10-100k">Above 10,000</label>
          </div>
        </div>
      </div>
      <div className='FilterCat'>
        <div className='FilterCatTitle'>Quality</div>
        <div className='FilterOptionsDiv'>
          <div className='FilterOption'>
            <input id="1s" type='checkbox' className='FilterContent' 
            checked={selectedQuality.includes(1)}
                 onChange={() => toggleQuality(1)}/>
            <label for="1s">⭐</label>
          </div>
          <div className='FilterOption'>
            <input id="2s" type='checkbox' className='FilterContent' 
            checked={selectedQuality.includes(2)}
                 onChange={() => toggleQuality(2)}/>
            <label for="2s">⭐⭐</label>
          </div>
          <div className='FilterOption'>
            <input id="3s" type='checkbox' className='FilterContent' 
            checked={selectedQuality.includes(3)}
                 onChange={() => toggleQuality(3)}/>
            <label for="3s">⭐⭐⭐</label>
          </div>
          <div className='FilterOption'>
            <input id="4s" type='checkbox' className='FilterContent' 
            checked={selectedQuality.includes(4)}
                 onChange={() => toggleQuality(4)}/>
            <label for="4s">⭐⭐⭐⭐</label>
          </div>
          <div className='FilterOption'>
            <input id="5s" type='checkbox' className='FilterContent' 
            checked={selectedQuality.includes(5)}
                 onChange={() => toggleQuality(5)}/>
            <label for="5s">⭐⭐⭐⭐⭐</label>
          </div>
        </div>
      </div>
      <div className='FilterCat'>
        <div className='FilterCatTitle'>Discount</div>
        <div className='FilterOptionsDiv'>
          <div className='FilterOption'>
            <input id="below 20%" type='checkbox' className='FilterContent' 
            checked={selectedDiscount.includes("below 20%")}
                 onChange={() => toggleDiscount("below 20%")}/>
            <label for="below 20%">below 20%</label>
          </div>
          <div className='FilterOption'>
            <input id="2p" type='checkbox' className='FilterContent' 
            checked={selectedDiscount.includes("20%-50%")}
                 onChange={() => toggleDiscount("20%-50%")}/>
            <label for="2p">20%-50%</label>
          </div>
          <div className='FilterOption'>
            <input id="3p" type='checkbox' className='FilterContent' 
            checked={selectedDiscount.includes("50%-75%")}
                 onChange={() => toggleDiscount("50%-75%")}/>
            <label for="3p">50%-75%</label>
          </div>
          <div className='FilterOption'>
            <input id="4p" type='checkbox' className='FilterContent' 
            checked={selectedDiscount.includes("Above 75%")}
                 onChange={() => toggleDiscount("Above 75%")}/>
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
                <input id={brand} type='checkbox' className='FilterContent' 
                checked={selectedBrands.includes(brand)}
                onChange={() => toggleBrand(brand)}/>
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
                <input id={category} type='checkbox' className='FilterContent' 
                 checked={selectedCategories.includes(category)}
                 onChange={() => toggleCategory(category)}/>
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
                <input id={color} type='checkbox' className='FilterContent' 
                checked={selectedColors.includes(color)}
                onChange={() => toggleColor(color)}/>
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
                <input id={sizes} type='checkbox' className='FilterContent' 
                checked={selectedSizes.includes(sizes)}
                onChange={() => toggleSize(sizes)}/>
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