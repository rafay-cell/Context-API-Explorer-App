import React, { useEffect, useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { ApiContext } from '../contexts/ApiContext';
import { LoaderContext } from '../contexts/LoaderContext';

export default function ProductListScreen({ navigation }) {
  const { products, fetchProducts, apiError } = useContext(ApiContext);
  const { setLoading } = useContext(LoaderContext);

  useEffect(() => {
    setLoading(true);
    fetchProducts().finally(() => setLoading(false));
  }, []);

  if (apiError) return <Text>{apiError}</Text>;

  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Details', { product: item })}>
          <Text style={{ padding: 15 }}>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  );
}
