import { environment } from '../config/environment';
import { nlwHeatApiInterceptors } from './nlwHeatApi.interceptor';

function SML001SetInterceptors() {
  nlwHeatApiInterceptors.mockSuccessGetLastMessagesResponse(
    environment.pages.messageList.ammountMessages
  );
}

function SML002SetInterceptors(socketDelay: number) {
  nlwHeatApiInterceptors.mockSuccessGetLastMessagesResponse(
    environment.pages.messageList.ammountMessages
  );
  nlwHeatApiInterceptors.mockSuccessSocketNewMessage(socketDelay);
}

function SML003SetInterceptors() {
  nlwHeatApiInterceptors.mockSuccessGetLastMessagesResponse(
    environment.pages.messageList.ammountMessages
  );
}

function EML001SetInterceptors() {
  nlwHeatApiInterceptors.mockErrorGetLastMessagesResponse();
}

export const messageListInterceptors = {
  SML001SetInterceptors,
  SML002SetInterceptors,
  SML003SetInterceptors,
  EML001SetInterceptors
};
