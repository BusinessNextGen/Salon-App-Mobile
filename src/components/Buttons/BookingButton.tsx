import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colorMap } from "../../constants/colors";

type BookButtonProps = {
  classes?: string;
  title: string;
  icon?: React.ReactNode;
};

const BookingButton = ({ classes, title, icon }: BookButtonProps) => {
  return (
    <View className="rounded-2xl overflow-hidden">
      <Pressable
        className={`bg-brandColor1 flex-row justify-between items-center p-4 rounded-2xl overflow-hidden ${classes}`}
        android_ripple={{
          color: colorMap.brandColor2,
        }}
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
