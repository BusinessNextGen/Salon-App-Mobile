import React from "react";
import {
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import IconNextButton from "../IconNextButton/IconNextButton";

type ServiceCardProps = {
  serviceType: string;
  price: number;
  url: ImageSourcePropType;
};

const ServiceCard = ({ serviceType, price, url }: ServiceCardProps) => {
  return (
    <View className="rounded-xl w-full mt-4">
      <ImageBackground
        source={url}
        className="h-full w-full rounded-xl overflow-hidden flex justify-end items-start"
        resizeMode="cover"
      >
        <View className="p-4 relative z-20">
          <Text
            className="text-white text-2xl capitalize "
            style={styles.header}
          >
            {serviceType}
          </Text>
          <Text className="text-white z-10" style={styles.header}>
            starting at ${price}
          </Text>
        </View>
      </ImageBackground>
      <View className="absolute right-0 bottom-6 mr-4 ">
        <IconNextButton classes="bg-opacity-25" />
      </View>
    </View>
  );
};

export default ServiceCard;

const styles = StyleSheet.create({
  header: {
    fontFamily: "space-grotesk-medium",
  },
  subText: {
    fontFamily: "urbanist-bold",
  },
});
