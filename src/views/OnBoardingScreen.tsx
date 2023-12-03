import React from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  ImageSourcePropType,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {constants} from '../appConstants';
import OnBoardingInterface from '../interface/OnBoardingInterface';
import HeaderLogo from '../components/HeaderLogo/HeaderLogo';
import styles from './style/OnBoardingStyle';

const OnBoardingScreen: React.FC<OnBoardingInterface> = props => {

  interface renderItem {
    id: number;
    backgroundImage: ImageSourcePropType;
    bannerImage: ImageSourcePropType;
    title: string;
    description: string;
  }

  const renderItem = ({item, index}: {item: renderItem; index: number}) => {
    return (
      <SafeAreaView style={styles.renderContainer}>
        <View style={styles.renderheaderContainer}>
          <ImageBackground
            source={item.backgroundImage}
            style={styles.backgroundImage}>
            <HeaderLogo />
            <View>
              <Image source={item.bannerImage} style={styles.bannerImage} />
            </View>
          </ImageBackground>
        </View>

        <View style={styles.renderfooterContainer}>
          <Text style={styles.titleText}>{item.title}</Text>
          <Text style={styles.descriptionText}>{item.description}</Text>
          <View style={styles.indicators}>
            {constants.onboarding_screens.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.indicator,
                  index === props.currentPage ? styles.activeIndicator : null,
                ]}
              />
            ))}
          </View>
        </View>

        {index < constants.onboarding_screens.length - 1 && (
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.skipButton}
              onPress={() =>
                props.scrollTo(constants.onboarding_screens.length - 1)
              }>
              <Text style={styles.skipButtonText}>
                {constants.keywords.skip}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.nextButton}
              onPress={() => props.scrollTo(index + 1)}>
              <Text style={styles.nextButtonText}>
                {constants.keywords.next}
              </Text>
            </TouchableOpacity>
          </View>
        )}

        {index == constants.onboarding_screens.length - 1 && (
          <View style={styles.buttonContainer2}>
            <TouchableOpacity
              style={styles.startedButton}
              onPress={() => props.navigation.navigate('SignIn')}>
              <Text style={styles.nextButtonText}>
                {constants.keywords.started}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </SafeAreaView>
    );
  };
  
  return (
    <FlatList
      ref={props.flatListRef}
      data={constants.onboarding_screens}
      renderItem={renderItem}
      keyExtractor={(_, index) => index.toString()}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      onScroll={props.handleScroll}
    />
  );
};

export default OnBoardingScreen;
