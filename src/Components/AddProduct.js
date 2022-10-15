import React from "react";
class AddProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      productPrice: 0
    };
  }
  render() {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          this.props.addItem(
            this.state.productName,
            Number(this.state.productPrice)
          );
        }}
      >
        <div className="row mb-5 fs-5 fw-bold">
          <div className="mb-3 col-4">
            <span htmlFor="inputProduct" classNameName="htmlForm-label">
              Product Name {' \t'}
            </span>
            <input
              type="text"
              id="inputProduct"
              name="productName"
              onChange={(e) => {
                this.setState({ productName: e.currentTarget.value });
              }}
              value={this.state.productName}
            />
          </div>
          <div className="mb-3 col-4">
            <span htmlFor="inputPrice" className="htmlForm-label">
              Price ₹ {' \t'} 
            </span>
            <input
              type="number"
              className="htmlForm-control"
              id="inputPrice"
              name="productPrice"
              onChange={(e) => {
                this.setState({
                  productPrice: e.currentTarget.value
                });
              }}
              value={this.state.productPrice}
            />
          </div>

          <button type="submit" className="btn btn-primary col-4">
            Add Product
          </button>
        </div>
      </form>
    );
  }
}

export default AddProduct;
