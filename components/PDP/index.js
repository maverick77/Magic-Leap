import React from "react";
import styled from "styled-components";
import Specs from "../Specs";

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
  constructor(props) {
    super(props);
    this.state = {
      product: {
        name: "Twin Ion Engine Starfighter",
        manufacturer: "Sienar Fleet Systems",
        class: "Starfighter",
        techspecs: {
          length: "8.99 m",
          maxaccel: "4,100 G",
          MGLT: "100 MGLT",
          maxatmosphericspeed: "1,200 km/h",
          hull: "Titanium alloy hull",
          sensor: "SFS S-c3.8 multi-range TAG",
          targeting: "SFS T-s8 targeting computer",
          armament: "SFS L-s1 laser cannons",
          communications: "AE-35 subspace transceiver"
        }
      }
    };
  }

  render() {
    const { product } = this.state;
    return (
      <div className="container">
        <h1>{product.name}</h1>
        <Wrapper className="row">
          <LeftContainer>
            <ProductImg src="../../static/img1.png" />
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
            <Specs title="Tech Specs" data={this.state.product.techspecs} />
            <Button className="btn btn-primary btn-block">Buy</Button>
          </RightContainer>
        </Wrapper>
      </div>
    );
  }
}

export default PDP;
