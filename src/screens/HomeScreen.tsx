import { SafeAreaView, ScrollView } from "react-native";
import BookNowContainer from "../components/BookNowContainer/BookNowContainer";
import CategoryTabs from "../components/CategoryTabs/CategoryTabs";
import Divider from "../components/Divider/Divider";
import IntroHero from "../components/HeroSection/IntroHero";
import SearchBarWithIcons from "../components/SearchBarWithIcons/SearchBarWithIcons";
import WelcomeBannerWithNotification from "../components/WelcomeBannerWithNotification/WelcomeBannerWithNotification";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <SearchBarWithIcons />
        <Divider style="mt-4" />
        <IntroHero />
        <WelcomeBannerWithNotification />
        <CategoryTabs />
        <BookNowContainer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
