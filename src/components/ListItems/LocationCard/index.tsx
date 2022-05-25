import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View, ViewProps } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../../styles/theme";

export type LocationCardProps = {
  name: string;
  address: string;
  distance: number;
};

type Props = ViewProps &
  LocationCardProps & {
    onPress: (info: LocationCardProps) => void;
  };

export const LocationCard = ({
  name,
  address,
  distance,
  onPress,
  style,
}: Props) => {
  return (
    <RectButton
      onPress={() => onPress({ name, address, distance })}
      style={styles.button}
    >
      <View style={[style, styles.container]}>
        <View style={styles.leftSide}>
          <Ionicons name="ios-location" style={styles.icon} />
          <View style={styles.info}>
            {name ? <Text style={styles.name}>{name}</Text> : null}
            <Text style={styles.address}>{address}</Text>
          </View>
        </View>
        <Text style={styles.distance}>{distance} kilometers</Text>
      </View>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: theme.spacing.lg,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: theme.spacing.lg,
    borderWidth: 1,
    borderColor: "transparent",
    borderBottomColor: theme.background.secondary,
  },
  leftSide: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    color: theme.text.primary,
    fontSize: RFValue(theme.fontSize.md),
    fontWeight: "600",
    marginRight: theme.spacing.lg,
  },
  info: {},
  name: {
    color: theme.text.primary,
    fontSize: RFValue(theme.fontSize.sm),
    fontWeight: "bold",
  },
  address: {
    color: theme.text.secondary,
    fontSize: RFValue(theme.fontSize.sm),
  },
  distance: {
    color: theme.text.primary,
    fontSize: RFValue(theme.fontSize.sm),
  },
});
