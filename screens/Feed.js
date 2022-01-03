import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { Text, View, StyleSheet, Platform, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { RFValue } from "react-native-responsive-fontsize";
import PostCard from "./PostCard";

let posts = require("./temp_posts.json");

export default class Feed extends Component {

  renderItem = ({ item: post }) => {
    return <PostCard post={post} />;
  };

  keyExtractor = (item, index) => index.toString();

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.driodSafeArea} />
        <View style={styles.appTitle}>
          <View style={styles.appIcon}>
            <Image
              source={require("../assets/logo.png")}
              style={styles.iconImage}
            />
          </View>
          <View style={styles.appTitleTextContainer}>
            <Text style={styles.appTitleText}>Spectagram</Text>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <FlatList
            keyExtractor={this.keyExtractor}
            data={posts}
            renderItem={this.renderItem}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#260823",
  },
  driodSafeArea: {
    marginTop:
      Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35),
  },
  appTitle: {
    flex: 0.07,
    flexDirection: "row",
  },
  appIcon: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  appTitleTextContainer: {
    flex: 0.8,
    justifyContent: "center",
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(35),
  },
  cardContainer: {
    flex: 0.85,
  },
});
