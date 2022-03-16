import React from 'react';
import { render, fireEvent, waitFor } from './utils/testUtils';
import { SignInBox } from '../components/SignInBox';
import { authInterceptors } from '../__interceptors__/Auth.interceptor';

beforeAll(() => {
  authInterceptors.setupInterceptors();
});

beforeEach(() => {
  authInterceptors.clearInterceptors();
});

describe('Success scenarios', () => {
  test('SSIB001 - Renders SignIn button', async () => {
    const signInBox = render(<SignInBox />);

    const buttonText = await signInBox.findByTestId('buttonText');

    expect(buttonText).not.toBeNull();
  });

  test('SSIB002 - Show signin in animation if click on button', async () => {
    const signInBox = render(<SignInBox />);

    const signInButton = signInBox.getByTestId('button');
    fireEvent.press(signInButton);

    const loadingAnimation = await signInBox.findByTestId('loadingAnimation');
    expect(loadingAnimation).not.toBeNull();

    const buttonText = await signInBox.getByTestId('buttonText');
    expect(buttonText).toBeNull();
  });
});
