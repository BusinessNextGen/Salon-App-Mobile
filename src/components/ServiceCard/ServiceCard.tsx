import { useNavigation } from "@react-navigation/native";
import { type NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import {
  ImageBackground,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { type RootStackParamList } from "../../../global";
import IconNextButton from "../IconNextButton/IconNextButton";

type ServiceCardProps = {
  serviceType: string;
  price: number;
  url: ImageSourcePropType;
};

const ServiceCard = ({ serviceType, price, url }: ServiceCardProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, "Main">>();

  const handleNavigation = () => {
    navigation.navigate("Services");
  };

  return (
    <View className="rounded-xl w-full mt-4">
      <Pressable onPress={handleNavigation}>
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
      </Pressable>
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
