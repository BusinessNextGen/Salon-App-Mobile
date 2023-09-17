import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { colorMap } from "../../constants/colors";
import Container from "../Container/Container";

const SearchBarWithIcons = () => {
  const [searchText, setSearchText] = useState("Riverside Park, Cityville...");

  return (
    <Container style={styles.container}>
      <View className="flex flex-row justify-between items-center">
        <View>
          <Text className="text-grey6 capitalize text-sm" style={styles.header}>
            branch location
          </Text>

          <TextInput
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
            className="text-white text-base"
          />
        </View>
        <View className="flex flex-row gap-2">
          <Pressable className="bg-grey3 p-2 rounded-xl">
            <Ionicons name="search" size={24} color={colorMap.white} />
          </Pressable>
          <Pressable className="bg-yellow-400 p-2 rounded-xl">
            <FontAwesome name="user-o" size={24} color={colorMap.grey1} />
          </Pressable>
        </View>
      </View>
    </Container>
  );
};

export default SearchBarWithIcons;

const styles = StyleSheet.create({
  header: {
    fontFamily: "urbanist-semibold",
  },
  container: {
    paddingTop: Platform.select({ ios: 8, android: 35 }),
  },
});
