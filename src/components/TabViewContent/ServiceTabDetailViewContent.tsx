import { services } from "../../../db/services";
import ServiceDetailList from "../ServiceDetails/ServiceDetailList";

const ServiceTabDetailViewContent = ({
  route,
}: {
  route: { key: string; title: string };
}) => {
  return <ServiceDetailList serviceData={services?.[route.key]} />;
};
export default ServiceTabDetailViewContent;
