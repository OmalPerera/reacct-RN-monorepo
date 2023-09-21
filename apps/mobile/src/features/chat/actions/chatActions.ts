import { isLoading, updateThread } from '../reducer/chatReducer';
import { ConversationType } from '../../../types/chat.types';
import { Dispatch } from 'redux';
import sendMsgService, { genrateResponseService } from '../api/chatService';
//import axios from 'axios';

export const sendMsgAction = (message: ConversationType) => {
  return async (dispatch: Dispatch) => {
    dispatch(updateThread(message));
    dispatch(isLoading(true));

    // axios
    //   .get('https://run.mocky.io/v3/427dd982-2563-436e-a1e2-706e4b9f9ff8', {
    //     url: 'https://run.mocky.io/v3/427dd982-2563-436e-a1e2-706e4b9f9ff8',
    //   })
    //   .then();
    // console.log('***, result', result);

    sendMsgService('anc')
      .then((response) => {
        dispatch(updateThread(response));
      })
      .catch((e) => console.log('ERROR : sendMsgAction', e));

    // genrateResponseService(message.msgContent)
    //   .then((response) => {
    //     console.log('** : ', response);
    //     // const converstaionFromBot: ConversationType = {
    //     //   isBot: true,
    //     //   msgContent: response.choices[0].text,
    //     //   timeStamp: response.created,
    //     // };
    //     //dispatch(updateThread(converstaionFromBot));
    //   })
    //   .catch((e) => console.log('ERROR : sendMsgAction', e))
    //   .finally(() => dispatch(isLoading(false)));
  };
};
