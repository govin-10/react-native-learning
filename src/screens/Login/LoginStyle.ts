import {StyleSheet, Dimensions} from 'react-native';
import {scale, moderateScale} from 'react-native-size-matters';
import {COLORS} from '../../constants';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY_BACKGROUND,
  },
  illustrationWrapper: {
    width,
    height: moderateScale(200),
  },
  illustrationImage: {
    width: '100%',
    height: '100%',
  },

  blurBackground: {
    flex: 1,
    backgroundColor: COLORS.BLUR_BACKGROUND,
    borderTopLeftRadius: moderateScale(60),
    overflow: 'hidden',
  },
  backgroundObject: {
    position: 'absolute',
    width: '100%',
    height: moderateScale(130),
    resizeMode: 'cover',
  },
  loginContent: {
    flex: 1,
    alignSelf: 'center',
  },
  greetingBox: {
    width: moderateScale(320),
    marginTop: moderateScale(40),
    alignItems: 'center',
    marginBottom: moderateScale(18),
  },
  greetingText: {
    fontSize: scale(40),
    color: COLORS.PRIMARY_TEXT_COLOR,
    fontWeight: '600',
    marginBottom: moderateScale(5),
  },
  greetingLine: {
    fontSize: scale(15),
    color: COLORS.SECONDARY_TEXT_COLOR,
  },
  forgorPasswordLink: {
    alignSelf: 'flex-end',
  },
  forgotText: {
    color: COLORS.SECONDARY_TEXT_COLOR,
    fontSize: scale(11),
  },
});
