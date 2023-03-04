import React from 'react';
import { useState } from 'react';

import { Board, OrdersContainer } from './styles';
import { Order } from '../../Types/Order';
import { OrderModal } from '../OrderModal';

interface OrdersBoardProps {
    icon: string;
    title: string;
    orders: Order[];
}

export function OrdersBoard({ icon, title, orders }: OrdersBoardProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<null | Order>(null);

  function handleOpenModal(order: Order) {
    setIsModalVisible(true);
    setSelectedOrder(order);
  }

  function handleCloseModal() {
    setIsModalVisible(false);
    setSelectedOrder(null);
  }

  return (
    <Board>
      <OrderModal visible={isModalVisible} order={selectedOrder} onClose={handleCloseModal}/>
      <header>
        <span> { icon } </span>
        <span> { title } </span>
        <span> { orders.length } </span>
      </header>


      {orders.length > 0 && (
        <OrdersContainer>
          {orders.map((order) => (
            <button type='button' key={order._id} onClick={() => handleOpenModal(order)}>
              <strong> { order.table } </strong>
              <span> { order.products.length } iten(s) </span>
            </button>
          ))}
        </OrdersContainer>
      )}
    </Board>
  );
}
