import { ConversationType } from '@m-repo/types';
import { Dispatch } from 'redux';
import { sendMsgService } from '@m-repo/chat-module';
import { isLoading, updateThread } from '@m-repo/chat-module';

export const sendMsgAction = (message: ConversationType) => {
  return async (dispatch: Dispatch) => {
    dispatch(updateThread(message));
    dispatch(isLoading(true));

    sendMsgService('')
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
