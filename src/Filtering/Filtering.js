import React from 'react';

const Filtering = ({ 
    search
    // searchChange
}) => {
    return (
        <section className="col-md-2 ">
        <input id="search" type='search'
            className="Filtering__search"
            placeholder='Search Coffees'
            // onChange={searchChange}
        />
        <a 
        onClick={search} 
        className="button button--search">
            Submit
        </a>
        </section>
    )
}

export default Filtering;