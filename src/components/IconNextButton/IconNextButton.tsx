import { Feather } from "@expo/vector-icons";
import { StyledProps } from "nativewind";
import React from "react";
import { Pressable, View, ViewStyle } from "react-native";
import { colorMap } from "../../constants/colors";

type IconNextButtonProps = {
  style?: StyledProps<ViewStyle>;
  classes?: string;
  color?: string;
  size?: number;
};

const IconNextButton = ({
  style,
  classes,
  color = colorMap.white,
  size = 18,
}: IconNextButtonProps) => {
  return (
    <Pressable>
      <View
        className={` flex justify-center items-center h-6 w-6 rounded-full bg-[#717171] ${classes}`}
        style={style}
      >
        <Feather name="arrow-up-right" size={size} color={color} />
      </View>
    </Pressable>
  );
};
export default IconNextButton;
