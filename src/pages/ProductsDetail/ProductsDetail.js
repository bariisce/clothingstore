import React from "react";
import { View, Text, Image,ActivityIndicator } from "react-native";
import styles from "./ProductsDetail.style";
import useFetch from "../../hooks/useFetch/useFetch";
import { API_PRODUCT_URL } from "@env";

function ProductsDetail({ route }) {
  const { id } = route.params;
  const { loading, error, data } = useFetch(`${API_PRODUCT_URL}/${id}`);

  if (loading) return <ActivityIndicator size={"large"} />;
  if (error) return <Text>HATATATAATATATAAT</Text>;
  return (
    <View style={styles.container}>
      <Image source={{ uri: data.image }} style={styles.image} />
      <View style={styles.body_container}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.desc}>{data.description}</Text>
        <Text style={styles.price}>{data.price} TL</Text>
      </View>
    </View>
  );
}

export default ProductsDetail;
