import React from 'react';
import { colors } from '../../../utils';
import { images } from '../../../utils/images';

type NavbarProps = {
  onRightBtnPress: any;
  onMenuPress: any;
};
const NavBarComponent = ({ onRightBtnPress, onMenuPress }: NavbarProps) => {
  return (
    <div style={styles.navBarContainer}>
      <button style={styles.menuBtn} onClick={onMenuPress}>
        <img src={images.menu} alt="Menu" style={styles.menuImg} />
      </button>
      <span style={styles.chatNameTxt}>Chat Name</span>
      <button onClick={onRightBtnPress}>
        <img src={images.botHeadshot} alt="Bot" style={styles.botImg} />
      </button>
    </div>
  );
};

export default NavBarComponent;

const styles = {
  navBarContainer: {
    display: 'flex',
    //flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px',
    backgroundColor: '#f0f0f0',
    borderBottom: '1px solid grey',
  },
  menuBtn: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },
  menuImg: {
    width: '24px',
    height: '24px',
  },
  chatNameTxt: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  botImg: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
  },
};
