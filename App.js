import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Products from "./src/pages/Products";
import ProductsDetail from "./src/pages/ProductsDetail";
import Login from "./src/pages/Login/Login";
import AuthProvider from "./src/context/AuthProvider/AuthProvider";
import { ActivityIndicator } from "react-native";
import { useSelector } from "react-redux";
import { View } from "react-native";

const Stack = createNativeStackNavigator();

function MainNavigator() {
  const userSession = useSelector((s) => s.auth.user);
  const isAuthLoading = useSelector((s) => s.auth.isAuthLoading);

  if (isAuthLoading) {
    return (<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }

  return (
    <Stack.Navigator>
      {!userSession ? (
        <Stack.Screen
          name="LoginPage"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
      ) : (
        <>
          <Stack.Screen
            name="ProductsPage"
            component={Products}
            options={{
              title: "Store",
              headerStyle: { backgroundColor: "#64b5f6" },
              headerTitleStyle: { color: "white" },
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="ProductsDetailPage"
            component={ProductsDetail}
            options={{
              title: "Detail",
              headerStyle: { backgroundColor: "#64b5f6" },
              headerTitleStyle: { color: "white" },
              headerTintColor: "white",
              headerTitleAlign: "center",
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}

function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}

export default App;
