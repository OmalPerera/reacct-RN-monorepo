import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import NavBarComponent from '../components/NavBarComponent';
import InputComponent from '../components/InputComponent';
import StartChatInstructionsComponent from '../components/StartChatInstructionsComponent';
import { useDispatch, useSelector } from 'react-redux';
import { ConversationType } from '@m-repo/types';
import ChatBubbleComponent from '../components/ChatBubble';
import { fetchRatingsById, sendMsgAction } from '../actions/chatActions';
import { colors } from '../../../utils';
import { useNavigation } from '@react-navigation/native';
import { RootState } from '../../../store';

const ChatScreen = (props): React.JSX.Element => {
  const { navigation } = props;

  const chatConversation = useSelector(
    (state: RootState) => state.chatReducer.conversationThread
  );

  //const navigation = useNavigation();
  const dispatch = useDispatch();

  const onMsgSend = (msg: string) => {
    const message: ConversationType = {
      timeStamp: Date.now(),
      isBot: false,
      msgContent: msg,
    };
    //dispatch<any>(sendMsgAction(message));
    dispatch<any>(fetchRatingsById(15125)); //this action uses gql
  };

  const onRightBtnPress = () => {
    navigation.navigate('AboutScreen');
  };

  return (
    <>
      <SafeAreaView style={styles.backgroundStyle} />
      <StatusBar barStyle={'light-content'} backgroundColor={colors.greyBg} />
      <View style={styles.bodyContainer}>
        <View style={styles.outermostContainer}>
          <NavBarComponent
            onMenuPress={() => {
              //navigation.openDrawer();
            }}
            onRightBtnPress={onRightBtnPress}
          />
          <ScrollView style={styles.promptContainer}>
            {chatConversation.length > 0 ? (
              <>
                {chatConversation.map((e) => (
                  <ChatBubbleComponent
                    isBot={e.isBot}
                    msg={e.msgContent}
                    key={e.timeStamp}
                  />
                ))}
              </>
            ) : (
              <StartChatInstructionsComponent />
            )}
          </ScrollView>
          <InputComponent onSend={onMsgSend} />
        </View>
      </View>
      <SafeAreaView style={styles.backgroundStyle} />
    </>
  );
};

const styles = StyleSheet.create({
  outermostContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  promptContainer: {
    flex: 1,
    flexDirection: 'column-reverse',
  },
  bodyContainer: {
    backgroundColor: colors.greyBg,
    flex: 1,
  },
  backgroundStyle: {
    backgroundColor: colors.greyBg,
  },
});

export default ChatScreen;
