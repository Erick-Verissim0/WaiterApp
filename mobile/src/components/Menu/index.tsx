import { FlatList } from 'react-native';
import { useState } from 'react';

import { products } from '../../mocks/products';
import { FormatCurrency } from '../../utils/formatCurrency';
import { PlusCircle } from '../Icons/PlusCircle';
import { ProductModal } from '../ProductModal';
import { Text } from '../Text';
import { Product } from '../../types/product';

import {
  ProductContainer,
  ProductImage,
  ProductDetails,
  Separator,
  AddCartButton
} from './styles';

interface MenuProps {
  onAddToCart: (product: Product) => void;
  products: Product[]
}

export function Menu({ onAddToCart, products }: MenuProps ) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectProduct, setSelectProduct] = useState<null | Product>(null);

  function handleOpenModal(product: Product) {
    setIsModalVisible(true);
    setSelectProduct(product);
  }

  return (
    <>
      <ProductModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        product={selectProduct}
        onAddToCart={onAddToCart}
      />

      <FlatList
        data={ products }
        style={{ marginTop: 32 }}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        keyExtractor={product => product._id}
        ItemSeparatorComponent={Separator}
        renderItem={({ item: product }) => (
          <ProductContainer onPress={() => handleOpenModal(product)}>
            <ProductImage
              source={{
                uri: `http://192.168.0.107:3001/uploads/${product.imagePath}`,
              }}
            />

            <ProductDetails>
              <Text weight='600'>{ product.name}</Text>

              <Text size={14} color="#666" style={{ marginVertical: 8 }}>{ product.description }</Text>

              <Text size={14} weight="600">{FormatCurrency( product.price )}</Text>
            </ProductDetails>

            <AddCartButton onPress={() => onAddToCart(product)}>
              <PlusCircle />
            </AddCartButton>

          </ProductContainer>
        )}
      />
    </>
  );
}
