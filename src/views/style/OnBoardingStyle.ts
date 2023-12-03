import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../themes/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  renderContainer: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
  renderheaderContainer: {
    flex: 0.67,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'stretch',
  },
  bannerImage: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: '68%',
    height: '92%',
  },
  renderfooterContainer: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    color: COLORS.black,
    fontSize: 24,
    marginBottom: 20,
    fontFamily: 'Poppins-Bold',
  },
  descriptionText: {
    fontSize: 15,
    width: '75%',
    textAlign: 'center',
    color: COLORS.transparentBlack7,
    fontFamily: 'Poppins-Regular',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  buttonContainer2: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  skipButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  skipButtonText: {
    color: COLORS.darkGray,
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
  },
  nextButton: {
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 60,
    borderRadius: 12,
  },
  startedButton: {
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: '26%',
    borderRadius: 12,
  },
  nextButtonText: {
    color: COLORS.white,
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
  },
  indicators: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
  activeIndicator: {
    backgroundColor: COLORS.primary,
    width: 20,
  },
});

export default styles;
