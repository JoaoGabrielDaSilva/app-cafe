import React from "react";
import { Home } from "../pages/Home";
import { createStackNavigator } from "@react-navigation/stack";
import { Header } from "../components/Header";

type RootStackParamList = {
  Home: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const AppRoutes = () => (
  <Stack.Navigator
    screenOptions={{
      header: (props) => <Header {...props} />,
      headerTransparent: true,
    }}
  >
    <Stack.Screen name="Home" component={Home} options={{ title: "Weather" }} />
  </Stack.Navigator>
);
