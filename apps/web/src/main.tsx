import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import ChatScreen from './features/chat/screens/ChatScreen';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <ChatScreen />
    {/* <App /> */}
  </StrictMode>
);
