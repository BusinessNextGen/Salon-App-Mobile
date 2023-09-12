import { useRef, useState } from "react";
import { Dimensions, FlatList, Image, StyleSheet, View } from "react-native";

const Carousel = () => {
  const flatListRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  const screenWidth = Dimensions.get("window").width;

  const imageData = [
    {
      id: 1,
      image: require("../../assets/hair.jpeg"),
    },
    {
      id: 2,
      image: require("../../assets/service-salon.jpeg"),
    },
    {
      id: 3,
      image: require("../../assets/download.jpeg"),
    },
  ];

  //   useEffect(()=>{
  //     const interval = setInterval(()=>{
  //          if(activeIndex===imageData.length -1){
  //              flatListRef?.current.scrollToIndex({
  //                 index: 0,
  //                 animation: true
  //              })
  //          }else{
  //              flatListRef?.current.scrollToIndex({
  //                  index: activeIndex+1,
  //                  animation: true
  //               })
  //          }
  //      },2000)

  //      return ()=> clearInterval(interval)
  //    })
  //handle active scroll
  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;

    const index = scrollPosition / screenWidth;
    setActiveIndex(index);
  };
  const getItemLayout = (data, index) => ({
    length: screenWidth,
    offset: screenWidth * index,
    index: index,
  });
  //display images
  const renderImages = ({ item, index }) => {
    return (
      <View>
        <Image
          source={item.image}
          style={{ height: 200, width: screenWidth }}
        />
      </View>
    );
  };

  //display the dot indicators
  const renderDotIndicators = () => {
    return imageData?.map((item, index) => {
      return (
        <View
          key={index}
          style={activeIndex === index ? styles.activeDot : styles.dotIndicator}
        ></View>
      );
    });
  };

  return (
    <View>
      <FlatList
        data={imageData}
        renderItem={renderImages}
        getItemLayout={getItemLayout}
        horizontal
        pagingEnabled={true}
        onScroll={handleScroll}
      />
      <View style={styles.dotContainer}>{renderDotIndicators()}</View>
    </View>
  );
};
const styles = StyleSheet.create({
  dotIndicator: {
    backgroundColor: "gray",
    height: 10,
    width: 10,
    borderRadius: 5,
    marginHorizontal: 6,
  },
  dotContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
  },
  activeDot: {
    backgroundColor: "black",
    height: 10,
    width: 10,
    borderRadius: 5,
    marginHorizontal: 6,
  },
});
export default Carousel;
