import React from 'react';

import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';
import { Order } from '../../Types/Order';

const orders:Order[] = [
  {
    '_id': '6400eb32a6cbb9705cddc771',
    'table': '7',
    'status': 'IN_PRODUCTION',
    'products': [
      {
        'product': {
          'name': 'Coca cola',
          'imagePath': '1677781079967-coca-cola.png',
          'price': 7,
        },
        'quantity': 1,
        '_id': '6400eb32a6cbb9705cddc772'
      }
    ],

  },
];

export function Orders() {
  return (
    <Container>
      <OrdersBoard icon="🕒" title="Fila de espera" orders={[]}/>
      <OrdersBoard icon="👩‍🍳" title="Em preparação" orders={orders}/>
      <OrdersBoard icon="✔" title="Pronto!" orders={[]}/>
    </Container>
  );
}
