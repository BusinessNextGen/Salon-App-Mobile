import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colorMap } from "../../constants/colors"
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../global";


type BookButtonProps = {
  classes?: string;
  title: string;
  icon?: React.ReactNode;
};

const BookingButton = ({ classes, title, icon }: BookButtonProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, "Main">>();

  const handleNavigation = () => {
    navigation.navigate("Appointment");
  };
  return (
    <View className="rounded-2xl overflow-hidden">
      <Pressable
        className={`bg-brandColor1 flex-row justify-between items-center p-4 rounded-2xl overflow-hidden ${classes}`}
        android_ripple={{
          color: colorMap.brandColor2,
        }}
        onPress={handleNavigation}
      >
        <Text className="text-lg text-white" style={styles.bookingHeader}>
          {title}
        </Text>
        {icon ? icon : null}
      </Pressable>
    </View>
  );
};

export default BookingButton;

const styles = StyleSheet.create({
  bookingHeader: {
    fontFamily: "space-grotesk-bold",
  },
});
