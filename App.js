import React from "react";
import { View } from "react-native";
import { registerRootComponent } from "expo";
import Header from "./src/components/Header";
import AlbumList from "./src/components/AlbumList";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header headerText={"Albums"} />
      <AlbumList />
    </View>
  );
};

// AppRegistry.registerComponent('albums', () => App)
registerRootComponent(App);
