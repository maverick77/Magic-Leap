import React from "react";
import styled from "styled-components";
import Specs from "../../components/Specs";

import { connect } from "react-redux";
import { getProducts } from "actions/products";

const Wrapper = styled.div`
  //   justify-content: space-around;
`;
const Description = styled.p`
  margin-top: 32px;
`;

const ProductImg = styled.img`
  width: 300px;
  height: 300px;
`;
const LeftContainer = styled.div`
  width: 65%;
  padding: 16px;
`;
const RightContainer = styled.div`
  width: 35%;
  padding: 16px;
`;
const Button = styled.button`
  margin-top: 16px;
  font-size: 24px;
`;

class PDP extends React.Component {
  static async getInitialProps({ store, query }) {
    await store.dispatch(getProducts());
  }

  render() {
    const {
      router: {
        query: { id }
      }
    } = this.props;

    const product = this.props.products.list[id];

    return (
      <div className="container">
        <h1>{product.name}</h1>
        <Wrapper className="row">
          <LeftContainer>
            <ProductImg src={`../../static/img${id}.png`} />
            <Description>{product.manufacturer} </Description>
            <Description>
              Was selected for the developers! Was selected by the residents
              need and provide soft. We chocolate! A pure, indeed, present the
              quiver, the choice of exercise? Varius odio congue cillum from the
              pain, the fear, however, are the arc described by the kids, by the
              allies, 'Blessed are the smallest of the great maecenas, the price
              of eiusmod vestibulum nisl vulputate egestas out of life are
              blinded are ultricies orci, however, from which he is beginner.
            </Description>
          </LeftContainer>
          <RightContainer>
            <Specs title="Tech Specs" data={product.techspecs} />
            <Button className="btn btn-primary btn-block">
              {product.price || "Buy"}
            </Button>
          </RightContainer>
        </Wrapper>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products
  };
}

export { PDP };
export default connect(
  mapStateToProps,
  {
    getProducts
  }
)(PDP);
