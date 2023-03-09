import React, { useState, useEffect } from 'react';
import socketIo from 'socket.io-client';

import { OrdersBoard } from '../OrdersBoard';
import { Order } from '../../Types/Order';
import { api } from '../../utils/api';

import { Container } from './styles';

export function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const socket = socketIo('http://localhost:3001', {
      transports: ['websocket'],
    });

    socket.on('orders@new', (order) => {
      setOrders(prevState => prevState.concat(order));
    });
  }, []);

  useEffect(() => {
    api.get('/orders')
      .then(({ data }) => {
        setOrders(data);
      });
  }, []);

  const waiting = orders.filter((order) => order.status === 'WAITING');
  const inProduction = orders.filter((order) => order.status === 'IN_PRODUCTION');
  const done = orders.filter((order) => order.status === 'DONE');

  function handleCancelOrder(orderId: string) {
    setOrders((prevState) => prevState.filter(order => order._id !== orderId));
  }

  function handleOrderStatusChange(orderId: string, status: Order['status']) {
    setOrders((prevState) => prevState.map((order) => (
      order._id === orderId ? { ...order, status } : order
    )));
  }

  return (
    <Container>
      <OrdersBoard
        icon="🕒"
        title="Fila de espera"
        orders={waiting}
        onChangeOrderStatus={handleOrderStatusChange}
        onCancelOrder={handleCancelOrder}
      />
      <OrdersBoard
        icon="👩‍🍳"
        title="Em preparação"
        orders={inProduction}
        onChangeOrderStatus={handleOrderStatusChange}
        onCancelOrder={handleCancelOrder} />
      <OrdersBoard
        icon="✔"
        title="Pronto!"
        orders={done}
        onChangeOrderStatus={handleOrderStatusChange}
        onCancelOrder={handleCancelOrder} />
    </Container>
  );
}
