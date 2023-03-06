import { FlatList, Modal } from 'react-native';

import { Product } from '../../types/product';
import { Text } from '../Text';
import { Close } from '../Icons/Close';

import {
  Image,
  CloseButton,
  Header,
  ModalBody,
  IngredientsContainer,
  Ingredient,
  Footer,
  FooterContainer,
  PriceContainer,

} from './styles';
import { FormatCurrency } from '../../utils/formatCurrency';
import { Button } from '../Button';

interface ProductModal{
  visible: boolean;
  onClose: () => void;
  product: null | Product;
  onAddToCart: (product: Product) => void;
}

export function ProductModal({visible, onClose, product, onAddToCart}: ProductModal) {
  if (!product) {
    return null;
  }

  function handleAddToCart() {
    onAddToCart(product!);
    onClose();
  }

  return (
    <Modal
      visible={visible}
      animationType='slide'
      onRequestClose={onClose}
    >
      <Image
        source={{ uri:`http://192.168.0.107:3001/uploads/${product.imagePath}`,
        }}>
        <CloseButton onPress={onClose}>
          <Close />
        </CloseButton>
      </Image>

      <ModalBody>
        <Header>
          <Text size={24} weight="600"> {product.name} </Text>
          <Text size={16} color="#666" style={{ marginTop: 8 }}> {product.description} </Text>
        </Header>

        {product.ingredients.length > 0 && (
          <IngredientsContainer>
            <Text weight='600'color='#666' >Ingredientes</Text>

            <FlatList
              data={product.ingredients}
              keyExtractor={ingredient => ingredient._id}
              showsVerticalScrollIndicator={false}
              style={{ marginTop: 16 }}
              renderItem={({ item: ingredient }) => (
                <Ingredient>
                  <Text>{ingredient.icon}</Text>
                  <Text size={14} color='#666' style={{ marginLeft: 20 }} >{ingredient.name}</Text>
                </Ingredient>
              )}
            />
          </IngredientsContainer>
        )}
      </ModalBody>

      <Footer>
        <FooterContainer>
          <PriceContainer>
            <Text color='#666'>Preço:</Text>
            <Text size={20} weight='600'>{FormatCurrency(product.price)}</Text>
          </PriceContainer>
          <Button onPress={handleAddToCart}>Adicionar ao pedido</Button>
        </FooterContainer>
      </Footer>

    </Modal>
  );
}
