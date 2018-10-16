import React from 'react';

const Filtering = ({ search, searchChange, filterbestSeller, filterdiscountPrice, filteravailable}) => {
// export default class Fitering extends Component {
    // render () {
return (
<section className="col-md-2 ">
    <input id="search" type='search' className="Filtering__search"
        placeholder='Search Coffees' onKeyPress = {searchChange} />
    <a onClick={search} className="button button--search" >
        Submit
    </a>    
    <div className="filtering__checkbox">
        <input name="bestSeller" id="bestSeller" type="checkbox"
        defaultChecked={filterbestSeller} />
        <label htmlFor="bestSeller"> Bestsellers</label>
    </div>  
    <div className="filtering__checkbox">
        <input name="discountPrice" id="discountPrice" type="checkbox" 
        defaultChecked={filterdiscountPrice} />
        <label htmlFor="discountPrice"> On Discount</label>
    </div>
    <div className="filtering__checkbox">
        <input name="available" id="available" type="checkbox" 
        defaultChecked={filteravailable} />
        <label htmlFor="available"> Only available </label>
    </div>
    
{/*        <input name="comingSoon" id="comingSoon" type="checkbox" 
    defaultChecked={filterChange}
    />
    <label htmlFor="comingSoon"> Coming Soon </label> */}
</section>
)
// }
// }
}


export default Filtering;