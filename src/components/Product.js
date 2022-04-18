import React, { Component } from "react";
import styled from "styled-components";
export default class Product extends Component {
  render() {
    return <ProductFrame>{this.props.product.name}</ProductFrame>;
  }
}

const ProductFrame = styled.div`
  border-radius: 25px;
  min-width: 150px;
  min-height: 150px;
  background-color: rgb(110, 110, 110, 0.7);
  margin: 10px;
`;