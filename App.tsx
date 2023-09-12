import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigator/RootNavigator";

function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

export default App;
