/* eslint-disable react/prop-types */
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { TouchableOpacity } from 'react-native';
import styles, { Text } from './styles';

const CheckBox = ({
  selected,
  onPress,
  style,
  textStyle,
  size = 30,
  color = '#0039A6',
  text = '',
  dif,
  ...props
}) => (
    <TouchableOpacity
      style={[styles.checkBox, style]}
      onPress={onPress}
      {...props}
    >
      {dif ? (
        <Icon
          size={size}
          color={color}
          name={selected ? 'radio-button-checked' : 'radio-button-unchecked'}
        />
      ) : (
          <Icon
            size={size}
            color={color}
            name={selected ? 'check-box' : 'check-box-outline-blank'}
          />
        )}

      {dif ? (
        <Text> {text} </Text>
      ) : (
          <Text style={styles.textOptionStyle}> {text} </Text>
        )}
    </TouchableOpacity>
  );

export default CheckBox;
