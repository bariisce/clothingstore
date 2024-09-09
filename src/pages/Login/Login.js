import React from "react";
import { View, Text, Image, Alert } from "react-native";
import styles from "./Login.style";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { Formik } from "formik";
import * as Yup from "yup";
import usePost from "../../hooks/usePost/usePost";
import { API_AUTH_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";

const LoginSchema = Yup.object().shape({
  username: Yup.string().required("Kullanıcı adı boş bırakılamaz !!"),
  password: Yup.string()
    .min(6, "Şifre en az 6 karakter olmalı")
    .required("Şifre boş bırakılamaz !!"),
});

const Login = ({ navigation }) => {
  const { data, loading, error, postData } = usePost();
  const dispatch = useDispatch();

  function handleLogin(values) {
    postData(API_AUTH_URL, +"/login", values);
  }

  if (error) {
    Alert.alert("Dükkan", "Bir Hata Oluştu !!");
  }

  if (data) {
    if (data.status === "Error") {
      Alert.alert("Dükkan", "Kullanıcı adı veya şifre yanlış!!");
    } else {
      dispatch({type: 'SET_USER', payload: {user}})
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.logo_container}>
        <Image
          style={styles.logo}
          source={require("../../assets/login-logo.png")}
        />
      </View>
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          handleLogin(values);
        }}
      >
        {({ handleSubmit, handleChange, values, errors, touched }) => (
          <View style={styles.body_container}>
            <Input
              placeholder="Kullanıcı Adını giriniz ..."
              value={values.username}
              onType={handleChange("username")}
              iconName="account"
            />
            {touched.username && errors.username && (
              <Text style={styles.errorText}>{errors.username}</Text>
            )}
            <Input
              placeholder="Şifrenizi Giriniz ..."
              value={values.password}
              onType={handleChange("password")} // m38rmF$
              securityTextEntry={true}
              iconName="key"
            />
            {touched.password && errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}
            <Button text="Giriş Yap" onPress={handleSubmit} loading={loading} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Login;

const user = {
  address: {
    geolocation: {
      lat: "-37.3159",
      long: "81.1496",
    },
    city: "kilcoole",
    street: "new road",
    number: 7682,
    zipcode: "12926-3874",
  },
  id: 1,
  email: "john@gmail.com",
  username: "johnd",
  password: "m38rmF$",
  name: {
    firstname: "john",
    lastname: "doe",
  },
  phone: "1-570-236-7033",
  __v: 0,
};
