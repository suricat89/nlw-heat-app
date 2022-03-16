import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 36,
  },
  message: {
    fontSize: 15,
    fontFamily: Fonts.regular,
    color: Colors.white,
    lineHeight: 20,
    marginBottom: 12,
  },
  footer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    fontSize: 15,
    fontFamily: Fonts.regular,
    color: Colors.white,
    marginLeft: 16,
  },
});
