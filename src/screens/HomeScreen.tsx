import { SafeAreaView, ScrollView, View } from "react-native";
import BookNowContainer from "../components/BookNowContainer/BookNowContainer";
import CategoryTabs from "../components/CategoryTabs/CategoryTabs";
import Container from "../components/Container/Container";
import Divider from "../components/Divider/Divider";
import IntroHero from "../components/HeroSection/IntroHero";
import SearchBarWithIcons from "../components/SearchBarWithIcons/SearchBarWithIcons";
import ServiceTabViewContent from "../components/TabViewContent/ServiceTabViewContent";
import WelcomeBannerWithNotification from "../components/WelcomeBannerWithNotification/WelcomeBannerWithNotification";
import { INITIAL_SERVICE_TAB_ROUTES } from "../constants/global";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <SearchBarWithIcons />
        <Divider style="mt-4" />
        <IntroHero />
        <WelcomeBannerWithNotification />
        <Container classes="mt-4">
          <View className=" h-56">
            <CategoryTabs
              defaultRoutes={INITIAL_SERVICE_TAB_ROUTES}
              renderScene={ServiceTabViewContent}
            />
          </View>
        </Container>
        <BookNowContainer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
