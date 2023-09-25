import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { Provider } from "react-redux";
import { colorMap } from "./src/constants/colors";
import RootNavigator from "./src/navigator/RootNavigator";
import { store } from "./src/redux/store";

const myTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colorMap.grey1,
    border: colorMap.grey1,
  },
};

function App() {
  const [fontsLoaded] = useFonts({
    "space-grotesk-regular": require("./assets/fonts/SpaceGrotesk-Regular.ttf"),
    "space-grotesk-medium": require("./assets/fonts/SpaceGrotesk-Medium.ttf"),
    "space-grotesk-semibold": require("./assets/fonts/SpaceGrotesk-SemiBold.ttf"),
    "space-grotesk-bold": require("./assets/fonts/SpaceGrotesk-Bold.ttf"),
    "urbanist-medium": require("./assets/fonts/Urbanist-Medium.ttf"),
    "urbanist-semibold": require("./assets/fonts/Urbanist-SemiBold.ttf"),
    "urbanist-bold": require("./assets/fonts/Urbanist-Bold.ttf"),
    "urbanist-regular": require("./assets/fonts/Urbanist-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer theme={myTheme}>
        <View className="flex-1">
          <StatusBar style="light" />
          <RootNavigator />
        </View>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
