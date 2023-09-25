import { gt, isEqual, isUndefined } from "lodash";

export const getIndexBasedOnValue = <
  T extends { title?: string; key?: string }
>({
  value,
  mapperArray,
}: {
  value?: string;
  mapperArray: T[];
}) => {
  if (isUndefined(value)) return 0;

  const valueIndex = mapperArray.findIndex((item) => isEqual(item.key, value));

  if (gt(valueIndex, -1)) return valueIndex;
  return 0;
};
