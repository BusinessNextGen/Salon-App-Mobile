import { StyleSheet, Text, View } from "react-native";

const AppointmentSummary = () => {
  return (
    <View>
      <Text className="text-white text-base mt-4" style={styles.header}>
        Service Details
      </Text>
      <View className="mt-4">
        <Text className="text-white" style={styles.header}>
          Category
        </Text>
        <View
          className="bg-grey3 mt-2 rounded-xl flex-row justify-between items-center p-5"
          style={styles.bookingDetail}
        ></View>
      </View>
      <View className="mt-4">
        <Text className="text-white" style={styles.header}>
          Service
        </Text>
        <View
          className="bg-grey3 w-80 mt-2 rounded-xl flex-row justify-between items-center p-5"
          style={styles.bookingDetail}
        ></View>
      </View>
      <View className="mt-4">
        <Text className="text-white" style={styles.header}>
          Slot
        </Text>
        <View
          className="bg-grey3 w-80 mt-2 rounded-xl flex-row justify-between items-center p-5"
          style={styles.bookingDetail}
        ></View>
      </View>
      <View className="mt-4">
        <Text className="text-white " style={styles.header}>
          Price
        </Text>
        <View
          className="bg-grey3 w-80 mt-2 rounded-xl flex-row justify-between items-center p-5"
          style={styles.bookingDetail}
        ></View>
      </View>
    </View>
  );
};
export default AppointmentSummary;

const styles = StyleSheet.create({
  header: {
    fontFamily: "space-grotesk-bold",
  },
  bookingDetail: {
    width: "95%",
  },
});
