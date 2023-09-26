import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../../global";
import BookingButton from "../components/Buttons/BookingButton";
import CategoryTabs from "../components/CategoryTabs/CategoryTabs";
import Container from "../components/Container/Container";
import ServiceTabDetailViewContent from "../components/TabViewContent/ServiceTabDetailViewContent";
import { INITIAL_SERVICE_TAB_ROUTES } from "../constants/global";

type ServicesScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Services"
>;

const Services = ({ route }: ServicesScreenProps) => {
  const params = route.params;

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
          <CategoryTabs
            defaultRoutes={INITIAL_SERVICE_TAB_ROUTES}
            defaultValue={params?.serviceType}
            renderScene={ServiceTabDetailViewContent}
          />
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
