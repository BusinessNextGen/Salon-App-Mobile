import { useState } from "react";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import {
  TabBar,
  TabBarProps,
  TabView,
  type SceneRendererProps,
} from "react-native-tab-view";
import { colorMap } from "../../constants/colors";
import { getIndexBasedOnValue } from "../../utils/HomeScreen.utils";

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

type CategoryTabProps = {
  renderScene: (
    props: SceneRendererProps & {
      route: {
        key: string;
        title: string;
      };
    }
  ) => React.ReactNode;
  defaultRoutes: { title: string; key: string }[];
  defaultValue?: string;
};

const CategoryTabs = ({
  renderScene,
  defaultRoutes,
  defaultValue,
}: CategoryTabProps) => {
  const layout = useWindowDimensions();

  const indexBasedOnDefaultValue = getIndexBasedOnValue({
    value: defaultValue,
    mapperArray: defaultRoutes,
  });

  const [index, setIndex] = useState(indexBasedOnDefaultValue);
  const [routes] = useState(defaultRoutes);

  const handleIndexChange = (index: number) => {
    setIndex(index);
  };

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={handleIndexChange}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabBar}
    />
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
