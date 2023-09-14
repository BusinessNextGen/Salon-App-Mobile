import tailwindConfig from "../../tailwind.config";
interface Colors {
  "primary-color": string;
  "secondary-color": string;
  brandColor1: string;
  brandColor2: string;
  brandColor3: string;
  grey1: string;
  grey2: string;
  grey3: string;
  grey4: string;
  grey5: string;
  grey6: string;
  grey7: string;
  white: string;
}

export const colorMap =
  (tailwindConfig?.theme?.extend?.colors as Record<keyof Colors, string>) || {};
