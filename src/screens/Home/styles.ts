import { StyleSheet } from 'react-native';
import { Colors } from '../../theme';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blackSecondary,
    paddingTop: getStatusBarHeight() + 16,
  },
});
