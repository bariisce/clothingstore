import React from "react";
import { Text, FlatList, ActivityIndicator } from "react-native";
import { API_PRODUCT_URL } from "@env";
import ProductCard from "../../components/ProductCard/ProductCard";
import useFetch from "../../hooks/useFetch/useFetch";
function Products({ navigation }) {
  const { loading, error, data } = useFetch(API_PRODUCT_URL);

  const handleProductSelect = (id) => {
    navigation.navigate("ProductsDetailPage", { id });
  };

  const renderProduct = ({ item }) => (
    <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />
  );

  if (error) {
    return <Text>HATATATAATATATAAT !!!!</Text>
  }

  if (loading) {
    return <ActivityIndicator size={"large"}/>;
  }

  return <FlatList data={data} renderItem={renderProduct} />;
}
export default Products;
