import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import ChatBubbleComponent from './features/chat/components/ChatBubble';
import NavBarComponent from './features/chat/components/NavBarComponent';
import StartChatInstructionsComponent from './features/chat/components/StartChatInstructionsComponent';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    {/* <ChatBubbleComponent isBot={false} msg="helloo" /> */}
    {/* <NavBarComponent onMenuPress={() => {}} onRightBtnPress={() => {}} /> */}
    <StartChatInstructionsComponent />
    {/* <App /> */}
  </StrictMode>
);
