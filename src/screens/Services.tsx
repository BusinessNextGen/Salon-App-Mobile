import { FlatList, StyleSheet, Text, View } from "react-native";
const Services = () => {
  const servicesList = [
    {
      id: 1,
      name: "Hair Spa",
    },
    {
      id: 2,
      name: "Hair cut",
    },
    {
      id: 3,
      name: "Facial",
    },
    {
      id: 4,
      name: "Massage",
    },
    {
      id: 5,
      name: "Detan",
    },
  ];
  const displayServices = ({ item, index }) => {
    return (
      <View style={styles.services} key={index}>
        <Text style={styles.serviceText}>{item.name}</Text>
      </View>
    );
  };
  return (
    <View>
      <FlatList data={servicesList} renderItem={displayServices} />
    </View>
  );
};

const styles = StyleSheet.create({
  services: {
    height: 50,
    backgroundColor: "red",
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  serviceText: {
    color: "white",
  },
});
export default Services;
