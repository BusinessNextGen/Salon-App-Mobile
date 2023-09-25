import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { isEqual } from "lodash";

type ServiceDetailsType = {
  title: string;
  description: string;
  price: number;
  duration: string;
};

type ServiceSlice = {
  selectedSevice: ServiceDetailsType[];
};
const initialState: ServiceSlice = {
  selectedSevice: [],
};

export const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    addService: (state, action: PayloadAction<ServiceDetailsType>) => {
      const itemIndex = state.selectedSevice.findIndex((item) =>
        isEqual(item.title, action.payload.title)
      );
      if (isEqual(itemIndex, -1)) {
        state.selectedSevice = [...state.selectedSevice, action.payload];
      } else {
        state.selectedSevice = [
          ...state.selectedSevice.slice(0, itemIndex),
          ...state.selectedSevice.slice(itemIndex + 1),
        ];
      }
    },
  },
});

export const { addService } = serviceSlice.actions;
export default serviceSlice.reducer;
