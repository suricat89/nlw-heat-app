import React from 'react';
import {
  render,
  fireEvent,
  waitFor,
  waitForElementToBeRemoved
} from './utils/testUtils';
import { Home } from '../screens/Home';
import { authInterceptors } from '../__interceptors__/Auth.interceptor';
import { homeInterceptors } from '../__interceptors__/Home.interceptor';
import { sleep } from '../utils/utils';

beforeAll(() => {
  authInterceptors.setupInterceptors();
});

beforeEach(() => {
  authInterceptors.clearInterceptors();
});

describe('Success scenarios', () => {
  test('SH001 - Renders SignInBox if not yet logged in', async () => {
    const homeScreen = render(<Home />);

    const signInButton = await homeScreen.findByTestId('button');

    expect(signInButton).not.toBeNull();
  });

  test.only('SH002 - Renders SendMessageForm if login action succeeds', async () => {
    homeInterceptors.SH002SetInterceptors();
    const homeScreen = render(<Home />);

    const signInButton = homeScreen.getByTestId('button');
    fireEvent.press(signInButton);

    await sleep(2000);

    // waitForElementToBeRemoved(() =>
    //   expect(homeScreen.getByTestId('button')).toBeNull()
    // );
    // const sendMessageForm = await homeScreen.findByTestId('sendMessageForm');
    const sendMessageForm = await homeScreen.getByTestId('sendMessageForm');

    expect(sendMessageForm).not.toBeNull();
  });
});
