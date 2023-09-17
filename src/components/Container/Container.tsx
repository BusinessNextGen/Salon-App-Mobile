import { StyleProp, View, ViewStyle } from "react-native";

type ContainerProps = {
  style?: StyleProp<ViewStyle>;
  classes?: string;
  children?: React.ReactNode;
};

const Container = ({ style, classes, children }: ContainerProps) => {
  return (
    <View className={`px-4 ${classes}`} style={style}>
      {children}
    </View>
  );
};

export default Container;
