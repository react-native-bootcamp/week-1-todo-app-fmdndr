import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const MyInput = (props) => {
  return (
    <View style={inputStyle.inputContainer}>
      <TextInput
        keyboardType={props.boardType}
        autoCapitalize={props.Capital}
        placeholder={props.holder}
        onChangeText={props.textChange}
      />
    </View>
  );
};

const inputStyle = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#eceff1",
    padding: 10,
    margin: 20,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.34,
    shadowRadius: 2,
    elevation: 10,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
});
export { MyInput };
