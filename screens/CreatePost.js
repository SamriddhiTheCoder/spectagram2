import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  TextInput,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import DropDownPicker from "react-native-dropdown-picker";

let preview_images = {
  image_1: require("../assets/image_1.jpg"),
  image_2: require("../assets/image_2.jpg"),
  image_3: require("../assets/image_3.jpg"),
  image_4: require("../assets/image_4.jpg"),
  image_5: require("../assets/image_5.jpg"),
};

export default class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previewImage: "image_1",
      dropDownheight: 40,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style={styles.appTitle}>
          <View style={styles.appIcon}>
            <Image
              source={require("../assets/logo.png")}
              style={styles.iconImage}
            ></Image>
          </View>
          <View style={styles.appTitleTextContainer}>
            <Text style={styles.appTitleText}>New Post</Text>
          </View>
        </View>
        <View style={styles.fieldsContainer}>
          <ScrollView>
            <Image
              source={preview_images[this.state.previewImage]}
              style={styles.previewImage}
            ></Image>
            <View style={{ height: RFValue(this.state.dropDownheight) }}>
              <DropDownPicker
                items={[
                  { label: "Image 1", value: "image_1" },
                  { label: "Image 2", value: "image_2" },
                  { label: "Image 3", value: "image_3" },
                  { label: "Image 4", value: "image_4" },
                  { label: "Image 5", value: "image_5" },
                ]}
                defaultValue={this.state.previewImage}
                containerStyle={{
                  marginBottom: 10,
                  borderRadius: 20,
                  height: 40,
                }}
                onOpen={() => {
                  this.setState({ dropDownheight: 170 });
                }}
                onClose={() => {
                  this.setState({ dropDownheight: 40 });
                }}
                style={{ backgroundColor: "transparent" }}
                itemStyle={{ justifyContent: "flex-start" }}
                dropDownStyle={{ backgroundColor: "#2a2a2a" }}
                labelStyle={{
                  color: "white",
                }}
                arrowStyle={{ color: "white" }}
                onChangeItem={(item) => {
                  this.setState({ previewImage: item.value });
                }}
              />
            </View>
            <TextInput
              onChangeText={(caption) => this.setState({ caption: caption })}
              placeholder={"Caption"}
              placeholderTextColor="white"
            />
          </ScrollView>
        </View>
        <View style={{ flex: 0.08 }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#260823",
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  appTitle: {
    flex: 0.07,
    flexDirection: 'row',
  },
  appIcon: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: 'center',
  },
  appTitleText: {
    color: 'white',
    fontSize: RFValue(28),
  },
  fieldsContainer: {
    flex: 0.85,
  },
  previewImage: {
    width: '92%',
    height: RFValue(250),
    alignSelf: 'center',
    borderRadius: 20,
    resizeMode: 'contain',
  },
  text: { 
    height: 50, 
    borderWidth: 2, 
    margin: 2, 
    padding:2, 
    backgroundColor: 'white'},
});
