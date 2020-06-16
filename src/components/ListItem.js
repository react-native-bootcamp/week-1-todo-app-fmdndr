import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

///

const ListItem = (props) => {
  //  Styles control for done or undone todo styles
  let styles = props.myData.isDone ? doneStyles : undoneStyles;
  return (
    <TouchableOpacity onPress={props.myOnPress}>
      <View style={styles.container}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.text}>{props.myData.myEntry}</Text>
        </View>
        {props.myData.isDone && <Text>Yapıldı!</Text>}
      </View>
    </TouchableOpacity>
  );
};

const doneStyles = StyleSheet.create({
  container: {
    backgroundColor: "#ff8a65",
    margin: 5,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    borderStyle: "dashed",
    borderColor: "black",
    borderWidth: 0.9,
  },
  text: {
    fontSize: 20,
    marginLeft: 10,
    textDecorationLine: "line-through",
  },
  dot: {
    backgroundColor: "red",
    width: 10,
    height: 10,
    borderRadius: 10,
  },
});

const undoneStyles = StyleSheet.create({
  container: {
    backgroundColor: "#82ada9",
    margin: 5,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 0.9,
    borderStyle: "dashed",
    borderColor: "black",
  },
  text: {
    fontSize: 20,
    marginLeft: 10,
  },
  dot: {
    backgroundColor: "red",
    width: 10,
    height: 10,
    borderRadius: 10,
  },
});

export { ListItem };
