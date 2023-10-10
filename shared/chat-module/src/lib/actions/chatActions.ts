import { ConversationType } from '@m-repo/types';
import { Dispatch } from 'redux';
import { GET_RATINGS, client } from '@m-repo/network';
import { isLoading, updateThread } from '../chatReducer';
import { sendMsgService } from '../api/chatService';

export const sendMsgAction = (message: ConversationType) => {
  return async (dispatch: Dispatch) => {
    dispatch(updateThread(message));
    dispatch(isLoading(true));

    sendMsgService('')
      .then((response) => {
        dispatch(updateThread(response));
      })
      .catch((e) => console.log('ERROR : sendMsgAction', e));
  };
};

export const fetchRatingsById = (id: number) => {
  return async (dispatch: Dispatch) => {
    await client
      .query({
        query: GET_RATINGS,
        variables: {
          id,
        },
      })
      .then((response) => {
        if (response.error == null && response.errors == null) {
          const title = response?.data?.Media?.title;
          const data = {
            isBot: true,
            msgContent:
              'This msg if from GQL; ' +
              title.english +
              ' | ' +
              title.native +
              ' | ' +
              title.romaji,
            timeStamp: new Date().getTime(),
          };
          dispatch(updateThread(data));
        }
      })
      .catch((e) => console.log('ERROR: ', e));
  };
};
