import _ from 'lodash';
import MockAdapter from 'axios-mock-adapter';
import { environment } from '../config/environment';
import { api } from '../services/nlw-heat-api';
import { sleep } from '../utils/utils';
import { socket } from '../services/nlw-heat-api';
import { nlwHeatApiData } from '../__data__/services/nlwHeatApi.data';

const mock = new MockAdapter(api);

function resetMock() {
  mock.reset();
  jest.clearAllMocks();
}

function mockSuccessSignIn() {
  mock
    .onPost(environment.nlwHeatApi.signIn.path)
    .replyOnce(200, nlwHeatApiData.postUserAuthenticate.response.success);
}

function mockSuccessGetUserProfile() {
  mock
    .onGet(environment.nlwHeatApi.getUserProfile.path)
    .replyOnce(200, nlwHeatApiData.getUserProfile.response.success);
}

function mockSuccessSendMessage() {
  mock
    .onPost(environment.nlwHeatApi.sendMessage.path)
    .replyOnce(200, nlwHeatApiData.postMessage.response.success);
}

function mockErrorSendMessage() {
  mock.onPost(environment.nlwHeatApi.sendMessage.path).replyOnce(500);
}

function _getLastMessagesPath(ammountMessages: number) {
  return _.template(environment.nlwHeatApi.getLastMessages.path)({
    ammountMessages
  });
}

function mockSuccessGetLastMessagesResponse(ammountMessages: number) {
  const path = _getLastMessagesPath(ammountMessages);

  const response = nlwHeatApiData.getMessageLast.response.success;
  response.records = response.records.slice(0, ammountMessages);

  mock.onGet(path).replyOnce(200, response);
}

function mockErrorGetLastMessagesResponse() {
  const { ammountMessages } = environment.pages.messageList;
  const path = _getLastMessagesPath(ammountMessages);

  mock.onGet(path).reply(500);
}

function mockSuccessSocketNewMessage(socketDelay: number) {
  jest.spyOn(socket, 'on').mockImplementationOnce((event, callback) => {
    if (event === 'new_message') {
      const data = nlwHeatApiData.socketReceivedNewMessage.response.success;
      sleep(socketDelay).then(() => callback(data));
    }
    return socket;
  });
}

export const nlwHeatApiInterceptors = {
  resetMock,
  mockSuccessSignIn,
  mockSuccessGetUserProfile,
  mockSuccessSendMessage,
  mockSuccessGetLastMessagesResponse,
  mockSuccessSocketNewMessage,
  mockErrorSendMessage,
  mockErrorGetLastMessagesResponse
};
