const filteredProducts = this.state.products.filter(item => {
    if(this.state.isfilterAll) {
      const searchedItem = item.boxTitle.toLowerCase().includes(this.state.searchfield.toLowerCase());
      if((searchedItem )
        ){
        return item;
      }
    }
    if(!this.state.isfilterdiscountPrice && !this.state.isfilterbestSeller && !this.state.isfilteravailable) {
    const searchedItem = item.boxTitle.toLowerCase().includes(this.state.searchfield.toLowerCase());
    if((searchedItem )
      ){
      return item;
    }
  }
    if(this.state.isfilterdiscountPrice) {
      const searchedItem = item.boxTitle.toLowerCase().includes(this.state.searchfield.toLowerCase());
      if((searchedItem && this.state.isfilterdiscountPrice && item.discountPrice.length)
      || (searchedItem && !this.state.isfilterdiscountPrice)
        ){
        return item;
      }
  }
    if(this.state.isfilterbestSeller) {
    const searchedItem = item.boxTitle.toLowerCase().includes(this.state.searchfield.toLowerCase());
    if((searchedItem && this.state.isfilterbestSeller && item.bestSeller)
    || (searchedItem && !this.state.isfilterbestSeller)
    ){
      return item;
    } 
  }
    if(this.state.isfilteravailable) {
    const searchedItem = item.boxTitle.toLowerCase().includes(this.state.searchfield.toLowerCase());
    if((searchedItem && this.state.isfilteravailable && item.available)
    || (searchedItem && !this.state.isfilteravailable)
    ){
      return item;
    } 
  }
});

export default filteredProducts;