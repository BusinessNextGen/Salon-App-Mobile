import { useState } from "react";

import { FlatList, ScrollView, Text, View } from "react-native";
import { slotList } from "../constants/slots";
import CalendarStrip from "react-native-calendar-strip";
import SelectDropdown from "react-native-select-dropdown";
import { Ionicons } from "@expo/vector-icons";
import moment from "moment";

const categories = ["Hair", "Skin", "Nail"];
const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const onDateChange = (date: any) => {
    console.log("date is ", date);
    setSelectedDate(date);
  };
  const startDate = selectedDate ? selectedDate.toString() : "";

  const renderSlots = ({ item, index }) => {
    return (
      <View className="bg-white h-12 w-32 rounded-lg ml-10 mt-4" key={index}>
        <Text className="text-center mt-3 font-bold">{item.slot}</Text>
      </View>
    );
  };
  return (
    <ScrollView>
    <View className="flex flex-1 bg-grey1">
      <View className="mt-14 mb-4 justify-center ml-10">
      <SelectDropdown
        data={categories}
        defaultButtonText={'Select Category'}
        renderDropdownIcon={()=>{return <Ionicons name={'chevron-down'}/>}}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
        dropdownStyle={{ backgroundColor: "#c2d0d1", borderRadius:8 }}
        buttonStyle={{
          backgroundColor: "#99a0a1",
          borderRadius: 8,
          width: 300,
        }}
      />
      </View>
      <View className="mt-14 mb-8 justify-center ml-10">
      <SelectDropdown
        data={categories}
        defaultButtonText={'Select Category'}
        renderDropdownIcon={()=>{return <Ionicons name={'chevron-down'}/>}}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
        dropdownStyle={{ backgroundColor: "#c2d0d1", borderRadius:8 }}
        buttonStyle={{
          backgroundColor: "#99a0a1",
          borderRadius: 8,
          width: 300,
        }}
      />
      </View>
      <CalendarStrip
        scrollable
        style={{ height: 100 }}
        calendarColor={"#1B1E23"}
        highlightDateNumberStyle={{ color: "#000000" }}
        calendarHeaderStyle={{ color: "white", marginTop: 10 }}
        dateNumberStyle={{ color: "white" }}
        dateNameStyle={{ color: "white" }}
        iconContainer={{ flex: 0.1 }}
        selectedDate={moment()}
        onDateSelected={(date) => setSelectedDate(date)}
        customDatesStyles={[
          {
            startDate: moment(),
            dateContainerStyle: { backgroundColor: "green" },
          },
        ]}
        iconLeft={{
          uri: "https://cdn-icons-png.flaticon.com/512/271/271220.png",
        }}
        iconRight={{
          uri: "https://cdn-icons-png.flaticon.com/512/271/271228.png",
        }}
      />
      {<View className="rounded-lg h-full">
        <Text className="text-white text-center m-6 font-bold text-lg">Available slots</Text>
        <View >
            <FlatList data={slotList} renderItem={renderSlots} numColumns={2}/>
    </View>
        </View>}
    </View>
    </ScrollView>
  );
};
export default Appointment;
