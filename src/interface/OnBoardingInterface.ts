import { FlatList, NativeScrollEvent, NativeSyntheticEvent } from "react-native";

interface OnBoardingInterface {
  navigation: any,
  flatListRef: React.MutableRefObject<FlatList<any> | null>,
  scrollTo: (data: number) => void,
  handleScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void,
  currentPage: number
}

export default OnBoardingInterface;
