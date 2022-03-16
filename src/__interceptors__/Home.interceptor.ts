import { nlwHeatApiInterceptors } from './nlwHeatApi.interceptor';
import { authInterceptors } from './Auth.interceptor';
import { environment } from '../config/environment';

function SH002SetInterceptors() {
  authInterceptors.mockExpoAuthSuccess();
  nlwHeatApiInterceptors.mockSuccessSignIn();
  nlwHeatApiInterceptors.mockSuccessGetLastMessagesResponse(
    environment.pages.messageList.ammountMessages
  );
}

export const homeInterceptors = {
  SH002SetInterceptors
};
