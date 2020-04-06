/* eslint-disable react/prop-types */
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const CheckBoxBall = ({
  selected,
  onPress,
  style,
  textStyle,
  size = 30,
  color = '#211f30',
  text = '',
  ...props
}) => (
    <TouchableOpacity
      style={[styles.checkBox, style]}
      onPress={onPress}
      {...props}
    >
      <Icon
        size={size}
        color={color}
        name={selected ? 'radio-button-checked' : 'radio-button-unchecked'}
      />

      <Text style={styles.textOptionStyle}> {text} </Text>
    </TouchableOpacity>
  );

export default CheckBoxBall;
