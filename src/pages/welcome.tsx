import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import wateringImg from '../../assets/watering.png'
import colors from "../styles/colors";

export function Welcome() {
  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.title}>Gerencie{'\n'}suas plantas de{'\n'}forma fácil</Text>

      <Image source={wateringImg} style={styles.image} />

      <Text style={styles.subtitle} >Não esqueça mais de regar suas{'\n'}plantas. Nós cuidamos de lembrar você{'\n'}sempre que precisar.</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}> > </Text>
      </TouchableOpacity>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 70
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.heading,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 24,
    paddingHorizontal: 20,
    color: colors.heading,
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    width: 56,
    height: 56,
  },
  image: {
    width: 292,
    height: 284,
  },
  buttonText: {
    color: colors.white
  }
})