import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {useState, useEffect} from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";
import store from "./store";

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [isAuthLoading, setAuthLoading] = useState(true)

    useEffect(() => {
        AsyncStorage.getItem('@USER').then(userSession => {
            userSession && setUser(JSON.parse(userSession))
            setAuthLoading(false)
        })
    }, [])

    return <Provider store={store}>{children}</Provider>
}
export default AuthProvider;