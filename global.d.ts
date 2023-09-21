import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Main: undefined;
  Services: undefined;
};

export type TabStackParamList = {
  Home: undefined;
  Favorites: undefined;
  Appointment: undefined;
};

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Main"
>;

export type ServiceDetailsType = {
  title: string;
  description: string;
  price: number;
  duration: string;
};
