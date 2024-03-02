import React, { useEffect, useState } from "react";
import "./Filter.css";

function Filter(props) {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedQuality, setSelectedQuality] = useState([]);
  const [selectedDiscount, setSelectedDiscount] = useState([]);

  const toggleCategory = (category) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];

    setSelectedCategories(updatedCategories);
    props.filterProducts({
      category: updatedCategories,
      brand: selectedBrands,
      color: selectedColors,
      size: selectedSizes,
      price: selectedPrices,
      quality: selectedQuality,
      discount: selectedDiscount,
    });
  };

  const toggleBrand = (brand) => {
    const updatedBrands = selectedBrands.includes(brand)
      ? selectedBrands.filter((c) => c !== brand)
      : [...selectedBrands, brand];

    setSelectedBrands(updatedBrands);
    props.filterProducts({
      category: selectedCategories,
      brand: updatedBrands,
      color: selectedColors,
      size: selectedSizes,
      price: selectedPrices,
      quality: selectedQuality,
      discount: selectedDiscount,
    });
  };

  const toggleColor = (color) => {
    const updatedColors = selectedColors.includes(color)
      ? selectedColors.filter((c) => c !== color)
      : [...selectedColors, color];

    setSelectedColors(updatedColors);
    props.filterProducts({
      category: selectedCategories,
      brand: selectedBrands,
      color: updatedColors,
      size: selectedSizes,
      price: selectedPrices,
      quality: selectedQuality,
      discount: selectedDiscount,
    });
  };

  const toggleSize = (size) => {
    const updatedSizes = selectedSizes.includes(size)
      ? selectedSizes.filter((c) => c !== size)
      : [...selectedSizes, size];

    setSelectedSizes(updatedSizes);
    props.filterProducts({
      category: selectedCategories,
      brand: selectedBrands,
      color: selectedColors,
      size: updatedSizes,
      price: selectedPrices,
      quality: selectedQuality,
      discount: selectedDiscount,
    });
  };

  const togglePrice = (price) => {
    const updatedPrices = selectedPrices.includes(price)
      ? selectedPrices.filter((c) => c !== price)
      : [...selectedPrices, price];

    setSelectedPrices(updatedPrices);
    props.filterProducts({
      category: selectedCategories,
      brand: selectedBrands,
      color: selectedColors,
      size: selectedSizes,
      price: updatedPrices,
      quality: selectedQuality,
      discount: selectedDiscount,
    });
  };

  const toggleQuality = (quality) => {
    const updatedQuality = selectedQuality.includes(quality)
      ? selectedQuality.filter((c) => c !== quality)
      : [...selectedQuality, quality];

    setSelectedQuality(updatedQuality);
    props.filterProducts({
      category: selectedCategories,
      brand: selectedBrands,
      color: selectedColors,
      size: selectedSizes,
      price: selectedPrices,
      quality: updatedQuality,
      discount: selectedDiscount,
    });
  };

  const toggleDiscount = (discount) => {
    const updatedDiscount = selectedDiscount.includes(discount)
      ? selectedDiscount.filter((c) => c !== discount)
      : [...selectedDiscount, discount];

    setSelectedDiscount(updatedDiscount);
    props.filterProducts({
      category: selectedCategories,
      brand: selectedBrands,
      color: selectedColors,
      size: selectedSizes,
      price: selectedPrices,
      quality: selectedQuality,
      discount: updatedDiscount,
    });
  };

  return (
    <div className="Filter">
      <div className="FilterTitle">Filter Your needs!</div>
      <div className="FilterCat">
        <div className="FilterCatTitle">Price</div>
        <div className="FilterOptionsDiv">
          <div className="FilterOption">
            <input
              id="0-1k"
              type="checkbox"
              className="FilterContent"
              checked={selectedPrices.includes("Below 100")}
              onChange={() => togglePrice("Below 100")}
            />
            <label for="0-1k">Below 100</label>
          </div>
          <div className="FilterOption">
            <input
              id="1-5k"
              type="checkbox"
              className="FilterContent"
              checked={selectedPrices.includes("100 300")}
              onChange={() => togglePrice("100 300")}
            />
            <label for="1-5k">100 - 300</label>
          </div>
          <div className="FilterOption">
            <input
              id="5-10k"
              type="checkbox"
              className="FilterContent"
              checked={selectedPrices.includes("300 600")}
              onChange={() => togglePrice("300 600")}
            />
            <label for="5-10k">300 - 600</label>
          </div>
          <div className="FilterOption">
            <input
              id="10-100k"
              type="checkbox"
              className="FilterContent"
              checked={selectedPrices.includes("Above 600")}
              onChange={() => togglePrice("Above 600")}
            />
            <label for="10-100k">Above 600</label>
          </div>
        </div>
      </div>
      <div className="FilterCat">
        <div className="FilterCatTitle">Quality</div>
        <div className="FilterOptionsDiv">
          <div className="FilterOption">
            <input
              id="1s"
              type="checkbox"
              className="FilterContent"
              checked={selectedQuality.includes(1)}
              onChange={() => toggleQuality(1)}
            />
            <label for="1s">⭐</label>
          </div>
          <div className="FilterOption">
            <input
              id="2s"
              type="checkbox"
              className="FilterContent"
              checked={selectedQuality.includes(2)}
              onChange={() => toggleQuality(2)}
            />
            <label for="2s">⭐⭐</label>
          </div>
          <div className="FilterOption">
            <input
              id="3s"
              type="checkbox"
              className="FilterContent"
              checked={selectedQuality.includes(3)}
              onChange={() => toggleQuality(3)}
            />
            <label for="3s">⭐⭐⭐</label>
          </div>
          <div className="FilterOption">
            <input
              id="4s"
              type="checkbox"
              className="FilterContent"
              checked={selectedQuality.includes(4)}
              onChange={() => toggleQuality(4)}
            />
            <label for="4s">⭐⭐⭐⭐</label>
          </div>
          <div className="FilterOption">
            <input
              id="5s"
              type="checkbox"
              className="FilterContent"
              checked={selectedQuality.includes(5)}
              onChange={() => toggleQuality(5)}
            />
            <label for="5s">⭐⭐⭐⭐⭐</label>
          </div>
        </div>
      </div>
      <div className="FilterCat">
        <div className="FilterCatTitle">Discount</div>
        <div className="FilterOptionsDiv">
          <div className="FilterOption">
            <input
              id="below 20%"
              type="checkbox"
              className="FilterContent"
              checked={selectedDiscount.includes("Below 20%")}
              onChange={() => toggleDiscount("Below 20%")}
            />
            <label for="below 20%">below 20%</label>
          </div>
          <div className="FilterOption">
            <input
              id="2p"
              type="checkbox"
              className="FilterContent"
              checked={selectedDiscount.includes("20%-50%")}
              onChange={() => toggleDiscount("20%-50%")}
            />
            <label for="2p">20%-50%</label>
          </div>
          <div className="FilterOption">
            <input
              id="3p"
              type="checkbox"
              className="FilterContent"
              checked={selectedDiscount.includes("50%-75%")}
              onChange={() => toggleDiscount("50%-75%")}
            />
            <label for="3p">50%-75%</label>
          </div>
          <div className="FilterOption">
            <input
              id="4p"
              type="checkbox"
              className="FilterContent"
              checked={selectedDiscount.includes("Above 75%")}
              onChange={() => toggleDiscount("Above 75%")}
            />
            <label for="4p">Above 75%</label>
          </div>
        </div>
      </div>
      <div className="FilterCat">
        <div className="FilterCatTitle">Brands</div>
        <div className="FilterOptionsDiv">
          {props.brands.map((brand, index) => (
            <div key={index}>
              <div className="FilterOption">
                <input
                  id={brand}
                  type="checkbox"
                  className="FilterContent"
                  checked={selectedBrands.includes(brand)}
                  onChange={() => toggleBrand(brand)}
                />
                <label for={brand}>{brand}</label>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="FilterCat">
        <div className="FilterCatTitle">Categories</div>
        <div className="FilterOptionsDiv">
          {props.categories.map((category, index) => (
            <div key={index}>
              <div className="FilterOption">
                <input
                  id={category}
                  type="checkbox"
                  className="FilterContent"
                  checked={selectedCategories.includes(category)}
                  onChange={() => toggleCategory(category)}
                />
                <label for={category}>{category}</label>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="FilterCat">
        <div className="FilterCatTitle">Colors</div>
        <div className="FilterOptionsDiv">
          {props.colors.map((color, index) => (
            <div key={index}>
              <div className="FilterOption">
                <input
                  id={color}
                  type="checkbox"
                  className="FilterContent"
                  checked={selectedColors.includes(color)}
                  onChange={() => toggleColor(color)}
                />
                <label for={color}>{color}</label>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="FilterCat">
        <div className="FilterCatTitle">Sizes</div>
        <div className="FilterOptionsDiv">
          {props.sizes.map((sizes, index) => (
            <div key={index}>
              <div className="FilterOption">
                <input
                  id={sizes}
                  type="checkbox"
                  className="FilterContent"
                  checked={selectedSizes.includes(sizes)}
                  onChange={() => toggleSize(sizes)}
                />
                <label for={sizes}>{sizes}</label>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Filter;
