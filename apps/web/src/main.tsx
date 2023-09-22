import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import ChatBubbleComponent from './features/chat/components/ChatBubble';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <ChatBubbleComponent isBot={false} msg="helloo" />
    {/* <App /> */}
  </StrictMode>
);
