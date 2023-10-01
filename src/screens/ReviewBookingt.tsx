import { Feather } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import AppointmentSummary from "../components/AppointmentSummary/AppointmentSummary";
import Divider from "../components/Divider/Divider";
import { app_constants } from "../constants/global";

const ReviewBooking = () => {
  return (
    <View className="ml-6">
        <ScrollView>
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
     <View className="mt-4 mb-6">
      <Text className="text-white" style={styles.header}>Payment Information</Text>
      <Text className="text-grey6 mt-2">{app_constants.PAYMENT_INFO_PRIMARY}</Text>
      <Text className="text-grey6">{app_constants.PRIMARY_INF0_SECONDARY}</Text>
     </View>
     <Pressable
        className="bg-brandColor1 flex-[1.5] flex-row justify-between items-center p-4 rounded-2xl"
      >
        <Text className="text-lg text-white" style={styles.header}>
          Confirm Appointment
        </Text>
        <Feather name="arrow-right" size={24} color="white" />
      </Pressable>
      <Pressable
        className="bg-grey3 flex-[1.5] flex-row justify-between items-center p-4 rounded-2xl mt-4 mb-4"
      >
        <Text className="text-lg text-white" style={styles.header}>
          Edit Appointment
        </Text>
        <Feather name="arrow-right" size={24} color="white" />
      </Pressable>
     </ScrollView>
    </View>
  );
};

export default ReviewBooking;

const styles = StyleSheet.create({
  header: {
    fontFamily: "space-grotesk-bold",
  },
  
});
