import React from 'react';
import { View } from 'react-native';
import { Colors } from '../../theme';
import { Button } from '../Button';
import { useAuth } from '../../hooks/auth';

import { styles } from './styles';

export function SignInBox() {
  const { signIn, isSigningIn } = useAuth();

  return (
    <View style={styles.container}>
      <Button
        title="ENTRAR COM GITHUB"
        color={Colors.blackPrimary}
        backgroundColor={Colors.yellow}
        icon="github"
        onPress={signIn}
        isLoading={isSigningIn}
      />
    </View>
  );
}
