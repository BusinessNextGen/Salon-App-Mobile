import { ImageSourcePropType } from "react-native";
import ServiceCard from "../ServiceCard/ServiceCard";

type ServicesList = Record<
  string,
  { serviceType: string; price: number; url: ImageSourcePropType }
>;

const servicesList: ServicesList = {
  hair: {
    serviceType: "Coloring",
    price: 20,
    url: require("../../../assets/images/hair-color.webp"),
  },
  skin: {
    serviceType: "Facials",
    price: 10,
    url: require("../../../assets/images/hero-face.webp"),
  },
  nails: {
    serviceType: "Nail Art",
    price: 15,
    url: require("../../../assets/images/hero-nail.webp"),
  },
};

const ServiceTabViewContent = ({
  route,
}: {
  route: { key: string; title: string };
}) => {
  return <ServiceCard {...servicesList?.[route.key]} route={route} />;
};
export default ServiceTabViewContent;
