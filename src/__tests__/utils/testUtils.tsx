import React from 'react';
import { render, RenderOptions } from '@testing-library/react-native';
import { AuthProvider } from '../../../src/hooks/auth';

const AuthProviderWrapper = ({ children }: { children: JSX.Element }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

const customRender = (ui: JSX.Element, options?: RenderOptions) =>
  render(ui, { wrapper: AuthProviderWrapper, ...options });

export * from '@testing-library/react-native';
export { customRender as render };
