import React from "react";
import axios from "axios";

import ProductTile from "../Tile";


class PLP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    axios.get("http://demo7475333.mockable.io/spaceships").then(({ data }) => {
      this.setState({ products: data.products });
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.products.map(p => {
            return <ProductTile data={p} />;
          })}
        </div>
      </div>
    );
  }
}

export default PLP;
