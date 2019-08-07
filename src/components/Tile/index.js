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
  height: 250px;
`;

const ProductTile = ({ data, index }) => {
  return (
    <Wrapper>
      <div className="card">
        <ProductImg
          src={`../static/img${index}.png`}
          className="card-img-top product-img"
          alt={data.name}
        />
        <div className="card-body">
          <h5 className="card-title">{data.name}</h5>
          <p className="card-text" />
          <Link href={`/product/${index}`}>Get Details</Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProductTile;
