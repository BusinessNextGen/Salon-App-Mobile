import { useState } from "react";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { SceneMap, TabBar, TabBarProps, TabView } from "react-native-tab-view";
import Container from "../../components/Container/Container";
import { colorMap } from "../../constants/colors";
import ServiceCard from "../ServiceCard/ServiceCard";

const renderScene = SceneMap({
  hair: ServiceCard,
  skin: ServiceCard,
  nails: ServiceCard,
});
const renderTabBar = (props: TabBarProps<{ key: string; title: string }>) => (
  <TabBar
    {...props}
    indicatorStyle={{
      height: 0,
    }}
    indicatorContainerStyle={{
      height: 0,
    }}
    style={{
      backgroundColor: colorMap.grey2,
      borderRadius: 25,
    }}
    renderLabel={({ route, focused }) => {
      return (
        <View
          className={`rounded-2xl w-20 h-10 flex items-center justify-center`}
          style={{
            backgroundColor: focused ? colorMap.brandColor2 : colorMap.grey2,
          }}
        >
          <Text
            className={`text-lg capitalize ${
              focused ? "text-white" : "text-grey6"
            }`}
            style={styles.header}
          >
            {route.title}
          </Text>
        </View>
      );
    }}
  />
);

const CategoryTabs = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "hair", title: "hair" },
    { key: "skin", title: "skin" },
    { key: "nails", title: "nails" },
  ]);

  const handleIndexChange = (index: number) => {
    setIndex(index);
  };

  return (
    <Container classes="mt-4">
      <View className="h-52">
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={handleIndexChange}
          initialLayout={{ width: layout.width }}
          renderTabBar={renderTabBar}
        />
      </View>
    </Container>
  );
};

export default CategoryTabs;

const styles = StyleSheet.create({
  header: {
    fontFamily: "space-grotesk-bold",
  },
  subText: {
    fontFamily: "urbanist-bold",
  },
});
