import React from 'react';
import { Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import AvatarImg from '../../assets/avatar.png';
import { Colors } from '../../theme';

const Sizes = {
  Small: {
    containerSize: 32,
    avatarSize: 28,
  },
  Normal: {
    containerSize: 44,
    avatarSize: 42,
  },
};

interface Props {
  imageUri: string | undefined;
  sizes?: 'Small' | 'Normal';
}

const AvatarDefault = Image.resolveAssetSource(AvatarImg).uri;

export function UserPhoto({ imageUri, sizes = 'Normal' }: Props) {
  const { avatarSize, containerSize } = Sizes[sizes];

  return (
    <LinearGradient
      colors={[Colors.pink, Colors.yellow]}
      start={{ x: 0, y: 0.8 }}
      end={{ x: 0.9, y: 1 }}
      style={[
        styles.container,
        {
          width: containerSize,
          height: containerSize,
          borderRadius: containerSize / 2,
        },
      ]}
    >
      <Image
        source={{ uri: imageUri || AvatarDefault }}
        style={[
          styles.avatar,
          {
            width: avatarSize,
            height: avatarSize,
            borderRadius: avatarSize / 2,
          },
        ]}
      />
    </LinearGradient>
  );
}
