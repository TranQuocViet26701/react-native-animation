import { StyleSheet } from 'react-native';
import * as Utils from './utils';

export default StyleSheet.create({
  contentCartPromotion: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  btnPromotion: {
    height: 25,
    borderRadius: 3,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  promotionItem: {
    width: Utils.scaleWithPixel(200),
    height: Utils.scaleWithPixel(250),
  },
});
