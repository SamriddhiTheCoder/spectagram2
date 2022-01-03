import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DrawerNavigator from './navigation/DrawerNavigation';
import BottomTabNavigator from './navigation/TabNavigator';

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
