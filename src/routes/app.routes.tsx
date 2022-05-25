import React from "react";
import { Home } from "../pages/Home";
import { createStackNavigator } from "@react-navigation/stack";
import { Header } from "../components/Header";
import { BottomTabs } from "./bottomTabs.routes";

type RootStackParamList = {
  Tabs: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const AppRoutes = () => (
  <Stack.Navigator
    screenOptions={{
      header: (props) => <Header {...props} />,
      headerTransparent: true,
      headerTitle: "Weather",
    }}
  >
    <Stack.Screen name="Tabs" component={BottomTabs} />
  </Stack.Navigator>
);
