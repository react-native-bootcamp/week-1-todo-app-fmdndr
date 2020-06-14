import React, { useState } from "react";
import { SafeAreaView, View, FlatList } from "react-native";

import { ListItem, MyButton, MyInput } from "./components";

const Main = (props) => {
  // Use States
  const [entry, setEntry] = useState("");
  const [list, setList] = useState([]);
  // Functions are started  here

  const changeText = (text) => {
    setEntry(text);
  };
  // Todos adding list at here
  const addToList = () => {
    let newList = [...list];
    newList.push({ myEntry: entry, isDone: false });
    setList(newList);
    console.log(newList);
  };

  // Todos  is done paramter updating on here

  // This part of learned by teacher
  function updateStatus(item) {
    let updateList = [...list];
    updateList[item].isDone = !updateList[item].isDone;
    setList(updateList);
  }

  // This part of my fault and that cause I spend a lot of time :)
  //***
  // const updateStatus = (item) => {
  //   let updateList = [...list];
  //   updateList.isDone = !updateList.isDone;
  //   setList(updateList);
  // };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={list}
          renderItem={({ item, index }) => (
            <ListItem myData={item} myOnPress={() => updateStatus(index)} />
          )}
        />
        <View>
          <MyInput holder="Hello" textChange={changeText} />
          <MyButton myTitle="Add Task" myPress={addToList} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export { Main };
