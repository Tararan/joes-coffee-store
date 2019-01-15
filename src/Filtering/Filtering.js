import React, { Component } from "react";

class Filtering extends Component {

  render() {
    const {
      search,
      searchChange,
      filterbestSeller,
      filterdiscountPrice,
      filteravailable
    } = this.props;
    return (
      <aside className="col-md-2 ">
        <div className="Filtering">
        <div className="Filtering__search-wrapper">
          <input
            id="search"
            type="search"
            className="Filtering__search"
            placeholder="Search Coffees"
            onKeyPress={searchChange}
          />
          </div>
          <button onClick={search} className="button button--search">
            Search
          </button>
          <div className="Filtering__checkbox">
            <input
              name="bestSeller"
              id="bestSeller"
              type="checkbox"
              onChange={filterbestSeller}
            />
            <label htmlFor="bestSeller"> Bestsellers</label>
          </div>
          <div className="Filtering__checkbox">
            <input
              name="discountPrice"
              id="discountPrice"
              type="checkbox"
              onChange={filterdiscountPrice}
            />
            <label htmlFor="discountPrice"> On Discount</label>
          </div>
          <div className="Filtering__checkbox Filtering__checkbox--availability">
            <input
              name="available"
              id="available"
              type="checkbox"
              onChange={filteravailable}
            />
            <label htmlFor="available"> Only available </label>
          </div>
        </div>
      </aside>
    );
  }
}

export default Filtering;
