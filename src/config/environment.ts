/* eslint-disable no-template-curly-in-string */
// import _ from 'lodash';
const _ = require('lodash');

export const environment = {
  app: {
    logApiErrors: process.env.REACT_APP_LOG_API_ERRORS === 'true'
  },
  pages: {
    messageList: {
      refreshQueueTime:
        _.toNumber(process.env.REACT_APP_MESSAGE_LIST_REFRESH_TIME) || 2000,
      ammountMessages:
        _.toNumber(process.env.REACT_APP_MESSAGE_LIST_AMMOUNT_MESSAGES) || 4
    }
  },
  nlwHeatApi: {
    baseUrl:
      process.env.REACT_APP_NLW_HEAT_API_BASE_URL || 'http://localhost:4000',
    getLastMessages: {
      path: '/message/last?ammountMessages=${ ammountMessages }'
    },
    sendMessage: {
      path: '/message'
    },
    signIn: {
      path: '/user/authenticate'
    },
    getUserProfile: {
      path: '/user/profile'
    }
  },
  github: {
    clientId: process.env.REACT_APP_GITHUB_CLIENT_ID,
    signInUrl:
      'https://github.com/login/oauth/authorize?scope=read:user&client_id=${ clientId }'
  }
};
