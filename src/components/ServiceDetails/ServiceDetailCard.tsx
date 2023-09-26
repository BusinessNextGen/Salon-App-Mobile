import { ImageBackground, Pressable, StyleSheet, Text } from "react-native";
import { useAppDispatch } from "../../hooks/redux.hook";
import { addService } from "../../redux/slices/serviceSlice";

type ServiceDetailCardProps = {
  duration: string;
  description: string;
  price: number;
  title: string;
  isItemSelected: boolean;
};

const ServiceDetailCard = ({
  description,
  duration,
  price,
  title,
  isItemSelected,
}: ServiceDetailCardProps) => {
  const dispatch = useAppDispatch();

  const handlePress = () => {
    dispatch(addService({ description, duration, title, price }));
  };

  const borderStyle = isItemSelected ? "border-2 border-brandColor2" : "";

  return (
    <Pressable
      className={`mb-4 rounded-lg bg-grey2 p-4 ${borderStyle}`}
      onPress={handlePress}
    >
      <ImageBackground
        source={require("../../../assets/images/hair-color.webp")}
        resizeMode="cover"
        className="h-32 w-full overflow-hidden rounded-lg  items-start justify-center"
      />
      <Text
        className="text-xl capitalize text-white mt-2"
        style={styles.header}
      >
        {title}
      </Text>
      <Text className="text-base text-grey6 mt-2" style={styles.subText}>
        {description}
      </Text>
      <Text className="text-base text-grey5 mt-2" style={styles.subText}>
        Starting at ${price}
      </Text>
      <Text className="text-base text-grey5" style={styles.subText}>
        Approximately {duration}
      </Text>
    </Pressable>
  );
};

export default ServiceDetailCard;

const styles = StyleSheet.create({
  header: {
    fontFamily: "space-grotesk-bold",
  },
  subText: {
    fontFamily: "urbanist-semibold",
  },
});
