import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Image
} from "react-native";

import EmojiConfirmation from '../../assets/EmojiConfirmation.png'
import { Button } from "../components/button";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function Confimation() {

  const navigation = useNavigation()

  function handleStart() {
    navigation.navigate('PlantSelect')
  }

  return (
    <SafeAreaView style={style.container}>
      <View style={style.content}>
        <Image
          source={EmojiConfirmation}
        />

        <View style={style.TextArea}>
          <Text style={style.TextTitle}>
            Prontinho
          </Text>
          <Text style={style.TextSubTitle}>
            Agora vamos começar a cuidar das suas{'\n'}plantinhas com muito cuidado.
          </Text>
        </View>
        <View style={style.ButtonArea}>
          <Button title="Comecar" onPress={handleStart} />
        </View>
      </View>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40
  },
  TextArea: {
    marginTop: 64,
    marginBottom: 40,
    alignItems: 'center'
  },
  TextTitle: {
    fontFamily: fonts.heading,
    fontSize: 24,
    color: colors.heading,

  },
  TextSubTitle: {
    color: colors.heading,
    fontFamily: fonts.text,
    fontSize: 17,
    textAlign: 'center',
    lineHeight: 24,
    marginTop: 16
  },
  ButtonArea: {
    width: '100%',
  }
})