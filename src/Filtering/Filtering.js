import React from 'react';

const Filtering = ({ search, searchChange, handleFilter }) => {
return (
    <section className="col-md-2 ">
        <input id="search" type='search' className="Filtering__search"
            placeholder='Search Coffees' onKeyPress = {searchChange}
        />
        <a onClick={search} className="button button--search">
            Submit
        </a>

        <input name="bestsellers" id="bestsellers" type="checkbox" 
            onChange={handleFilter}
        />
        <label className="filtering__checkbox" htmlFor="bestsellers"> Bestsellers</label>
        
        <input name="onDiscount" id="onDiscount" type="checkbox" />
        <label className="filtering__checkbox" htmlFor="onDiscount"> On Discount</label>

        <input name="onlyAvailable" id="onlyAvailable" type="checkbox" />
        <label className="filtering__checkbox" htmlFor="onlyAvailable"> Only available </label>
        
        <input name="comingSoon" id="comingSoon" type="checkbox" />
        <label className="filtering__checkbox" htmlFor="comingSoon"> Coming Soon </label>
    </section>
)
}

export default Filtering;