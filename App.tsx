import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Services from './screens/Services';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{
      tabBarLabel: 'Home',
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="home" color={color} size={size} />
      ),
    }}/>
      <Tab.Screen name="Services" component={Services} options={{
      tabBarLabel: 'Services',
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="menu" color={color} size={size} />
      ),
    }}/>
    </Tab.Navigator>
  );
}
function App() {
 
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name=" " component={MyTabs}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Services" component={Services}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
