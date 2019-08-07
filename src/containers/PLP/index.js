import React from "react";

import { connect } from 'react-redux'
import { getProducts } from 'actions/products'
import ProductTile from "../../components/Tile";


class PLP extends React.Component {

  static async getInitialProps ({ store, query }) {
    await store.dispatch(getProducts())
  }

  render() {
    const {list} = this.props.products;
    if(!list){
      return null
    }
    return (
      <div className="container">
        <div className="row">
          {list.map((p,i) => {
            return <ProductTile data={p} key={i} index={i}/>;
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    products: state.products
  }
}

export { PLP }
export default connect(mapStateToProps, {
  getProducts
})(PLP)

