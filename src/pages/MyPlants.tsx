import React from "react";

import { StyleSheet, View, Image, Text } from "react-native";

import { Header } from "../components/Header";

import colors from "../styles/colors";

import waterDrop from '../../assets/waterdrop.png'


export function MyPlants() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.spotlight}>
        <Image source={waterDrop} style={styles.spotlightImage} />

        <Text >

        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingTop: 50,
    backgroundColor: colors.background
  }
})