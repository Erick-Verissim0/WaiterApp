import React from 'react';
import { OrdersBoard } from '../OrdersBoard';

import { Container } from './styles';

const orders:Order[] = [
  {
    '_id': '6400eb32a6cbb9705cddc771',
    'table': '7',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          '_id': '6400e8577e9f967b60092c95',
          'name': 'Coca cola',
          'description': 'Coca cola em lata',
          'imagePath': '1677781079967-coca-cola.png',
          'price': 7,
          'ingredients': [],
          'category': '6400b60cefa3372c93ec1b8c',
          '__v': 0
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
      <OrdersBoard icon="🐕" title="Cachorro de posto" orders={[]}/>
      <OrdersBoard icon="✔" title="Tudo certo e nada acertado" orders={orders}/>
      <OrdersBoard icon="🔫" title="Pei Pei Pei" orders={[]}/>
    </Container>
  );
}
