import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { environment } from '../../config/environment';
import { Message } from '../Message';
import * as nlwHeatApi from '../../services/nlw-heat-api';

import { styles } from './styles';

let messagesQueue: nlwHeatApi.Message[] = [];

export function MessageList() {
  const [currentMessages, setCurrentMessages] = useState<nlwHeatApi.Message[]>(
    []
  );

  useEffect(() => {
    const timer = setInterval(() => {
      if (messagesQueue.length > 0) {
        setCurrentMessages((prevState) => {
          const { ammountMessages } = environment.pages.messageList;
          const firstMessageQueue = messagesQueue.shift() as nlwHeatApi.Message;

          const newMessageList = [firstMessageQueue];
          for (let i = 0; i < ammountMessages - 1; i++) {
            newMessageList.push(prevState[i]);
          }

          return newMessageList.filter(Boolean);
        });
      }
    }, environment.pages.messageList.refreshQueueTime);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const getMessages = async () => {
      const { ammountMessages } = environment.pages.messageList;
      const apiMessages = await nlwHeatApi.getLatestMessages(ammountMessages);
      if (apiMessages?.length) {
        setCurrentMessages(apiMessages);
      }
    };

    const listenSocket = () => {
      nlwHeatApi.listenApi<nlwHeatApi.Message>('new_message', (newMessage) => {
        messagesQueue.push(newMessage);
      });
    };

    getMessages();
    listenSocket();
  }, []);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
      testID="messageList"
    >
      {currentMessages?.map((message) => (
        <Message data={message} key={message.id} />
      ))}
    </ScrollView>
  );
}
