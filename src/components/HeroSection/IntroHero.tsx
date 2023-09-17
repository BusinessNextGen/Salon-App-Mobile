import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Container from "../Container/Container";
import IconNextButton from "../IconNextButton/IconNextButton";

const IntroHero = () => {
  return (
    <Container classes="mt-4">
      <View className="h-36 w-full rounded-lg">
        <ImageBackground
          source={require("../../../assets/images/hero-hair.jpg")}
          resizeMode="cover"
          className="h-full w-full overflow-hidden rounded-lg  items-start justify-center "
        >
          <View>
            <Text
              className="capitalize text-white text-3xl ml-4"
              style={styles.header}
            >
              your hair,
            </Text>
            <Text
              className="capitalize text-white text-3xl ml-4"
              style={styles.header}
            >
              your style
            </Text>
            <Text
              className="capitalize text-brandColor1 text-base ml-4"
              style={styles.subText}
            >
              book now for a new look
            </Text>
          </View>
          <View className="absolute right-0 bottom-6 mr-4">
            <IconNextButton />
          </View>
        </ImageBackground>
        <View className="absolute w-full h-full bg-[#1d1d19] opacity-50 rounded-lg" />
      </View>
    </Container>
  );
};

export default IntroHero;

const styles = StyleSheet.create({
  header: {
    fontFamily: "space-grotesk-medium",
  },
  subText: {
    fontFamily: "urbanist-bold",
  },
});
