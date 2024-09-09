import React from "react";
import { TextInput, View } from "react-native";
import styles from "./Input.style";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const Input = ({ placeholder, value, onType, securityTextEntry, iconName }) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input}
        placeholder={placeholder}
        onChangeText={onType}
        value={value}
        secureTextEntry={securityTextEntry}
      />
      <Icon name={iconName} size={24} color="#777" />
    </View>
  );
};

export default Input;
