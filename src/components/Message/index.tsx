import React from 'react';
import { Text, View } from 'react-native';
import { MotiView } from 'moti';
import { UserPhoto } from '../UserPhoto';
import * as nlwHeatApi from '../../services/nlw-heat-api';

import { styles } from './styles';

interface Props {
  data: nlwHeatApi.Message;
}

export function Message({ data }: Props) {
  return (
    <MotiView
      from={{ opacity: 0, translateY: -50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: 'timing', duration: 700 }}
      style={styles.container}
      testID="messageItem"
    >
      <Text style={styles.message}>{data.text}</Text>
      <View style={styles.footer}>
        <UserPhoto sizes="Small" imageUri={data.user.avatar_url} />

        <Text style={styles.userName}>{data.user.name}</Text>
      </View>
    </MotiView>
  );
}
