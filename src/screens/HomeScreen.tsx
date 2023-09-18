import { SafeAreaView, StyleSheet } from "react-native";
import CategoryTabs from "../components/CategoryTabs/CategoryTabs";
import Divider from "../components/Divider/Divider";
import IntroHero from "../components/HeroSection/IntroHero";
import SearchBarWithIcons from "../components/SearchBarWithIcons/SearchBarWithIcons";
import WelcomeBannerWithNotification from "../components/WelcomeBannerWithNotification/WelcomeBannerWithNotification";
import BookNowContainer from "../components/BookNowContainer/BookNowContainer";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <SearchBarWithIcons />
      <Divider style="mt-4" />
      <IntroHero />
      <WelcomeBannerWithNotification />
      <CategoryTabs />
      <BookNowContainer />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
    fontFamily: "space-grotesk-medium",
  },
  subText: {
    fontFamily: "urbanist-bold",
  },
});
