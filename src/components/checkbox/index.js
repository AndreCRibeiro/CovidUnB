/* eslint-disable react/prop-types */
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const CheckBox = ({
  selected,
  onPress,
  style,
  textStyle,
  size = 30,
  color = '#0039A6',
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
        name={selected ? 'check-box' : 'check-box-outline-blank'}
      />

      <Text style={styles.textOptionStyle}> {text} </Text>
    </TouchableOpacity>
  );

export default CheckBox;
