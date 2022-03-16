import axios from 'axios';
import _ from 'lodash';
import { io } from 'socket.io-client';
import { dispatchRequest } from '../../utils/request';
import { environment } from '../../config/environment';

export const api = axios.create({
  baseURL: environment.nlwHeatApi.baseUrl
});

export const socket = io(environment.nlwHeatApi.baseUrl);

type SocketEvents = 'new_message';
type SocketCallback<T> = (arg: T) => void;

export function listenApi<T>(event: SocketEvents, callback: SocketCallback<T>) {
  socket.on(event, callback);
}

export interface Message {
  created_at: string;
  id: string;
  text: string;
  user_id: string;
  user: {
    avatar_url: string;
    github_id: number;
    id: string;
    login: string;
    name: string;
    profile: string;
  };
}

interface GetLatestMessagesResponse {
  records: Message[];
}

export async function getLatestMessages(ammountMessages: number) {
  const templateUrl = _.template(environment.nlwHeatApi.getLastMessages.path);
  const url = templateUrl({
    ammountMessages
  });

  try {
    const response = await dispatchRequest<GetLatestMessagesResponse>(
      api,
      'GET',
      url
    );
    return response.records;
  } catch (error) {
    console.error(error);
  }

  return [];
}

export async function sendMessage(text: string) {
  const url = environment.nlwHeatApi.sendMessage.path;

  try {
    await dispatchRequest(api, 'POST', url, {
      data: {
        message: {
          text
        }
      }
    });
  } catch (error) {
    console.error(error);
  }
}

export interface User {
  avatar_url: string;
  github_id: number;
  id: string;
  login: string;
  name: string;
  profile: string;
}

interface UserSigninResponse {
  records: {
    token: string;
    user: User;
  }[];
}

export async function signIn(githubCode: string) {
  const url = environment.nlwHeatApi.signIn.path;

  const response = await dispatchRequest<UserSigninResponse>(api, 'POST', url, {
    data: {
      code: githubCode,
      source: 'web'
    }
  });

  return response.records[0];
}

interface GetUserProfileResponse {
  records: User[];
}

export async function getUserProfile() {
  const url = environment.nlwHeatApi.getUserProfile.path;

  const response = await dispatchRequest<GetUserProfileResponse>(
    api,
    'GET',
    url
  );

  return response.records[0];
}
