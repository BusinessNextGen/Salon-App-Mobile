import { Text, View, StyleSheet } from "react-native";
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.homeText}>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        minHeight:'80%',
        backgroundColor:'gray',
        justifyContent:'center',
    },
    homeText:{
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold',
        color:'white'
    }
})
export default HomeScreen;
