import { FlatList } from 'react-native';

import { products } from '../../mocks/products';
import { FormatCurrency } from '../../utils/formatCurrency';
import { PlusCircle } from '../Icons/PlusCircle';
import { Text } from '../Text';

import {
  Product,
  ProductImage,
  ProductDetails,
  Separator,
  AddCartButton
} from './styles';

export function Menu() {
  return (
    <FlatList
      data={ products }
      style={{ marginTop: 32 }}
      contentContainerStyle={{ paddingHorizontal: 24 }}
      keyExtractor={product => product._id}
      ItemSeparatorComponent={Separator}
      renderItem={({ item: product }) => (
        <Product>
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

          <AddCartButton>
            <PlusCircle />
          </AddCartButton>

        </Product>
      )}
    />
  );
}
