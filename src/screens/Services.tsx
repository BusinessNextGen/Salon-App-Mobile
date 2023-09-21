import { StyleSheet, Text, View } from "react-native";
import BookingButton from "../Buttons/BookingButton";
import CategoryTabs from "../components/CategoryTabs/CategoryTabs";
import Container from "../components/Container/Container";
import ServiceTabDetailViewContent from "../components/TabViewContent/ServiceTabDetailViewContent";

const Services = () => {
  return (
    <View className="flex-1">
      <Container classes="mt-2 flex-1">
        <View className="flex-row justify-between items-center">
          <View className="">
            <Text className="text-2xl text-white w-" style={styles.header}>
              Choose Service
            </Text>
          </View>
          <View>
            <BookingButton
              title="Done"
              classes="p-2 w-28 flex justify-center items-center"
            />
          </View>
        </View>
        <View className="flex-1 mt-4">
          <CategoryTabs renderScene={ServiceTabDetailViewContent} />
        </View>
      </Container>
    </View>
  );
};

export default Services;

const styles = StyleSheet.create({
  header: {
    fontFamily: "space-grotesk-bold",
  },
  subText: {
    fontFamily: "urbanist-semibold",
  },
});
