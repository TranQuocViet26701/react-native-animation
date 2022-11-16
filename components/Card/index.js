import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import Image from '../Image';
import { Images } from '../../config/images';

export default function Card(props) {
  const { style, children, styleContent, image, onPress } = props;
  return (
    <TouchableOpacity
      style={[styles.card, { borderColor: '#000' }, style]}
      onPress={onPress}
      activeOpacity={0.9}
    >
      <Image source={image} style={styles.imageBanner} />
      <View style={[styles.content, styleContent]}>{children}</View>
    </TouchableOpacity>
  );
}

Card.propTypes = {
  image: PropTypes.node.isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  styleContent: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  onPress: PropTypes.func,
};

Card.defaultProps = {
  image: Images.profile2,
  style: {},
  styleContent: {},
  onPress: () => {},
};
