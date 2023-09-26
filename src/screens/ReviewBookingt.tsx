import { StyleSheet, Text, View } from "react-native";
import Divider from "../components/Divider/Divider";

const ReviewBooking = () => {
    return(
        <View>
         <Text className="text-white font-bold text-2xl text-left ml-4">Review and confirm booking</Text>
         <Text className="text-grey6 text-left m-4">Before finalizing your booking, please review the details below:</Text>
         <Divider style="mt-4" />
         <Text className="text-white m-4 text-base font-bold">Service Details</Text>
         <View className="bg-grey3 w-80 m-4 rounded-xl flex-row justify-between items-center p-5"></View>
        </View>
    )
}
export default ReviewBooking;