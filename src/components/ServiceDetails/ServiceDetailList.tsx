import { isEqual, isUndefined } from "lodash";
import { FlatList, View } from "react-native";
import { ServiceDetailsType } from "../../../global";
import { useAppSelector } from "../../hooks/redux.hook";
import ServiceDetailCard from "./ServiceDetailCard";

type ServiceDetailListProps = {
  serviceData: ServiceDetailsType[];
};

const ServiceDetailList = ({ serviceData }: ServiceDetailListProps) => {
  const selectedServicesList = useAppSelector(
    (state) => state.services.selectedSevice
  );
  return (
    <View className="mt-4 mb-10">
      <FlatList
        data={serviceData}
        renderItem={({ item }) => {
          const isItemSelected = selectedServicesList.find((selectedItem) =>
            isEqual(selectedItem.title, item.title)
          );

          return (
            <ServiceDetailCard
              {...item}
              isItemSelected={!isUndefined(isItemSelected)}
            />
          );
        }}
        keyExtractor={(item) => item.title}
      />
    </View>
  );
};

export default ServiceDetailList;
