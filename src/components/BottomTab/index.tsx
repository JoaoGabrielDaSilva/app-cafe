import { Ionicons } from "@expo/vector-icons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../styles/theme";

type Props = BottomTabBarProps;

const icons = {
  Home: "home-outline",
  Schedule: "calendar",
  Settings: "settings",
};

export const BottomTab = ({ navigation: { navigate }, state }: Props) => {
  const routes = useMemo(() => {
    return state.routeNames.map((item) => ({
      name: item,
      icon: icons.hasOwnProperty(item) ? icons[item] : "",
    }));
  }, []);

  const currentRoute = state.index;

  return (
    <View style={styles.container}>
      {routes.map((route, index) => (
        <BorderlessButton
          onPress={() => navigate(route.name)}
          style={{ padding: 5 }}
          rippleColor={theme.text.secondary}
        >
          <Ionicons
            key={index}
            name={route.icon}
            style={[
              styles.icon,
              {
                color:
                  currentRoute === index
                    ? theme.text.primary
                    : theme.text.secondary,
              },
            ]}
          />
        </BorderlessButton>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: theme.spacing.lg,
    backgroundColor: theme.background.secondary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  icon: {
    fontSize: RFValue(theme.fontSize.md),
  },
});
