/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from "react";
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  TouchableOpacity
} from "react-native";

import data from "./data.json";

const App = () => {
  const [state, setState] = useState({ price: 0, checked: [] });
  const { price, checked } = state;
  console.log(state);
  return (
    <SafeAreaView>
      <Text>Price: ${price}</Text>
      <FlatList
        data={data}
        keyExtractor={val => `invoice_${val.id}`}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.wrapper}
            onPress={() => {
              console.log(state);
              if (checked.findIndex(id => item.id === id) >= 0) {
                setState({
                  price: price - parseInt(item.price),
                  checked: checked.filter(id => id !== item.id),
                });
              } else {
                setState({
                  price: price + parseInt(item.price),
                  checked: [...checked, item.id],
                });
              }
            }}
          >
            <View
              style={
                checked.findIndex(id => item.id === id) >= 0
                  ? styles.checked
                  : styles.unchecked
              }
            />
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.value}>{item.price}</Text>
          </TouchableOpacity>
        )}
        extraData={checked}
      />
    </SafeAreaView>
  );
};

const styles = {
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: 16
  },
  checked: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#ECECEC",
    backgroundColor: "#CCC",
    marginHorizontal: 10,
  },
  unchecked: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#ECECEC",
    backgroundColor: "#FFF",
    marginHorizontal: 10,
  },
  text: {
    flex: 1
  },
};

export default App;
