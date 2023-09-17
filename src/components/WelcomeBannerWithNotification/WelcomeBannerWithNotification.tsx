import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import Container from "../../components/Container/Container";
import { colorMap } from "../../constants/colors";

const WelcomeBannerWithNotification = () => {
  return (
    <Container classes="mt-4 flex flex-row justify-between items-center">
      <View className="flex flex-col gap-y-1 jus">
        <View className="flex flex-row items-center gap-2">
          <Text className="text-white text-lg" style={styles.welcomeText}>
            Welcome to
          </Text>
          <MaterialCommunityIcons
            name="star-four-points"
            size={18}
            color={colorMap.brandColor1}
          />
        </View>
        <Text className="text-3xl text-white" style={styles.header}>
          Charm Zone
        </Text>
        <Text className="max-w-[250px] text-grey6">
          Creating a vibrant and inclusive space where individually shines
        </Text>
      </View>
      <View className="flex items-center justify-center bg-brandColor3 h-16 w-12 rounded-full">
        <Ionicons
          name="ios-notifications-outline"
          size={24}
          color={colorMap.white}
          className="font-space-grotesk-bold"
        />
      </View>
    </Container>
  );
};

export default WelcomeBannerWithNotification;

const styles = StyleSheet.create({
  welcomeText: {
    fontFamily: "space-grotesk-medium",
  },
  header: {
    fontFamily: "space-grotesk-bold",
  },
});
