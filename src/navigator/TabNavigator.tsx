import { Ionicons } from "@expo/vector-icons";
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import React from "react";
import { Text } from "react-native";
import { COLORS } from "../constants/colors";
import HomeScreen from "../screens/HomeScreen";
import Services from "../screens/Services";

type TabStackParamList = {
  Home: undefined;
  Services: undefined;
};

type TabBarLabelProps = BottomTabNavigationOptions["tabBarLabel"];
type TabBarIconProps = BottomTabNavigationOptions["tabBarIcon"];
type IconTypes = keyof typeof Ionicons.glyphMap;

const Tab = createBottomTabNavigator<TabStackParamList>();

const TabNavigator = () => {
  const tabBarIcon =
    (iconType: IconTypes): TabBarIconProps =>
    ({ focused, size }) => {
      const iconColor = focused ? COLORS.COLOR_PRIMARY : COLORS.COLOR_SECONDARY;
      return <Ionicons name={iconType} color={iconColor} size={size} />;
    };

  const tabBarLabel =
    (title: string): TabBarLabelProps =>
    ({ focused }) => {
      const className = focused ? "text-primary-color" : "text-secondary-color";
      return <Text className={className}>{title}</Text>;
    };

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: tabBarIcon("home"),
          tabBarLabel: tabBarLabel("Home"),
        }}
      />
      <Tab.Screen
        name="Services"
        component={Services}
        options={{
          tabBarLabel: tabBarLabel("Services"),
          tabBarIcon: tabBarIcon("menu"),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
