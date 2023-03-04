import React, { useEffect } from 'react';

import { Overlay, ModalBody, OrderDetails, Actions } from './styles';
import closeIcon from '../../assets/images/close-icon.svg';
import { Order } from '../../Types/Order';
import { FormatCurrency } from '../../utils/formatCurrency';

interface OrderModalProps {
    visible: boolean;
    order: Order | null
    onClose: () => void;
}

export function OrderModal({ visible, order, onClose }: OrderModalProps) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };

  }, [onClose]);

  if(!visible || !order) {
    return null;
  }

  const total = order.products.reduce((total, { product, quantity }) => {
    return total + (product.price * quantity);
  }, 0);

  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>Mesa {order.table}</strong>
          <button type='button'> <img src={ closeIcon } alt="Ícone" onClick={onClose} /> </button>
        </header>

        <div className='status-container'>
          <small>Status do Pedido</small>
          <div>
            <span> { order.status === 'WAITING' && '🕒' } </span>
            <span> { order.status === 'IN_PRODUCTION' && '👩‍🍳' } </span>
            <span> { order.status === 'DONE' && '✔' } </span>

            <strong>
              { order.status === 'WAITING' && 'Fila de espera' }
              { order.status === 'IN_PRODUCTION' && 'Em preparo' }
              { order.status === 'DONE' && 'Pronto!' }
            </strong>
          </div>
        </div>
        <OrderDetails>
          <strong>Itens</strong>

          <div className='order-itens'>
            {order.products.map(({_id, product, quantity}) => (
              <div className='item' key={_id}>
                <img
                  src={`http://localhost:3001/uploads/${product.imagePath}`}
                  alt={product.name}
                  width="56"
                  height="29"
                />

                <span className='quantity'> {quantity}x </span>

                <div className='product-details' >
                  <strong> {product.name} </strong>
                  <span> {FormatCurrency(product.price)} </span>
                </div>
              </div>
            ))}
          </div>

          <div className='total'>
            <span>Total: </span>
            <strong> {total} </strong>
          </div>
        </OrderDetails>

        <Actions>
          <button type='button' className='primary'>
            <span>👩‍🍳</span>
            <strong>Iniciar produção</strong>
          </button>

          <button type='button' className='secondary'>
            Cancelar pedido
          </button>
        </Actions>

      </ModalBody>
    </Overlay>
  );
}
