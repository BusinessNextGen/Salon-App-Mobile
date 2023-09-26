import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import Container from "../Container/Container";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../global";

const AppointmentBooking = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, "Main">>();

  const handleNavigation = () => {
    navigation.navigate("ReviewBooking");
  };
  return (
    <View className="bg-grey2 w-full mt-4 rounded-xl flex-row justify-between items-center p-2">
      <View className="flex-[2]">
        <Text className="text-grey6 text-base" style={styles.bookingHeader}>
          Total Price
        </Text>
        <Text
          className="text-white text-base font-bold"
          style={styles.bookingHeader}
        >
          $20
        </Text>
      </View>

      <Pressable
        className="bg-brandColor1 flex-[1.5] flex-row justify-between items-center p-4 rounded-2xl"
        onPress={handleNavigation}
      >
        <Text className="text-lg text-white" style={styles.bookingHeader}>
          Book now
        </Text>
        <Feather name="arrow-right" size={24} color="white" />
      </Pressable>
    </View>
  );
};

export default AppointmentBooking;

const styles = StyleSheet.create({
  bookingHeader: {
    fontFamily: "space-grotesk-bold",
  },
});
