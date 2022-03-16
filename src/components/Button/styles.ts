import { StyleSheet } from 'react-native';
import { Fonts } from '../../theme';

export const styles = StyleSheet.create({
  button: {
    height: 48,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 14,
    fontFamily: Fonts.bold,
  },
  icon: {
    marginRight: 12,
  },
});
