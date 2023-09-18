import { Feather } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colorMap } from "../../constants/colors";
import Container from "../Container/Container";

const BookNowContainer = () => {
  return (
    <Container>
      <View className="bg-grey2 w-full mt-4 rounded-xl flex-row justify-between items-center p-4">
        <View className="flex-[1.7]">
          <Text className="text-white text-base" style={styles.bookingHeader}>
            In a hurry?
          </Text>
          <Text className="text-grey6 text-sm">
            Tap for a quick appointment booking
          </Text>
        </View>

        <View className="flex flex-[1.5] rounded-2xl  overflow-hidden">
          <Pressable
            className="bg-brandColor1 flex-row justify-between items-center p-4 rounded-2xl overflow-hidden"
            android_ripple={{
              color: colorMap.brandColor2,
            }}
          >
            <Text className="text-lg text-white" style={styles.bookingHeader}>
              Book now
            </Text>
            <Feather name="arrow-right" size={24} color="white" />
          </Pressable>
        </View>
      </View>
    </Container>
  );
};

export default BookNowContainer;

const styles = StyleSheet.create({
  bookingHeader: {
    fontFamily: "space-grotesk-bold",
  },
});
