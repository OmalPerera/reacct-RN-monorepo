import React, { memo, useState } from 'react';
import { colors } from '../../../utils';
import { images } from '../../../utils/images';

interface InputComponentProps {
  onSend: (msg: string) => void;
}

const InputComponent = ({ onSend }: InputComponentProps): JSX.Element => {
  const [msg, setMsg] = useState('');

  return (
    <div style={styles.inputSectionContainer}>
      <div style={styles.txtInputWraper}>
        <input
          type="text"
          style={styles.inputStyle}
          onChange={(e) => setMsg(e.target.value)}
          placeholder="Type here..."
          value={msg}
        />
        <button>
          <img src={images.repeat} alt="Repeat" style={styles.regenerateImg} />
        </button>
      </div>
      <button
        style={styles.sendBtnPressable}
        onClick={() => {
          onSend(msg);
        }}
      >
        <img src={images.send} alt="Send" style={styles.sendImg} />
      </button>
    </div>
  );
};

export default memo(InputComponent);

const styles = {
  inputSectionContainer: {
    display: 'flex',
    //flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px',
    backgroundColor: '#f0f0f0',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  txtInputWraper: {
    display: 'flex',
    //flexDirection: 'row',
    alignItems: 'center',
  },
  inputStyle: {
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginRight: '10px',
  },
  regenerateImg: {
    width: '24px',
    height: '24px',
    cursor: 'pointer',
  },
  sendBtnPressable: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },
  sendImg: {
    width: '24px',
    height: '24px',
  },
};

// const styles = StyleSheet.create({
//   inputSectionContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     borderTopColor: colors.greyBorder,
//     borderTopWidth: 1,
//     paddingVertical: 15,
//     paddingHorizontal: 15,
//   },
//   txtInputWraper: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: colors.greySecondary,
//     marginEnd: 10,
//     borderColor: colors.greyBorder,
//     borderWidth: 1,
//     paddingHorizontal: 15,
//     borderRadius: 25,
//   },
//   inputStyle: {
//     color: colors.white,
//     fontSize: 17,
//     paddingTop: 12,
//     flex: 1,
//     height: 45,
//   },
//   sendBtnPressable: {
//     backgroundColor: colors.themeColor,
//     padding: 13,
//     borderRadius: 25,
//   },
//   regenerateImg: {
//     height: 20,
//     width: 20,
//   },
//   sendImg: {
//     height: 21,
//     width: 21,
//   },
// });
