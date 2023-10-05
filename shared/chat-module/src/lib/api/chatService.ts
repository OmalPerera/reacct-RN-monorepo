import { SEND_PROMPT, restClient } from '@m-repo/network';
import { ConversationType, ResponseDataType } from '@m-repo/types';

export const sendMsgService = (message: string) => {
  return restClient.get(SEND_PROMPT);
};
