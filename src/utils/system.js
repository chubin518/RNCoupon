import { Platform, Dimensions, PixelRatio } from "react-native";

export default {
  isIOS: Platform.OS === "ios",
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
  onePixel: 1 / PixelRatio.get(),
  staturBarHeight: Platform.OS === "ios" ? 20 : 0
};
