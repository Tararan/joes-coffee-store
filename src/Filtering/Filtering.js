import React from 'react';

const Filtering = ({ search, searchChange, filterChange}) => {
// export default class Fitering extends Component {
    // render () {
    return (
    <section className="col-md-2 ">
        <input id="search" type='search' className="Filtering__search"
            placeholder='Search Coffees' onKeyPress = {searchChange}
        />
        <a onClick={search} className="button button--search">
            Submit
        </a>

        <input name="bestsellers" id="bestsellers" type="checkbox"
        onChange={filterChange}
        />
        <label className="filtering__checkbox" htmlFor="bestsellers"> Bestsellers</label>
        
        <input name="onDiscount" id="onDiscount" type="checkbox" 
        onChange={filterChange}
         />
        <label className="filtering__checkbox" htmlFor="onDiscount"> On Discount</label>

        <input name="onlyAvailable" id="onlyAvailable" type="checkbox" 
        onChange={filterChange}
        />
        <label className="filtering__checkbox" htmlFor="onlyAvailable"> Only available </label>
        
        <input name="comingSoon" id="comingSoon" type="checkbox" 
        onChange={filterChange}
        />
        <label className="filtering__checkbox" htmlFor="comingSoon"> Coming Soon </label>
    </section>
)
// }
// }
}


export default Filtering;