import React from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import {
  LocationCard,
  LocationCardProps,
} from "../../components/ListItems/LocationCard";

import { theme } from "../../styles/theme";

const data = [
  {
    title: "Favorites",
    data: [
      {
        name: "Home",
        distance: 2.2,
        address: "Rua José Linck, 112",
      },
      {
        name: "Home",
        distance: 2.2,
        address: "Rua José Linck, 112",
      },
      {
        name: "Home",
        distance: 2.2,
        address: "Rua José Linck, 112",
      },
    ],
  },
  {
    title: "Locais",
    data: [
      {
        name: "Home",
        distance: 2.2,
        address: "Rua José Linck, 112",
      },
      {
        name: "Home",
        distance: 2.2,
        address: "Rua José Linck, 112",
      },
      {
        name: "Home",
        distance: 2.2,
        address: "Rua José Linck, 112",
      },
    ],
  },
];

export const LocationSearch = () => {
  const onCardPress = () => {};

  return (
    <View style={styles.container}>
      <SectionList
        sections={data}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.title}>{title}</Text>
        )}
        keyExtractor={(_, index) => String(index)}
        renderItem={({ item }) => (
          <LocationCard {...item} style={styles.card} onPress={onCardPress} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    backgroundColor: theme.background.primary,
  },
  card: {},
  title: {
    marginVertical: theme.spacing.md,
    marginLeft: theme.spacing.lg,
    color: theme.text.primary,
    fontSize: RFValue(theme.fontSize.md),
    fontWeight: "bold",
  },
});
