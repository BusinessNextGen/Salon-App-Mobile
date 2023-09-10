import { Text, View, StyleSheet } from "react-native";
import Carousel from "../components/Carousel";
const HomeScreen = () => {
  return (
    <View>
      <Carousel/>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        minHeight:'80%',
        backgroundColor:'#FA8072',
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
