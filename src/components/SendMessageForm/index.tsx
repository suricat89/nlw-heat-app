import React, { useState } from 'react';
import { Alert, Keyboard, TextInput, View } from 'react-native';
import { Colors } from '../../theme';
import { Button } from '../Button';
import * as nlwHeatApi from '../../services/nlw-heat-api';

import { styles } from './styles';

export function SendMessageForm() {
  const [message, setMessage] = useState('');
  const [sendingMessage, setSendingMessage] = useState(false);

  async function handleMessageSubmit() {
    setSendingMessage(true);
    const messageFormatted = message.trim();

    if (!messageFormatted.length) {
      setSendingMessage(false);
      return Alert.alert('Por favor escreva uma mensagem.');
    }

    try {
      await nlwHeatApi.sendMessage(messageFormatted);
      setMessage('');
      Keyboard.dismiss();
      Alert.alert('Mensagem enviada com sucesso!');
    } catch (error) {
      console.log(error);
      Alert.alert('Erro no envio da mensagem!');
    } finally {
      setSendingMessage(false);
    }
  }

  return (
    <View style={styles.container} testID="sendMessageForm">
      <TextInput
        keyboardAppearance="dark"
        placeholder="Qual sua expectativa para o evento"
        placeholderTextColor={Colors.grayPrimary}
        multiline
        maxLength={140}
        onChangeText={setMessage}
        value={message}
        style={styles.input}
        editable={!sendingMessage}
      />
      <Button
        title="ENVIAR MENSAGEM"
        backgroundColor={Colors.pink}
        color={Colors.white}
        isLoading={sendingMessage}
        onPress={handleMessageSubmit}
      />
    </View>
  );
}
