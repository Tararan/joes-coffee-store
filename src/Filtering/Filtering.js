import React, { Component } from "react";

class Filtering extends Component {
  constructor() {
    super();
    this.state = {
      isActive: true
    };
  }

  render() {
    const {
      search,
      searchChange,
      filterAll,
      filterbestSeller,
      filterdiscountPrice,
      filteravailable
    } = this.props;
    return (
      <section className="col-md-2 ">
        <div className="Filtering">
          <input
            id="search"
            type="search"
            className="Filtering__search"
            placeholder="Search Coffees"
            onKeyPress={searchChange}
          />
          <a onClick={search} className="button button--search">
            Search
          </a>
          <div className="filtering__checkbox">
            <input
              name="bestSeller"
              id="bestSeller"
              type="checkbox"
              onChange={filterbestSeller}
            />
            <label htmlFor="bestSeller"> Bestsellers</label>
          </div>
          <div className="filtering__checkbox">
            <input
              name="discountPrice"
              id="discountPrice"
              type="checkbox"
              onChange={filterdiscountPrice}
            />
            <label htmlFor="discountPrice"> On Discount</label>
          </div>
          <div className="filtering__checkbox">
            <input
              name="available"
              id="available"
              type="checkbox"
              onChange={filteravailable}
            />
            <label htmlFor="available"> Only available </label>
          </div>
        </div>
      </section>
    );
  }
}

export default Filtering;
