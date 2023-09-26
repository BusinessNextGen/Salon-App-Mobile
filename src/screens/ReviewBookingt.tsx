import { StyleSheet, Text, View } from "react-native";
import Divider from "../components/Divider/Divider";
import AppointmentSummary from "../components/AppointmentSummary/AppointmentSummary";
import { app_constants } from "../constants/global";

const ReviewBooking = () => {
  return (
    <View className="ml-6">
      <Text className="text-white text-2xl text-left" style={styles.header}>
        Review and Confirm Booking
      </Text>
      <Text className="text-grey6 text-left mt-4">
        Before finalizing your booking, please review the details below:
      </Text>
      <Divider style="mt-4" />
     <AppointmentSummary/>
     <View className="mt-6">
      <Text className="text-white" style={styles.header}>COVID-19 Safety Measures</Text>
      <Text className="text-grey6 mt-2">{app_constants.COVID_19_PRIMARY}</Text>
       <View>
        {app_constants.COVID_SAFETY_LIST.map((item,index)=>{
           return <Text className="text-grey6" key={index}>{`\u2022 ${item}`}</Text>
        })}
       </View>
     </View>
    </View>
  );
};

export default ReviewBooking;

const styles = StyleSheet.create({
  header: {
    fontFamily: "space-grotesk-bold",
  },
});
