import { nlwHeatApiInterceptors } from './nlwHeatApi.interceptor';
import * as AuthSessions from 'expo-auth-session';

function setupInterceptors() {}

function clearInterceptors() {
  nlwHeatApiInterceptors.resetMock();
}

function mockExpoAuthSuccess() {
  jest.spyOn(AuthSessions, 'startAsync').mockImplementationOnce(() =>
    Promise.resolve({
      params: {
        code: 'authCode',
        error: ''
      },
      type: 'success',
      errorCode: null,
      authentication: null,
      url: ''
    })
  );
}

function mockExpoAuthError() {
  jest.spyOn(AuthSessions, 'startAsync').mockImplementationOnce(() =>
    Promise.resolve({
      params: {
        code: 'authCode',
        error: ''
      },
      type: 'error',
      errorCode: null,
      authentication: null,
      url: ''
    })
  );
}

function mockExpoAuthException() {
  jest.spyOn(AuthSessions, 'startAsync').mockImplementationOnce(() => {
    throw new Error('Test error');
  });
}

export const authInterceptors = {
  setupInterceptors,
  clearInterceptors,
  mockExpoAuthSuccess,
  mockExpoAuthError,
  mockExpoAuthException
};
