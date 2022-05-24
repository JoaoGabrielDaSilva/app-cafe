import React from "react";
import { Home } from "../pages/Home";
import { createStackNavigator } from "@react-navigation/stack";
import { Header } from "../components/Header";
import { BottomTabs } from "./bottomTabs.routes";
import { LocationSearch } from "../pages/LocationSearch";

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
    <Stack.Screen name="Tabs" component={BottomTabs} />
    <Stack.Screen
      name="LocationSearch"
      component={LocationSearch}
      options={{
        animationEnabled: false,
        detachPreviousScreen: false,
      }}
    />
  </Stack.Navigator>
);
