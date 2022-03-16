export const nlwHeatApiData = {
  getMessageLast: {
    response: {
      success: {
        meta: {
          self: 'suricat-PC',
          version: '1.0.0',
          count: 5
        },
        records: [
          {
            id: 'messageId5',
            text: 'Message 5',
            created_at: '2022-01-28T03:02:18.159Z',
            user_id: 'userId1',
            user: {
              id: 'userId1',
              name: 'Thiago Monteiro de Paula',
              github_id: 12009887,
              avatar_url:
                'https://avatars.githubusercontent.com/u/12009887?v=4',
              login: 'suricat89',
              profile: 'user'
            }
          },
          {
            id: 'messageId4',
            text: 'Message 4',
            created_at: '2022-01-27T04:07:46.391Z',
            user_id: 'userId1',
            user: {
              id: 'userId1',
              name: 'Thiago Monteiro de Paula',
              github_id: 12009887,
              avatar_url:
                'https://avatars.githubusercontent.com/u/12009887?v=4',
              login: 'suricat89',
              profile: 'user'
            }
          },
          {
            id: 'messageId3',
            text: 'Message 3',
            created_at: '2022-01-27T04:07:43.581Z',
            user_id: 'userId1',
            user: {
              id: 'userId1',
              name: 'Thiago Monteiro de Paula',
              github_id: 12009887,
              avatar_url:
                'https://avatars.githubusercontent.com/u/12009887?v=4',
              login: 'suricat89',
              profile: 'user'
            }
          },
          {
            id: 'messageId2',
            text: 'Message 2',
            created_at: '2022-01-27T04:07:36.148Z',
            user_id: 'userId1',
            user: {
              id: 'userId1',
              name: 'Thiago Monteiro de Paula',
              github_id: 12009887,
              avatar_url:
                'https://avatars.githubusercontent.com/u/12009887?v=4',
              login: 'suricat89',
              profile: 'user'
            }
          },
          {
            id: 'messageId1',
            text: 'Message 1',
            created_at: '2022-01-20T04:21:20.344Z',
            user_id: 'userId1',
            user: {
              id: 'userId1',
              name: 'Thiago Monteiro de Paula',
              github_id: 12009887,
              avatar_url:
                'https://avatars.githubusercontent.com/u/12009887?v=4',
              login: 'suricat89',
              profile: 'user'
            }
          }
        ]
      }
    }
  },
  socketReceivedNewMessage: {
    response: {
      success: {
        id: 'messageIdNewMessageFromSocket',
        text: 'New message from Socket',
        created_at: '2022-01-28T03:02:18.159Z',
        user_id: 'userId1',
        user: {
          id: 'userId1',
          name: 'Thiago Monteiro de Paula',
          github_id: 12009887,
          avatar_url: 'https://avatars.githubusercontent.com/u/12009887?v=4',
          login: 'suricat89',
          profile: 'user'
        }
      }
    }
  },
  postMessage: {
    request: {
      message: {
        text: 'Test message'
      }
    },
    response: {
      success: {
        meta: {
          self: 'suricat-PC',
          version: '1.0.0',
          count: 1
        },
        records: [
          {
            id: 'messageIdPostMessage',
            text: '22',
            created_at: '2022-01-28T03:02:18.159Z',
            user_id: 'userId1',
            user: {
              id: 'userId1',
              name: 'Thiago Monteiro de Paula',
              github_id: 12009887,
              avatar_url:
                'https://avatars.githubusercontent.com/u/12009887?v=4',
              login: 'suricat89',
              profile: 'user'
            }
          }
        ]
      }
    }
  },
  postUserAuthenticate: {
    request: {
      code: 'asdfqwerzxcv',
      source: 'web'
    },
    response: {
      success: {
        meta: {
          self: 'suricat-PC',
          version: '1.0.0',
          count: 1
        },
        records: [
          {
            token: 'mocked token',
            user: {
              id: 'userId1',
              name: 'Thiago Monteiro de Paula',
              github_id: 12009887,
              avatar_url:
                'https://avatars.githubusercontent.com/u/12009887?v=4',
              login: 'suricat89',
              profile: 'user'
            }
          }
        ]
      }
    }
  },
  getUserProfile: {
    response: {
      success: {
        meta: {
          self: 'suricat-PC',
          version: '1.0.0',
          count: 1
        },
        records: [
          {
            id: 'userId1',
            name: 'Thiago Monteiro de Paula',
            github_id: 12009887,
            avatar_url: 'https://avatars.githubusercontent.com/u/12009887?v=4',
            login: 'suricat89',
            profile: 'user'
          }
        ]
      }
    }
  }
};
