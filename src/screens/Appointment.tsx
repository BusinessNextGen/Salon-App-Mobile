import { useState } from "react";

import { Ionicons } from "@expo/vector-icons";
import moment from "moment";
import { FlatList, ScrollView, Text, View } from "react-native";
import CalendarStrip from "react-native-calendar-strip";
import SelectDropdown from "react-native-select-dropdown";
import AppointmentBooking from "../components/AppointmentBooking/AppointmentBooking";
import Container from "../components/Container/Container";
import { colorMap } from "../constants/colors";
import { slotList } from "../constants/slots";

const categories = ["Hair", "Skin", "Nail"];
const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const renderSlots = ({ item, index }) => {
    return (
      <View
        className="h-12 w-32 rounded-lg ml-1 mt-4"
        key={index}
        style={{ backgroundColor: colorMap.grey4 }}
      >
        <Text className="text-center mt-3 font-bold text-white">
          {item.slot}
        </Text>
      </View>
    );
  };
  return (
    <ScrollView>
      <Container classes="mt-4">
        <View className="flex flex-1 bg-grey1">
          <View className="mt-8 mb-4 justify-center min-w-full">
            <SelectDropdown
              data={categories}
              defaultButtonText={"Select Category"}
              renderDropdownIcon={() => {
                return <Ionicons name={"chevron-down"} />;
              }}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              dropdownStyle={{ backgroundColor: "#c2d0d1", borderRadius: 8 }}
              buttonTextStyle={{ color: "white" }}
              buttonStyle={{
                backgroundColor: colorMap.grey4,
                borderRadius: 8,
                width: 355,
              }}
            />
          </View>
          <View className="mt-8 mb-8 justify-center">
            <SelectDropdown
              data={categories}
              defaultButtonText={"Select Service"}
              renderDropdownIcon={() => {
                return <Ionicons name={"chevron-down"} />;
              }}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              dropdownStyle={{ backgroundColor: "#c2d0d1", borderRadius: 8 }}
              buttonTextStyle={{ color: "white" }}
              buttonStyle={{
                backgroundColor: colorMap.grey4,
                borderRadius: 8,
                width: 355,
              }}
            />
          </View>
          <CalendarStrip
            scrollable
            style={{ height: 100 }}
            calendarColor={"#1B1E23"}
            daySelectionAnimation={{
              type: "background",
              highlightColor: "green",
              duration: 200,
            }}
            highlightDateNumberStyle={{ color: "#000000" }}
            calendarHeaderStyle={{
              color: "white",
              marginTop: 10,
              fontSize: 16,
            }}
            dateNumberStyle={{ color: "white" }}
            dateNameStyle={{ color: "white" }}
            iconContainer={{ flex: 0.1 }}
            selectedDate={moment()}
            onDateSelected={(date) => setSelectedDate(date)}
            iconLeft={{
              uri: "https://cdn-icons-png.flaticon.com/512/271/271220.png",
            }}
            iconRight={{
              uri: "https://cdn-icons-png.flaticon.com/512/271/271228.png",
            }}
          />
          {
            <View className="rounded-lg h-full">
              <Text className="text-white text-center m-6 font-bold text-lg">
                Available slots
              </Text>
              <View className="mb-20">
                <FlatList data={slotList} renderItem={renderSlots} horizontal />
              </View>
              <View className="mb-10">
                <AppointmentBooking />
              </View>
            </View>
          }
        </View>
      </Container>
    </ScrollView>
  );
};
export default Appointment;
