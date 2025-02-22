import React from 'react';
import ReactDOM from 'react-dom/client'; // react-dom/client import edilmelidir
import { ContextProvider } from "./context/Context";
import App from './App';

// root elementini seçin
const root = ReactDOM.createRoot(document.getElementById("root"));

// App bileşenini render edin
root.render(
  //<React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  //</React.StrictMode>
);

