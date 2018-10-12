import React from 'react';

const Filtering = ({ searchChange }) => {
    // render () {
        return (
            <section className="col-md-2 ">
            <input
                className="Filtering__search" type='search'
                placeholder='Search Coffees'
                onChange={searchChange}
            />
            </section>
        )
    // }
}

export default Filtering;