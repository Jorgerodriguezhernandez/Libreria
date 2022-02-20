import { useState } from "react";

import {
  FlatList,
  Button,
  Text,
  StyleSheet,
  TextInput,
  View,
  SafeAreaView,
  ScrollView,
} from "react-native";

import Libro from "./components/Libro";

export default function App() {
  return (
    <View>
      <Libro/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    backgroundColor: "#ccc",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "83%",
    shadowColor: "#ccc",
  },

  inputGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 20,
  },
  productInput: {
    width: "75%",
    borderBottomColor: "teal",
    borderBottomWidth: 1,
    height: 40,
  },
  productButton: {
    width: "25%",
  },
  listItem: {
    height: 100,
    width: "100%",
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "white",
    shadowColor: "#ccc",
    borderRadius: 5,
  },
  listItemText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  listContainer: {
    width: "100%",
  },
});
