import { Ionicons } from "@expo/vector-icons";
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, Text } from "react-native";
import { colorMap } from "../constants/colors";
import Appointment from "../screens/Appointment";
import HomeScreen from "../screens/HomeScreen";
import Services from "../screens/Services";

type TabStackParamList = {
  Home: undefined;
  Services: undefined;
  Appointment: undefined;
};

type TabBarLabelProps = BottomTabNavigationOptions["tabBarLabel"];
type TabBarIconProps = BottomTabNavigationOptions["tabBarIcon"];
type IconTypes = keyof typeof Ionicons.glyphMap;

const Tab = createBottomTabNavigator<TabStackParamList>();

const TabNavigator = () => {
  const tabBarIcon =
    (iconType: IconTypes, size = 20): TabBarIconProps =>
    ({ focused }) => {
      const iconColor = focused ? colorMap.brandColor1 : colorMap.grey6;
      return <Ionicons name={iconType} color={iconColor} size={size} />;
    };

  const tabBarLabel =
    (title: string): TabBarLabelProps =>
    ({ focused }) => {
      const className = focused ? "text-white" : "text-grey6";
      return (
        <Text className={className} style={styles.tabLabel}>
          {title}
        </Text>
      );
    };

  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colorMap.grey1,
        },
        tabBarStyle: {
          backgroundColor: colorMap.grey3,
          borderTopWidth: 0,
          height: 60,
          paddingBottom: 5,
          paddingTop: 5,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: tabBarIcon("home"),
          tabBarLabel: tabBarLabel("Home"),
          headerShown: false,
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
      <Tab.Screen
        name="Appointment"
        component={Appointment}
        options={{
          tabBarLabel: tabBarLabel("Appointment"),
          tabBarIcon: tabBarIcon("calendar-outline"),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  tabLabel: {
    fontFamily: "space-grotesk-medium",
  },
});
