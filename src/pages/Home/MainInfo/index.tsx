import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../../styles/theme";
import LottieView from "lottie-react-native";

import icon from "../../../animations/lottie/raining.json";

const { width } = Dimensions.get("screen");

export const MainInfo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.locationContainer}>
        <Ionicons name="ios-location" style={styles.pin} />
        <Text style={styles.locationText}>São Leopoldo, Brazil</Text>
      </View>
      <View>
        <Text style={styles.dateText}>Tue, Mar 2</Text>
      </View>
      <View>
        <LottieView style={styles.image} source={icon} autoPlay loop />
      </View>
      <Text style={styles.temperatureText}>21º</Text>
      <View style={styles.statusContainer}>
        <Text style={styles.statusText}>Cloudy</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: theme.spacing.lg,
    alignItems: "center",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: theme.spacing.md,
  },
  pin: {
    color: theme.text.primary,
    fontSize: RFValue(theme.fontSize.lg),
    marginRight: theme.spacing.sm,
  },
  locationText: {
    color: theme.text.primary,
    fontSize: RFValue(theme.fontSize.sm),
    fontWeight: "600",
  },
  dateText: {
    color: theme.text.secondary,
    fontSize: RFValue(theme.fontSize.xsm),
    fontWeight: "600",
    marginBottom: theme.spacing.lg,
  },
  image: {
    width: width * 0.4,
    height: width * 0.3,
  },
  temperatureText: {
    color: theme.text.primary,
    fontSize: RFValue(theme.fontSize.xxxl),
    fontWeight: "bold",
    marginVertical: theme.spacing.md,
  },
  statusContainer: {
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.lg,
    backgroundColor: theme.background.secondary,
    borderRadius: theme.radii.md,
  },
  statusText: {
    color: theme.text.primary,
    fontSize: RFValue(theme.fontSize.md),
    fontWeight: "700",
  },
});
