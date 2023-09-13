import { useState } from "react";
import { FlatList, Text, View } from "react-native"
import CalendarPicker from 'react-native-calendar-picker';
import { slotList } from "../constants/slots";

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState('')
    const onDateChange = (date:any) =>{
        console.log("date is ", date)
     setSelectedDate(date)
    }
    const startDate = selectedDate ? selectedDate.toString() : '';

    const renderSlots = ({item,index}) => {
      return (
        <View className="bg-white h-12 w-32 rounded-lg ml-10 mt-4" key={index}>
            <Text className="text-center mt-3 font-bold">{item.slot}</Text>
        </View>
      )
    }
    return(
        <View className="bg-white">
         <CalendarPicker
          onDateChange={onDateChange}
        />
        <View className="rounded-lg bg-blue-950 h-full">
        <Text className="text-white text-center m-6 font-bold text-lg">Available slots</Text>
        <View >
            <FlatList data={slotList} renderItem={renderSlots} numColumns={2}/>
        </View>
        </View>
        </View>
    )
}
export default Appointment;