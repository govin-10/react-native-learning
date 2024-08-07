import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {moderateScale, scale} from 'react-native-size-matters';
import {COLORS} from '../../constants';

interface ITextInputProps {
  label: string;
  placeholder: string;
  icon: ImageSourcePropType;
  showeyeIcon: boolean;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  onPressEyeIcon?: () => void;
  eyeIcon?: ImageSourcePropType;
}

const TextInputComp: React.FC<ITextInputProps> = ({
  label,
  placeholder,
  icon,
  showeyeIcon,
  eyeIcon,
  onChangeText,
  onPressEyeIcon,
  ...props
}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputBox}>
        <Image source={icon} style={styles.inputIcon} />
        <TextInput
          style={styles.inputField}
          placeholder={placeholder}
          placeholderTextColor={COLORS.SECONDARY_TEXT_COLOR}
          onChangeText={onChangeText}
          {...props}
        />
        {showeyeIcon && (
          <TouchableOpacity
            onPress={onPressEyeIcon}
            style={{
              padding: scale(8),
            }}>
            <Image style={styles.inputIcon} source={eyeIcon} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default TextInputComp;

const styles = StyleSheet.create({
  inputContainer: {},
  label: {
    color: COLORS.SECONDARY_TEXT_COLOR,
    fontSize: scale(15),
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(4),
    height: moderateScale(55),
    marginVertical: moderateScale(12),
    elevation: 2,
    paddingHorizontal: scale(20),
    borderRadius: moderateScale(10),
  },
  inputIcon: {
    width: moderateScale(17),
    height: moderateScale(15),
    resizeMode: 'contain',
  },
  inputField: {
    flex: 1,
    fontSize: scale(14),
    marginLeft: moderateScale(8),
    color: COLORS.SECONDARY_TEXT_COLOR,
  },
});
