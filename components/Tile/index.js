import React from "react";
import Link from "../Link";

import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  padding: 32px;
`;
const ProductImg = styled.img`
  width: 250px;
`;

const ProductTile = ({ data }) => {
  return (
    <Wrapper>
      <div className="card">
        <ProductImg
          src="../static/img1.png"
          className="card-img-top product-img"
          alt={data.name}
        />
        <div className="card-body">
          <h5 className="card-title">{data.name}</h5>
          <p className="card-text">
            {/* Some quick example text to build on the card title and make up the
            bulk of the card's content. */}
          </p>
          <Link href="/product" >Get Details</Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProductTile;
