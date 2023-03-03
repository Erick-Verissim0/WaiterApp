import React from 'react';

import { Board, OrdersContainer } from './styles';

interface OrdersBoardProps {
    icon: string;
    title: string;
    orders: Order[];
}

export function OrdersBoard({ icon, title }: OrdersBoardProps) {
  return (
    <Board>
      <header>
        <span> { icon } </span>
        <span> { title } </span>
        <span>(1)</span>
      </header>

      <OrdersContainer>
        <button type='button'>
          <strong> { icon } </strong>
          <span> { title } </span>
        </button>
        <button type='button'>
          <strong> { icon } </strong>
          <span> { title } </span>
        </button>
      </OrdersContainer>
    </Board>
  );
}
