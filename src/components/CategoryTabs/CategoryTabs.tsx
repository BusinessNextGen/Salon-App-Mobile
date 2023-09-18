import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  ImageSourcePropType,
} from "react-native";
import { TabBar, TabBarProps, TabView } from "react-native-tab-view";
import Container from "../../components/Container/Container";
import { colorMap } from "../../constants/colors";
import ServiceCard from "../ServiceCard/ServiceCard";

type ServicesList = Record<
  string,
  { serviceType: string; price: number; url: ImageSourcePropType }
>;

const servicesList: ServicesList = {
  hair: {
    serviceType: "Coloring",
    price: 20,
    url: require("../../../assets/images/hair-color.webp"),
  },
  skin: {
    serviceType: "Facials",
    price: 10,
    url: require("../../../assets/images/hero-face.webp"),
  },
  nails: {
    serviceType: "Nail Art",
    price: 15,
    url: require("../../../assets/images/hero-nail.webp"),
  },
};

const renderScene = ({ route }: { route: { key: string; title: string } }) => {
  return <ServiceCard {...servicesList?.[route.key]} />;
};

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
      <View className="h-56">
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
