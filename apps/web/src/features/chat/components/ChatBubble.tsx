import React from 'react';
import { colors } from '../../../utils';
import styles from '../styles/ChatBubble.module.css';

type ChatBubbleComponentProps = {
  isBot: boolean;
  msg: string;
};

const ChatBubbleComponent = ({
  isBot = false,
  msg = '',
}: ChatBubbleComponentProps): JSX.Element => {
  const getAvatarImage = () => {
    return isBot
      ? { uri: 'https://i.pravatar.cc/300?img=12' } //images.botHeadshot
      : { uri: 'https://i.pravatar.cc/300?img=12' };
  };

  const bubbleContainerStyles = {
    display: 'flex',
    //flexDirection: 'column',
    padding: '15px', // Combine paddingHorizontal, paddingTop, paddingBottom
    ...(isBot && { backgroundColor: colors.greySecondary }),
  };

  return (
    <div style={bubbleContainerStyles}>
      <div className={styles['avatarContainerStyles']}>
        <div className={styles['avatarStyStyles']}>
          {/* <img
            src={getAvatarImage()}
            alt="Avatar"
            className={styles['avatarImgStyles']}
          /> */}
        </div>
      </div>
      <div>
        <span className={styles['botTextStyles']}>{msg}</span>
      </div>
    </div>
  );
};

export default ChatBubbleComponent;
