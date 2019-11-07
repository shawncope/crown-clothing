import React from 'react';

import {
  CartItemContainer,
  ImgContainer,
  ItemDetailsContainer,
  NameContainer,
  PriceContainer
} from './cart-items.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <ImgContainer src={imageUrl} alt="item" />
    <ItemDetailsContainer>
      <NameContainer>{name}</NameContainer>
      <PriceContainer>
        {quantity} x ${price}
      </PriceContainer>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;
