import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Products from "./src/pages/Products";
import ProductsDetail from "./src/pages/ProductsDetail";
import Login from "./src/pages/Login/Login";
import { useSelector } from "react-redux";
import AuthProvider from "./src/context/AuthProvider/AuthProvider";

const Stack = createNativeStackNavigator();
function App() {
  const userSession = useSelector((s) => s.auth.user);
  const isAuthLoading = useSelector((s) => s.auth.isAuthLoading);

  return (
    <AuthProvider>
      <NavigationContainer>
        {isAuthLoading ? (
          <ActivityIndicator size={"large"} />
        ) : !userSession ? (
          <Stack.Navigator>
            <Stack.Screen
              name="LoginPage"
              component={Login}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator>
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
                headerTintColor: { color: "white" },
                headerTitleAlign: "center",
              }}
            />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </AuthProvider>
  );
}

export default App;
