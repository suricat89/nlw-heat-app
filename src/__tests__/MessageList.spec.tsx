import React from 'react';
import { render, within, waitFor } from './utils/testUtils';
import { MessageList } from '../components/MessageList';

import { environment } from '../config/environment';
import { messageListInterceptors } from '../__interceptors__/MessageList.interceptor';
import { authInterceptors } from '../__interceptors__/Auth.interceptor';
import { sleep } from '../utils/utils';

beforeAll(() => {
  authInterceptors.setupInterceptors();
});

beforeEach(() => {
  authInterceptors.clearInterceptors();
});

describe('Success scenarios', () => {
  test('SML001 - Renders messages list with 4 messages', async () => {
    environment.pages.messageList.ammountMessages = 4;
    environment.pages.messageList.refreshQueueTime = 1;
    messageListInterceptors.SML001SetInterceptors();

    const messageList = render(<MessageList />);

    const messages = await messageList.findAllByTestId('messageItem');

    expect(messages).toHaveLength(4);
    expect(within(messages[0]).getByText('Message 5')).toBeTruthy();
    expect(within(messages[1]).getByText('Message 4')).toBeTruthy();
    expect(within(messages[2]).getByText('Message 3')).toBeTruthy();
    expect(within(messages[3]).getByText('Message 2')).toBeTruthy();
  });

  test('SML002 - Updates the list if a new message is received', async () => {
    environment.pages.messageList.ammountMessages = 4;
    environment.pages.messageList.refreshQueueTime = 1;
    messageListInterceptors.SML002SetInterceptors(300);

    const messageList = render(<MessageList />);

    await messageList.findByText('New message from Socket');

    const messagesAfter = messageList.getAllByTestId('messageItem');
    expect(messagesAfter).toHaveLength(4);

    expect(
      within(messagesAfter[0]).getByText('New message from Socket')
    ).toBeTruthy();
    expect(within(messagesAfter[1]).getByText('Message 5')).toBeTruthy();
    expect(within(messagesAfter[2]).getByText('Message 4')).toBeTruthy();
    expect(within(messagesAfter[3]).getByText('Message 3')).toBeTruthy();
  });

  test('SML003 - Checks for new messages on queue but there is nothing new', async () => {
    environment.pages.messageList.ammountMessages = 4;
    environment.pages.messageList.refreshQueueTime = 1;
    messageListInterceptors.SML003SetInterceptors();

    const messageList = render(<MessageList />);

    await waitFor(() => sleep(400));

    const messages = messageList.getAllByTestId('messageItem');
    expect(messages).toHaveLength(4);
    expect(within(messages[0]).getByText('Message 5')).toBeTruthy();
    expect(within(messages[1]).getByText('Message 4')).toBeTruthy();
    expect(within(messages[2]).getByText('Message 3')).toBeTruthy();
    expect(within(messages[3]).getByText('Message 2')).toBeTruthy();
  });
});

describe('Error scenarios', () => {
  test('EML001 - Display empty list if API request fails', async () => {
    environment.pages.messageList.ammountMessages = 4;
    messageListInterceptors.EML001SetInterceptors();

    const messageList = render(<MessageList />);

    expect(
      waitFor(() => messageList.queryByTestId('messageItem'), { timeout: 400 })
    ).resolves.toBeNull();
  });
});
