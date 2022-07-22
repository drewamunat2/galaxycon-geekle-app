import React from 'react';
import './index.css'
import * as ReactDOM from 'react-dom/client';
import { AuthProvider } from 'react-auth-kit'
import RouteComponent from './RouteComponent';
//import refreshApi from "./auth/refreshApi";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthProvider 
      authType = {'cookie'}
      authName={'_auth'}
      cookieDomain={window.location.hostname}
      cookieSecure={window.location.protocol === "https:"}
      //refresh={refreshApi}
    >
        <RouteComponent />
    </AuthProvider>
  </React.StrictMode>
);