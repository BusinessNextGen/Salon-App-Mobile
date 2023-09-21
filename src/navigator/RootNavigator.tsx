import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { type RootStackParamList } from "../../global";
import { colorMap } from "../constants/colors";
import Services from "../screens/Services";
import TabNavigator from "./TabNavigator";

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colorMap.grey1,
        },
        headerTintColor: colorMap.brandColor1,
        headerBackButtonMenuEnabled: false,
        headerTitle: "",
      }}
    >
      <RootStack.Group>
        <RootStack.Screen
          component={TabNavigator}
          name="Main"
          options={{ headerShown: false }}
        />
      </RootStack.Group>
      <RootStack.Screen name="Services" component={Services} />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
