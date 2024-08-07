import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {moderateScale, scale} from 'react-native-size-matters';
import {COLORS} from '../../constants';

interface IButtonCompProps {
  text: string;
  onPress: () => void;
}

const ButtonComp: React.FC<IButtonCompProps> = ({text, onPress}) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        onPress={onPress}
        style={styles.buttonStyle}
        activeOpacity={0.6}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonComp;

const styles = StyleSheet.create({
  buttonContainer: {},
  buttonStyle: {
    height: moderateScale(50),
    width: '100%',
    backgroundColor: COLORS.BUTTON_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(15),
    marginVertical: moderateScale(18),
  },
  buttonText: {
    color: COLORS.PRIMARY_TEXT_COLOR,
    fontSize: scale(17.5),
  },
});
