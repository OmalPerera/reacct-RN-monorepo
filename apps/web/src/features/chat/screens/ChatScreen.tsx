import React, { CSSProperties } from 'react';
import NavBarComponent from '../components/NavBarComponent';
import InputComponent from '../components/InputComponent';
//import StartChatInstructionsComponent from '../components/StartChatInstructionsComponent';
//import { useDispatch, useSelector } from 'react-redux';
//import { ConversationType } from '@m-repo/types';
//import { RootStoreType } from '../../../store/reducers/types';
import ChatBubbleComponent from '../components/ChatBubble';
//import { sendMsgAction } from '../actions/chatActions';
import { colors } from '../../../utils';
//import { useNavigation } from '@react-navigation/native';
import st from '../styles/ChatScreen.module.css';

const ChatScreen = (): JSX.Element => {
  const onMsgSend = (msg: string) => {};

  const onRightBtnPress = () => {};

  return (
    <div className={st['bodyContainer']}>
      <div className={st['outermostContainer']}>
        <div>
          <NavBarComponent
            onMenuPress={() => {}}
            onRightBtnPress={onRightBtnPress}
          />
        </div>
        <div className={st['promptContainer']}>
          <ChatBubbleComponent isBot={false} msg="helloo" />
        </div>
        <div>
          <InputComponent onSend={onMsgSend} />
        </div>
      </div>
    </div>
  );
};

// const styles = StyleSheet.create({
//   outermostContainer: {
//     flex: 1,
//     flexDirection: 'column',
//   },
//   promptContainer: {
//     flex: 1,
//     flexDirection: 'column-reverse',
//   },
//   bodyContainer: {
//     backgroundColor: colors.greyBg,
//     flex: 1,
//   },
//   backgroundStyle: {
//     backgroundColor: colors.greyBg,
//   },
// });

export default ChatScreen;
