import React from 'react';
import { colors } from '../../../utils';
import images from '@m-repo/assets';

const StartChatInstructionsComponent = () => {
  return (
    <div style={styles.instructionContainer}>
      <div>
        <img
          src={images.botWithMagnifier}
          alt="Bot"
          style={styles.botImageStyles}
        />
      </div>
      <div style={styles.lowerContentContainer}>
        <div style={styles.spinnedArrowContainer}>
          <img
            src={images.onboardArrow}
            alt="Arrow"
            style={styles.spinnedArrowImg}
          />
        </div>
        <div style={styles.textContainer}>
          <h2 style={styles.instructionHeader}>Start a new conversation</h2>
          <p style={styles.instructionDetails}>
            Type your first message below.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StartChatInstructionsComponent;

const styles = {
  instructionContainer: {
    display: 'flex',
    //flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px',
    backgroundColor: '#f0f0f0',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  botImageStyles: {
    width: '64px',
    height: '64px',
    //objectFit: 'contain',
  },
  lowerContentContainer: {
    display: 'flex',
    //flexDirection: 'row',
    alignItems: 'center',
  },
  spinnedArrowContainer: {
    marginRight: '20px',
  },
  spinnedArrowImg: {
    width: '32px',
    height: '32px',
    //objectFit: 'contain',
  },
  textContainer: {
    display: 'flex',
    //flexDirection: 'column',
  },
  instructionHeader: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  instructionDetails: {
    fontSize: '16px',
  },
};

// const styles = StyleSheet.create({
//   instructionContainer: {
//     flexDirection: 'column',
//     marginBottom: 10,
//   },
//   botImageStyles: {
//     width: 120,
//   },
//   lowerContentContainer: {
//     flexDirection: 'row',
//     marginHorizontal: 15,
//   },
//   spinnedArrowContainer: {
//     flex: 1,
//   },
//   spinnedArrowImg: {
//     height: 75,
//   },
//   textContainer: {
//     flex: 3,
//     flexDirection: 'column',
//     marginLeft: 30,
//   },
//   instructionHeader: {
//     fontSize: 20,
//     color: colors.white,
//     fontWeight: '600',
//     marginBottom: 8,
//   },
//   instructionDetails: {
//     fontSize: 14,
//     color: colors.white,
//   },
// });
