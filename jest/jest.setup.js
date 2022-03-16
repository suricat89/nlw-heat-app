import React from 'react';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import { Image, View } from 'react-native';

jest.spyOn(Image, 'resolveAssetSource').mockImplementation(() => {
  return {
    uri: './testUri.png'
  };
});

const _values = {};
// jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
jest.mock('@react-native-async-storage/async-storage', () => ({
  // _values: {},
  setItem: function(key, value) {
    _values[key] = value;
  },
  getItem: function(key) {
    return _values[key];
  },
  removeItem: function(key) {
    delete _values[key];
  }
}));

jest.mock('moti', () => ({
  MotiView: ({ children, ...props }) => {
    const { View } = require('react-native');
    return (
      <View {...props}>
        {children}
      </View>
    );
  }
}));

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

// jest.mock('@expo/vector-icons', () => {
//   const { View } = require('react-native');

//   return {
//     AntDesign: function({ ...params }) {
//       return <View {...params} />;
//     }
//   };
// });

// jest.mock('moti', () => {
//   const { View } = require('react-native');

//   return {
//     MotiView: function({ children, ...params }) {
//       return (
//         <View {...params}>
//           {children}
//         </View>
//       );
//     }
//   };
// });
