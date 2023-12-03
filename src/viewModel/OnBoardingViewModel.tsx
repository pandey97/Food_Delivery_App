import React, {useRef, useState} from 'react';
import OnBoardingScreen from '../views/OnBoardingScreen';
import {
  Dimensions,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';

interface Modelprops {
  navigation: any;
}

const OnBoardingViewModel: React.FC<Modelprops> = props => {
  const [currentPage, setCurrentPage] = useState(0);
  const screenWidth = Dimensions.get('window').width;
  const {navigation} = props;
  const flatListRef = useRef<FlatList<any> | null>(null);

  const scrollTo = (data: number) => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({animated: true, index: data});
    }
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const {contentOffset} = event.nativeEvent;
    const page = Math.round(contentOffset.x / screenWidth);
    setCurrentPage(page);
  };

  return (
    <OnBoardingScreen
      {...{
        flatListRef,
        navigation,
        scrollTo,
        handleScroll,
        currentPage,
      }}
    />
  );
};

export default OnBoardingViewModel;
