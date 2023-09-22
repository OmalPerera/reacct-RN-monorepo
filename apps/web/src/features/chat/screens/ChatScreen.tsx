import React from 'react';
import NavBarComponent from '../components/NavBarComponent';
import InputComponent from '../components/InputComponent';
//import StartChatInstructionsComponent from '../components/StartChatInstructionsComponent';
//import { useDispatch, useSelector } from 'react-redux';
//import { ConversationType } from '../../../types/chat.types';
//import { RootStoreType } from '../../../store/reducers/types';
import ChatBubbleComponent from '../components/ChatBubble';
//import { sendMsgAction } from '../actions/chatActions';
import { colors } from '../../../utils';
//import { useNavigation } from '@react-navigation/native';

const ChatScreen = (): JSX.Element => {
  const onMsgSend = (msg: string) => {};

  const onRightBtnPress = () => {};

  return (
    <div style={styles.bodyContainer}>
      <div style={styles.outermostContainer}>
        <NavBarComponent
          onMenuPress={() => {}}
          onRightBtnPress={onRightBtnPress}
        />
        <div style={styles.promptContainer}>
          <ChatBubbleComponent isBot={false} msg="helloo" />
        </div>
        <InputComponent onSend={onMsgSend} />
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

const styles = {
  bodyContainer: {
    flex: 1,
    display: 'flex',
    //flexDirection: 'column',
  },
  outermostContainer: {
    flex: 1,
    display: 'flex',
    //flexDirection: 'column',
  },
  promptContainer: {
    flex: 1,
    //overflowY: 'auto',
    padding: '10px',
    backgroundColor: '#f0f0f0',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
};
