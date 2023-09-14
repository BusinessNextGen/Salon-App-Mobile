import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import RootNavigator from "./src/navigator/RootNavigator";

function App() {
  const [fontsLoaded] = useFonts({
    "space-grotesk": require("./assets/fonts/SpaceGrotesk-Regular.ttf"),
    urbanist: require("./assets/fonts/Urbanist-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

export default App;
