import React from "react";
import { View } from "react-native";

type DividerProps = {
  style: string;
};
const Divider = ({ style }: DividerProps) => {
  return <View className={`border-b-[2px] border-grey4 ${style}`}></View>;
};

export default Divider;
