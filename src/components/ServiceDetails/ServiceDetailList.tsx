import { FlatList, View } from "react-native";
import { ServiceDetailsType } from "../../../global";
import ServiceDetailCard from "./ServiceDetailCard";

type ServiceDetailListProps = {
  serviceData: ServiceDetailsType[];
};

const ServiceDetailList = ({ serviceData }: ServiceDetailListProps) => {
  return (
    <View className="mt-4 mb-10">
      <FlatList
        data={serviceData}
        renderItem={({ item }) => <ServiceDetailCard {...item} />}
        keyExtractor={(item) => item.title}
      />
    </View>
  );
};

export default ServiceDetailList;
