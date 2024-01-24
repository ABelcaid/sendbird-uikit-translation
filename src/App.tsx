import "./App.css";

import SendbirdProvider from "@sendbird/uikit-react/SendbirdProvider";
import { RouterProvider } from "react-router-dom";
import { router as mobileRouter } from "./MobileLayout/Router";
import { useAppContext } from "./context/AppContext";

function App() {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const { appId, userName, userId } = useAppContext();

  return (
    <div className="sendbird-app">
      <SendbirdProvider
        appId={appId}
        userId={userId}
        nickname={userName}
        breakpoint={isMobile}
      >
        <RouterProvider router={mobileRouter} />
      </SendbirdProvider>
    </div>
  );
}

export default App;
