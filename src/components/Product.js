import React, { Component } from "react";
import styled from "styled-components";
export default class Product extends Component {
  render() {
    return (
      <ProductFrame>
        <ProductImage src={this.props.product.img} />
        <ProductInfoWrapper>
          <span>{this.props.product.name}</span>
          <span>{this.props.product.price}</span>
        </ProductInfoWrapper>
      </ProductFrame>
    );
  }
}

const ProductFrame = styled.div`
  border-radius: 25px;
  min-width: 150px;
  min-height: 150px;
  background-color: rgb(110, 110, 110, 0.7);
  margin: 10px;
  display: flex;
  flex-direction: column;
`;

const ProductImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 25px;
`;
const ProductInfoWrapper = styled.div`
  margin-top: auto;
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  & > span {
    text-align: center;
  }
`;
